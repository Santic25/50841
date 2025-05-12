// Generated from e:/Cloud Drives/OneDrive - alumnos.frm.utn.edu.ar/Uni/2do Año/1er Cuatrimestre/ZZZ - Sintaxis y Semántica de los Lenguajes/Analizador/50268/analizador-reglas-domoticas/DeviceDSL.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import DeviceDSLListener from './DeviceDSLListener.js';
import DeviceDSLVisitor from './DeviceDSLVisitor.js';

const serializedATN = [4,1,15,62,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,5,0,20,8,0,10,0,12,0,23,9,0,1,0,1,0,
1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,3,3,42,8,3,1,
4,1,4,1,5,1,5,1,5,3,5,49,8,5,1,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,
1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,1,1,0,12,13,57,0,21,1,0,0,0,2,26,1,0,0,
0,4,32,1,0,0,0,6,41,1,0,0,0,8,43,1,0,0,0,10,48,1,0,0,0,12,50,1,0,0,0,14,
53,1,0,0,0,16,56,1,0,0,0,18,20,3,2,1,0,19,18,1,0,0,0,20,23,1,0,0,0,21,19,
1,0,0,0,21,22,1,0,0,0,22,24,1,0,0,0,23,21,1,0,0,0,24,25,5,0,0,1,25,1,1,0,
0,0,26,27,5,1,0,0,27,28,3,4,2,0,28,29,5,2,0,0,29,30,3,10,5,0,30,31,5,3,0,
0,31,3,1,0,0,0,32,33,5,14,0,0,33,34,3,6,3,0,34,35,3,8,4,0,35,5,1,0,0,0,36,
42,5,4,0,0,37,38,5,5,0,0,38,42,5,6,0,0,39,40,5,7,0,0,40,42,5,6,0,0,41,36,
1,0,0,0,41,37,1,0,0,0,41,39,1,0,0,0,42,7,1,0,0,0,43,44,7,0,0,0,44,9,1,0,
0,0,45,49,3,12,6,0,46,49,3,14,7,0,47,49,3,16,8,0,48,45,1,0,0,0,48,46,1,0,
0,0,48,47,1,0,0,0,49,11,1,0,0,0,50,51,5,8,0,0,51,52,5,14,0,0,52,13,1,0,0,
0,53,54,5,9,0,0,54,55,5,14,0,0,55,15,1,0,0,0,56,57,5,10,0,0,57,58,5,14,0,
0,58,59,5,11,0,0,59,60,5,13,0,0,60,17,1,0,0,0,3,21,41,48];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class DeviceDSLParser extends antlr4.Parser {

    static grammarFileName = "DeviceDSL.g4";
    static literalNames = [ null, "'cuando'", "'entonces'", "';'", "'es'", 
                            "'mayor'", "'que'", "'menor'", "'activar'", 
                            "'desactivar'", "'ajustar'", "'a'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, "ESTADO", "NUMERO", 
                             "IDENT", "WS" ];
    static ruleNames = [ "prog", "regla", "condicion", "estado_condicion", 
                         "valor_condicion", "accion", "activar", "desactivar", 
                         "ajustar" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = DeviceDSLParser.ruleNames;
        this.literalNames = DeviceDSLParser.literalNames;
        this.symbolicNames = DeviceDSLParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, DeviceDSLParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 18;
	            this.regla();
	            this.state = 23;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 24;
	        this.match(DeviceDSLParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	regla() {
	    let localctx = new ReglaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, DeviceDSLParser.RULE_regla);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(DeviceDSLParser.T__0);
	        this.state = 27;
	        this.condicion();
	        this.state = 28;
	        this.match(DeviceDSLParser.T__1);
	        this.state = 29;
	        this.accion();
	        this.state = 30;
	        this.match(DeviceDSLParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, DeviceDSLParser.RULE_condicion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.match(DeviceDSLParser.IDENT);
	        this.state = 33;
	        this.estado_condicion();
	        this.state = 34;
	        this.valor_condicion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	estado_condicion() {
	    let localctx = new Estado_condicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, DeviceDSLParser.RULE_estado_condicion);
	    try {
	        this.state = 41;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 36;
	            this.match(DeviceDSLParser.T__3);
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 37;
	            this.match(DeviceDSLParser.T__4);
	            this.state = 38;
	            this.match(DeviceDSLParser.T__5);
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 39;
	            this.match(DeviceDSLParser.T__6);
	            this.state = 40;
	            this.match(DeviceDSLParser.T__5);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor_condicion() {
	    let localctx = new Valor_condicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, DeviceDSLParser.RULE_valor_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        _la = this._input.LA(1);
	        if(!(_la===12 || _la===13)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	accion() {
	    let localctx = new AccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, DeviceDSLParser.RULE_accion);
	    try {
	        this.state = 48;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 45;
	            this.activar();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 46;
	            this.desactivar();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 47;
	            this.ajustar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	activar() {
	    let localctx = new ActivarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, DeviceDSLParser.RULE_activar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(DeviceDSLParser.T__7);
	        this.state = 51;
	        this.match(DeviceDSLParser.IDENT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	desactivar() {
	    let localctx = new DesactivarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, DeviceDSLParser.RULE_desactivar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(DeviceDSLParser.T__8);
	        this.state = 54;
	        this.match(DeviceDSLParser.IDENT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ajustar() {
	    let localctx = new AjustarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, DeviceDSLParser.RULE_ajustar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.match(DeviceDSLParser.T__9);
	        this.state = 57;
	        this.match(DeviceDSLParser.IDENT);
	        this.state = 58;
	        this.match(DeviceDSLParser.T__10);
	        this.state = 59;
	        this.match(DeviceDSLParser.NUMERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

DeviceDSLParser.EOF = antlr4.Token.EOF;
DeviceDSLParser.T__0 = 1;
DeviceDSLParser.T__1 = 2;
DeviceDSLParser.T__2 = 3;
DeviceDSLParser.T__3 = 4;
DeviceDSLParser.T__4 = 5;
DeviceDSLParser.T__5 = 6;
DeviceDSLParser.T__6 = 7;
DeviceDSLParser.T__7 = 8;
DeviceDSLParser.T__8 = 9;
DeviceDSLParser.T__9 = 10;
DeviceDSLParser.T__10 = 11;
DeviceDSLParser.ESTADO = 12;
DeviceDSLParser.NUMERO = 13;
DeviceDSLParser.IDENT = 14;
DeviceDSLParser.WS = 15;

DeviceDSLParser.RULE_prog = 0;
DeviceDSLParser.RULE_regla = 1;
DeviceDSLParser.RULE_condicion = 2;
DeviceDSLParser.RULE_estado_condicion = 3;
DeviceDSLParser.RULE_valor_condicion = 4;
DeviceDSLParser.RULE_accion = 5;
DeviceDSLParser.RULE_activar = 6;
DeviceDSLParser.RULE_desactivar = 7;
DeviceDSLParser.RULE_ajustar = 8;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DeviceDSLParser.RULE_prog;
    }

	EOF() {
	    return this.getToken(DeviceDSLParser.EOF, 0);
	};

	regla = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ReglaContext);
	    } else {
	        return this.getTypedRuleContext(ReglaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DeviceDSLListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DeviceDSLListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DeviceDSLVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ReglaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DeviceDSLParser.RULE_regla;
    }

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	accion() {
	    return this.getTypedRuleContext(AccionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DeviceDSLListener ) {
	        listener.enterRegla(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DeviceDSLListener ) {
	        listener.exitRegla(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DeviceDSLVisitor ) {
	        return visitor.visitRegla(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DeviceDSLParser.RULE_condicion;
    }

	IDENT() {
	    return this.getToken(DeviceDSLParser.IDENT, 0);
	};

	estado_condicion() {
	    return this.getTypedRuleContext(Estado_condicionContext,0);
	};

	valor_condicion() {
	    return this.getTypedRuleContext(Valor_condicionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DeviceDSLListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DeviceDSLListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DeviceDSLVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Estado_condicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DeviceDSLParser.RULE_estado_condicion;
    }


	enterRule(listener) {
	    if(listener instanceof DeviceDSLListener ) {
	        listener.enterEstado_condicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DeviceDSLListener ) {
	        listener.exitEstado_condicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DeviceDSLVisitor ) {
	        return visitor.visitEstado_condicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Valor_condicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DeviceDSLParser.RULE_valor_condicion;
    }

	ESTADO() {
	    return this.getToken(DeviceDSLParser.ESTADO, 0);
	};

	NUMERO() {
	    return this.getToken(DeviceDSLParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DeviceDSLListener ) {
	        listener.enterValor_condicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DeviceDSLListener ) {
	        listener.exitValor_condicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DeviceDSLVisitor ) {
	        return visitor.visitValor_condicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DeviceDSLParser.RULE_accion;
    }

	activar() {
	    return this.getTypedRuleContext(ActivarContext,0);
	};

	desactivar() {
	    return this.getTypedRuleContext(DesactivarContext,0);
	};

	ajustar() {
	    return this.getTypedRuleContext(AjustarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DeviceDSLListener ) {
	        listener.enterAccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DeviceDSLListener ) {
	        listener.exitAccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DeviceDSLVisitor ) {
	        return visitor.visitAccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ActivarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DeviceDSLParser.RULE_activar;
    }

	IDENT() {
	    return this.getToken(DeviceDSLParser.IDENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DeviceDSLListener ) {
	        listener.enterActivar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DeviceDSLListener ) {
	        listener.exitActivar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DeviceDSLVisitor ) {
	        return visitor.visitActivar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DesactivarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DeviceDSLParser.RULE_desactivar;
    }

	IDENT() {
	    return this.getToken(DeviceDSLParser.IDENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DeviceDSLListener ) {
	        listener.enterDesactivar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DeviceDSLListener ) {
	        listener.exitDesactivar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DeviceDSLVisitor ) {
	        return visitor.visitDesactivar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AjustarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DeviceDSLParser.RULE_ajustar;
    }

	IDENT() {
	    return this.getToken(DeviceDSLParser.IDENT, 0);
	};

	NUMERO() {
	    return this.getToken(DeviceDSLParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DeviceDSLListener ) {
	        listener.enterAjustar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DeviceDSLListener ) {
	        listener.exitAjustar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DeviceDSLVisitor ) {
	        return visitor.visitAjustar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




DeviceDSLParser.ProgContext = ProgContext; 
DeviceDSLParser.ReglaContext = ReglaContext; 
DeviceDSLParser.CondicionContext = CondicionContext; 
DeviceDSLParser.Estado_condicionContext = Estado_condicionContext; 
DeviceDSLParser.Valor_condicionContext = Valor_condicionContext; 
DeviceDSLParser.AccionContext = AccionContext; 
DeviceDSLParser.ActivarContext = ActivarContext; 
DeviceDSLParser.DesactivarContext = DesactivarContext; 
DeviceDSLParser.AjustarContext = AjustarContext; 
