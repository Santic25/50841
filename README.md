# Analizador

> ⚠️ Si ya clonaste el proyecto con todo generado y las dependencias instaladas, puedes saltar directamente a la sección [▶️ Ejecutar el intérprete](#️-ejecutar-el-int%C3%A9rprete).

Este proyecto proporciona un **intérprete básico** para un lenguaje sencillo de reglas de dispositivos. A continuación encontrarás instrucciones para generar los artefactos de ANTLR, instalar dependencias y ejecutar ejemplos.

---

## 📁 Estructura del proyecto

```
analizador-reglas-domoticas/
├─ generated/               # Código generado por ANTLR
│   ├─ DeviceDSLLexer.js
│   ├─ DeviceDSLParser.js
│   ├─ DeviceDSLVisitor.js
├─ CustomDeviceVisitor.js   # Visitor que traduce el AST a JavaScript
├─ DeviceDSL.g4             # Gramática ANTLR4 (parser + lexer)
├─ index.js                 # Programa principal (lexer, parser, visitor y ejecución)
└─ input.txt                # Archivo de ejemplo con la entrada DSL
```

---

## 🚀 Requisitos

* **Node.js** (≥ v16): para ejecutar el intérprete.
* **Java** (JRE 11 o superior): requerido por ANTLR.

---

## ⚙️ Generar código con ANTLR

1. Descarga el JAR de ANTLR (p.ej. `antlr-4.13.2-complete.jar`).
2. Ejecuta en la raíz del proyecto:

   ```bash
   # Opción A: usando el comando antlr4 si lo tienes instalado
   antlr4 -Dlanguage=JavaScript -visitor DeviceDSL.g4 -o generated

   # Opción B: con el JAR directamente
   java -jar path/to/antlr-4.13.2-complete.jar \
       -Dlanguage=JavaScript \
       -visitor \
       DeviceDSL.g4 -o generated
   ```

   Esto crea los archivos:

   * `generated/DeviceDSLLexer.js`
   * `generated/DeviceDSLParser.js`
   * `generated/DeviceDSLVisitor.js`

---

## 📦 Instalar dependencias

> ℹ️ Solo necesitas instalar `antlr4` si vas a ejecutar el proyecto con Node.js. Si solo vas a usar la extensión de ANTLR4 en VS Code para ver la gramática y el árbol, no hace falta instalarlo.

```bash
# Inicializa un package.json (si no existe)
npm init -y

# Instala antlr4 y readline
npm install antlr4
```

---

## ▶️ Ejecutar el analizador

1. Crea o edita `input.txt` con tu regla DSL. Por ejemplo:

   ```text
   cuando luz es encendido entonces desactivar luz ;
   ```
2. Ejecuta:

   ```bash
   node index.js
   ```
3. Verás en consola:

   1. **Entrada válida** o mensaje de **error sintáctico** (línea y causa).
   2. **Tabla de lexemas y tokens** reconocidos.
   3. **Árbol de derivación** en formato de texto.
   4. **Traducción a JavaScript** y su **ejecución**.

> La salida debería ser:
>
> ```text
> cuando luz es encendido entonces desactivar luz ;
>
> Entrada válida.
>
> Tabla de lexemas y tokens (total 8):
> TOKEN           | LEXEMA
> ----------------|----------------
> 'cuando'        | cuando
> IDENT           | luz
> 'es'            | es
> ESTADO          | encendido
> 'entonces'      | entonces
> 'desactivar'    | desactivar
> IDENT           | luz
> ';'             | ;
>
> Árbol de derivación:
> (prog (regla cuando (condicion luz (estado_condicion es) (valor_condicion encendido)) entonces (accion (desactivar desactivar luz)) ;) <EOF>)
>
> Traducción a JavaScript:
> const luz = {
>   encendido : true,
>   nivel     : 0,
>   activar   : function(){ this.encendido = true; },
>   desactivar: function(){ this.encendido = false; },
>   ajustar   : function(v){ this.nivel = v; }
> };
> if (luz.encendido === true) luz.desactivar();text
> ```
