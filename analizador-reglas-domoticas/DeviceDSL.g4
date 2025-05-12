// Gramática para un DSL de control de dispositivos domóticos
// Se definen reglas de parser (gramática) y al final los tokens (lexemas)

grammar DeviceDSL;

// ----- Parser Rules (definen la estructura del lenguaje) -----

// Programa: cero o más reglas seguido de EOF
prog           : regla* EOF ;

// Cada regla: palabra clave, condición, acción y ';'
regla          : 'cuando' condicion 'entonces' accion ';' ;

// Condición: nombre de dispositivo + operador + valor
condicion      : IDENT estado_condicion valor_condicion ;

// Operadores válidos en la condición
estado_condicion
               : 'es'            // igualdad booleana
               | 'mayor' 'que'  // comparación numérica '>'
               | 'menor' 'que'  // comparación numérica '<'
               ;

// Valor de la condición: estado o número
valor_condicion
               : ESTADO         // 'encendido' | 'apagado' (booleano)
               | NUMERO         // dígitos (numérico)
               ;

// Acción: activar, desactivar o ajustar un dispositivo
accion         : activar
               | desactivar
               | ajustar
               ;

// Cada acción con su sintaxis específica
activar        : 'activar' IDENT ;
desactivar     : 'desactivar' IDENT ;
ajustar        : 'ajustar' IDENT 'a' NUMERO ;


// ----- Lexer Rules (definen los tokens o lexemas) -----

// Estados booleanos literales
ESTADO         : 'encendido' | 'apagado' ;

// Secuencia de dígitos para valores numéricos
NUMERO         : DIGITO+ ;

// Identificador: letra seguida de letras, dígitos o '_' (nombre de dispositivo)
IDENT          : LETRA (LETRA | DIGITO | '_' )* ;

// Fragmentos auxiliares (no generan tokens)
fragment DIGITO: [0-9] ;
fragment LETRA : [a-zA-Z] ;

// Espacios en blanco ignorados
WS             : [ \t\r\n]+ -> skip ;
