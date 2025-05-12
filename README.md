# ▶️ Ejecutar el analizador

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
