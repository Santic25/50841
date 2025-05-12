// index.js: Entry point para procesar el DSL de dispositivos
// Informa si la entrada es válida o contiene errores, luego muestra tabla, árbol y traducción solo si es válida

import DeviceDSLLexer from "./generated/DeviceDSLLexer.js";
import DeviceDSLParser from "./generated/DeviceDSLParser.js";
import { CustomDeviceVisitor } from "./CustomDeviceVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from "readline";
import fs from "fs";

async function main() {
    let input;
    // Leer input.txt o solicitar por stdin
    try {
        input = fs.readFileSync("input.txt", "utf8");
    } catch {
        input = await promptInput();
        console.log(input);
    }

    // 1) Análisis sintáctico: construir AST y capturar errores
    const lexer1 = new DeviceDSLLexer(CharStreams.fromString(input));
    const parser = new DeviceDSLParser(new CommonTokenStream(lexer1));

    let hasError = false;
    parser.removeErrorListeners();
    parser.addErrorListener({
        syntaxError: (_rec, _off, line, col, msg) => {
            console.error(`Error sintáctico en línea ${line}:${col} – ${msg}`);
            hasError = true;
        }
    });
    const tree = parser.prog();

    if (hasError) {
        // Si hubo errores, no continuar con traducción
        return;
    }
    console.log("\nEntrada válida.\n");

    // 2) Análisis léxico: tabla de tokens
    const lexer2 = new DeviceDSLLexer(CharStreams.fromString(input));
    const tokens = lexer2.getAllTokens().filter(t => t.type !== antlr4.Token.EOF);
    console.log(`Tabla de lexemas y tokens (total ${tokens.length}):`);
    console.log("TOKEN           | LEXEMA");
    console.log("----------------|----------------");
    tokens.forEach(t => {
        const name = DeviceDSLParser.symbolicNames[t.type] || DeviceDSLParser.literalNames[t.type] || "<UNKNOWN>";
        console.log(`${name.padEnd(15)} | ${t.text}`);
    });

    // 3) Mostrar árbol de derivación concreto
    console.log("\nÁrbol de derivación:");
    console.log(tree.toStringTree(parser.ruleNames));

    // 4) Traducción y ejecución con Visitor
    const jsLines = new CustomDeviceVisitor().visit(tree);
    console.log("\nTraducción a JavaScript:");
    jsLines.forEach(line => console.log(line));
    try {
        new Function(jsLines.join("\n"))();
    } catch (e) {
        console.error("Error al ejecutar el código traducido:", e);
    }
}

function promptInput() {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    return new Promise(resolve =>
        rl.question("Ingrese una cadena: ", ans => {
            rl.close();
            resolve(ans);
        })
    );
}

main();
