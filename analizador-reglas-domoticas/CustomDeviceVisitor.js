// Genera código JS desde el AST de la gramática DeviceDSL
import DeviceDSLVisitor from "./generated/DeviceDSLVisitor.js";

export class CustomDeviceVisitor extends DeviceDSLVisitor {
  constructor() {
    super();
    // Map de declaraciones "const <dispositivo> = {...}" y lista de sentencias if
    this.declarations = new Map();
    this.statements   = [];
  }

  // Recorre todas las reglas y devuelve líneas de código JS
  visitProg(ctx) {
    ctx.regla().forEach(r => this.visit(r));
    return [
      ...this.declarations.values(),
      ...this.statements
    ];
  }

  // Convierte una regla DSL en un "if(condición) acción;"
  visitRegla(ctx) {
    const cond = this.visit(ctx.condicion());
    const act  = this.visit(ctx.accion());
    this.statements.push(`if (${cond}) ${act};`);
  }

  /* Traduce condiciones: identifica dispositivo, operador y valor,
     distingue entre booleano (encendido) y numérico (nivel) */
  visitCondicion(ctx) {
    const name   = ctx.IDENT().getText();
    const opText = ctx.estado_condicion().getText().toLowerCase();
    const valCtx = ctx.valor_condicion();

    let left, right;
    if (valCtx.NUMERO()) {
      left  = `${name}.nivel`;
      right = valCtx.NUMERO().getText();
    } else {
      left  = `${name}.encendido`;
      right = valCtx.getText() === "encendido" ? "true" : "false";
    }

    // Selección de operador JS
    let op;
    if (opText === "es")       op = "" === "" ? "===" : ""; // 'es' ➔ '==='
    if (opText === "es") op = "===";
    else if (opText.includes("mayor")) op = ">";
    else if (opText.includes("menor")) op = "<";
    else throw new Error(`Operador no soportado: ${opText}`);

    // Registrar dispositivo con estado inicial
    const initOn = left.endsWith('.encendido') && right === 'true';
    this.ensureDevice(name, initOn);

    return `${left} ${op} ${right}`;
  }

  // Selecciona el método según la acción DSL
  visitAccion(ctx) {
    if (ctx.activar())    return this.visit(ctx.activar());
    if (ctx.desactivar()) return this.visit(ctx.desactivar());
    if (ctx.ajustar())    return this.visit(ctx.ajustar());
    throw new Error(`Acción no soportada: ${ctx.getText()}`);
  }

  visitActivar(ctx) {
    const name = ctx.IDENT().getText();
    this.ensureDevice(name);
    return `${name}.activar()`;
  }

  visitDesactivar(ctx) {
    const name = ctx.IDENT().getText();
    this.ensureDevice(name);
    return `${name}.desactivar()`;
  }

  visitAjustar(ctx) {
    const name = ctx.IDENT().getText();
    const val  = ctx.NUMERO().getText();
    this.ensureDevice(name);
    return `${name}.ajustar(${val})`;
  }

  // Crea una declaración "const <name> = {{...}}" solo una vez
  ensureDevice(name, initialOn = false) {
    if (this.declarations.has(name)) return;
    const decl = `
const ${name} = {
  encendido : ${initialOn},
  nivel     : 0,
  activar   : function(){ this.encendido = true; },
  desactivar: function(){ this.encendido = false; },
  ajustar   : function(v){ this.nivel = v; }
};`.trim();
    this.declarations.set(name, decl);
  }
}
