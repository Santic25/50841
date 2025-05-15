   # 🚀 Requisitos

- Node.js (≥ v16): para ejecutar el intérprete.

- Java (JRE 11 o superior): requerido por ANTLR.
 
- Visual Studio Code con la extensión "ANTLR4 grammar syntax support" configurado de la siguiente manera:
 
  1. En el menú Archivo/Preferencias/Configuración ( CTL + ,) y buscá las preferencias de ANTLR
   
  2. Bajá hasta la sección Antlr4:Generation y edita settings.json. 
   
  3. Asegurate que la configuración quede así:
   
>```text
>"antlr4.generation": {
>"alternativeJar": "antlr-4.13.2-complete.jar",
>"mode": "external",
>"listeners": true,
>"visitors": true,
>"language": "JavaScript",
>"outputDir": "./generated"
>}
>```

# 📥 Clonando el proyecto

Para poder probar el analizador primero hay que clonar el proyecto en tu máquina local. Para eso:

1) Abrir la terminal de windows
   
2) escribir el siguiente comando

```bash
git clone https://github.com/Santic25/50841
```

3) Esto dará una salida como la siguiente 

![imagen](https://github.com/user-attachments/assets/e52f076e-9e12-4980-a8d6-b1761cebfa16)

4) Abrir Visual Studio Code y abrir el proyecto

![imagen](https://github.com/user-attachments/assets/eb3ee620-4f71-4634-9bd0-014493c38d19)

![imagen](https://github.com/user-attachments/assets/4b88c213-c1d6-4067-8867-5547eb5c89fa)



# ▶️ Ejecutando el analizador

Este analizador solo toma cadenas con un formato específico:

>```bash
> cuando <dispositivo> <condición> <valor> entonces <acción> ;
>```

### 🧱 Componentes de la regla

🔸 &lt;dispositivo&gt;

Un nombre que comienza con una letra, seguido de letras y/o números.
Ejemplos: luz, sensor1, tv2, aire

🔸 &lt;condición&gt;

Solo se permiten las siguientes condiciones:

    es

    mayor que

    menor que
    
🔸 &lt;valor&gt;

    Si la condición es 'es':
    Valores posibles: encendido, apagado

    Si la condición es 'mayor que' o 'menor que':
    Valores posibles: cualquier número (como 10, 22, 100)

🔸 &lt;acción&gt;

Debe ser una de las siguientes:

    activar <dispositivo>

    desactivar <dispositivo>

    ajustar <dispositivo> a <número>

### ✔️ Ejemplos válidos

```text
cuando luz es encendido entonces desactivar luz ;
```
```text
cuando sensor1 mayor que 25 entonces activar ventilador ;
```
```text
cuando aire menor que 18 entonces ajustar calefactor a 22 ;
```

### ❌ Ejemplos inválidos
```text
cuando 123sensor es encendido entonces activar luz ;      ← El nombre del dispositivo empieza con un número
```
```text
cuando luz igual a encendido entonces desactivar luz ;    ← "igual a" no es una condición válida
```
```text
cuando sensor1 mayor que alto entonces activar aire ;     ← "alto" no es un número válido
```

   
## ⏩ Ejecutar el analizador usando input.txt

El analizador ya viene con el archivo input.txt

1. Editá `input.txt` con la cadena que quieras analizar. Por ejemplo:

   ```text
   cuando luz es encendido entonces desactivar luz ;
   ```
2. Ejecutá:

   ```bash
   node index.js
   ```
3. En consola va a salir:

   1. **Entrada válida** o mensaje de **error sintáctico** (línea y causa).
   2. **Tabla de lexemas y tokens** reconocidos.
   3. **Árbol de derivación** en formato de texto.
   4. **Traducción a JavaScript** y su **ejecución**.

Siguiendo el ejemplo del primero paso, la salida debería ser:

> ```text
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

## ⏩ Ejecutar el analizador sin usar input.txt

1. Borrá el archivo `input.txt`

2. Ejecutá:

   ```bash
   node index.js
   ```
3. En consola va a salir:

   ```bash
   Ingrese una cadena: 
   ```
4. Ingresá la cedena que quieras analizar y tocá enter.
  
   Por ejemplo, si se ingresa la cadena "cuando luz es encendido entonces desactivar luz ;", la salida debería ser:

>
> ```text
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
