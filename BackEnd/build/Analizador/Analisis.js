/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var Analisis = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[6,10],$V1=[2,4],$V2=[1,4],$V3=[2,6],$V4=[1,6],$V5=[1,17],$V6=[2,11],$V7=[1,15],$V8=[1,18],$V9=[1,19],$Va=[1,20],$Vb=[1,21],$Vc=[1,22],$Vd=[1,30],$Ve=[1,31],$Vf=[9,37,38,44,45,46,47,48,49],$Vg=[8,10,13,16,39,40,41,42,43],$Vh=[2,20],$Vi=[1,49],$Vj=[1,47],$Vk=[1,48],$Vl=[1,50],$Vm=[2,18],$Vn=[1,56],$Vo=[1,57],$Vp=[2,53],$Vq=[1,60],$Vr=[1,66],$Vs=[1,67],$Vt=[1,68],$Vu=[1,69],$Vv=[1,70],$Vw=[1,71],$Vx=[2,47],$Vy=[2,22],$Vz=[1,79],$VA=[1,90],$VB=[1,92],$VC=[1,93],$VD=[1,91],$VE=[8,28,30,32],$VF=[1,97],$VG=[2,70],$VH=[1,106],$VI=[1,107],$VJ=[1,108],$VK=[1,109],$VL=[1,110],$VM=[1,112],$VN=[1,111],$VO=[1,113],$VP=[1,114],$VQ=[9,37,38,45,46,47,48,49],$VR=[2,31],$VS=[1,122],$VT=[11,13],$VU=[1,161],$VV=[1,159],$VW=[1,160],$VX=[8,11,13,60,61,70,72,75,84,86,87,88],$VY=[1,186],$VZ=[1,187],$V_=[1,191],$V$=[1,192],$V01=[2,107],$V11=[1,206],$V21=[1,207],$V31=[1,218],$V41=[1,219],$V51=[1,220],$V61=[1,217],$V71=[2,94],$V81=[1,231],$V91=[21,44],$Va1=[2,117],$Vb1=[1,235],$Vc1=[8,32];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"S":3,"IMPORTS":4,"CLASS":5,"EOF":6,"tk_import":7,"tk_id":8,"tk_puntocoma":9,"tk_class":10,"tk_llaveabre":11,"S_CUERPO":12,"tk_llavecierra":13,"TIPO_DATO":14,"OPCION":15,"tk_void":16,"TIPO_METODO":17,"OP_ID":18,"tk_parentesisabre":19,"PARAMETRO":20,"tk_parentesiscierra":21,"SENTENCIAS":22,"tk_coma":23,"LISTADO":24,"tk_igual":25,"IGUAL":26,"LISTADO_PAR":27,"tk_cadena":28,"CADENA":29,"tk_caracter":30,"OPCION_SIG":31,"tk_digito":32,"ART":33,"LISTA_PARAMETRO":34,"ARITMETICO":35,"VAL":36,"tk_incremento":37,"tk_decremento":38,"tk_int":39,"tk_double":40,"tk_boolean":41,"tk_char":42,"tk_String":43,"tk_mas":44,"tk_menos":45,"tk_div":46,"tk_eleva":47,"tk_porcen":48,"tk_mult":49,"VALC":50,"tk_main":51,"S_FOR":52,"S_WHILE":53,"S_DO":54,"S_IMP":55,"S_B":56,"S_R":57,"S_C":58,"S_IF":59,"S_SWICH":60,"tk_for":61,"INI":62,"VAL_FOR":63,"OP_FOR":64,"AD":65,"tk_mayork":66,"tk_menork":67,"tk_mayorigualk":68,"tk_menorigualk":69,"tk_while":70,"CONDICION":71,"tk_do":72,"OP_WH":73,"VAL_WH":74,"tk_System":75,"tk_punto":76,"tk_out":77,"TIPO_PRINT":78,"VAL_IMP":79,"SUM":80,"tk_print":81,"tk_println":82,"OPCION_IMP":83,"tk_return":84,"S_RF":85,"tk_break":86,"tk_continue":87,"tk_if":88,"ELSE":89,"UNA":90,"LOG":91,"tk_not":92,"OP_IF":93,"tk_or":94,"tk_and":95,"VAL_IF":96,"tk_igualdad":97,"tk_distinto":98,"tk_else":99,"IF":100,"S_SW":101,"tk_switch":102,"CAD":103,"tk_case":104,"CASE":105,"DEF":106,"SW_OP":107,"VAL_SW":108,"VAL_CASE":109,"tk_dospuntos":110,"CONTEN":111,"REP":112,"IGUAL_CASE":113,"tk_default":114,"$accept":0,"$end":1},
terminals_: {2:"error",6:"EOF",7:"tk_import",8:"tk_id",9:"tk_puntocoma",10:"tk_class",11:"tk_llaveabre",13:"tk_llavecierra",16:"tk_void",19:"tk_parentesisabre",21:"tk_parentesiscierra",23:"tk_coma",25:"tk_igual",28:"tk_cadena",30:"tk_caracter",32:"tk_digito",37:"tk_incremento",38:"tk_decremento",39:"tk_int",40:"tk_double",41:"tk_boolean",42:"tk_char",43:"tk_String",44:"tk_mas",45:"tk_menos",46:"tk_div",47:"tk_eleva",48:"tk_porcen",49:"tk_mult",51:"tk_main",60:"S_SWICH",61:"tk_for",66:"tk_mayork",67:"tk_menork",68:"tk_mayorigualk",69:"tk_menorigualk",70:"tk_while",72:"tk_do",73:"OP_WH",74:"VAL_WH",75:"tk_System",76:"tk_punto",77:"tk_out",81:"tk_print",82:"tk_println",84:"tk_return",86:"tk_break",87:"tk_continue",88:"tk_if",92:"tk_not",94:"tk_or",95:"tk_and",97:"tk_igualdad",98:"tk_distinto",99:"tk_else",102:"tk_switch",104:"tk_case",108:"VAL_SW",110:"tk_dospuntos",114:"tk_default"},
productions_: [0,[3,3],[3,1],[4,4],[4,0],[5,6],[5,0],[12,4],[12,3],[12,2],[12,3],[12,0],[15,1],[15,6],[15,4],[15,3],[24,3],[24,2],[24,0],[20,3],[20,0],[27,4],[27,0],[26,2],[26,2],[26,2],[26,2],[31,4],[31,3],[31,1],[34,3],[34,0],[18,1],[18,1],[14,1],[14,1],[14,1],[14,1],[14,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[33,1],[33,3],[33,0],[36,1],[36,1],[36,2],[36,2],[29,3],[29,0],[50,2],[50,2],[50,1],[50,1],[17,7],[17,6],[22,4],[22,2],[22,2],[22,2],[22,2],[22,2],[22,2],[22,2],[22,2],[22,2],[22,0],[52,16],[62,2],[62,1],[63,1],[63,1],[64,1],[64,1],[64,1],[64,1],[65,1],[65,1],[53,7],[54,11],[55,10],[78,1],[78,1],[79,1],[79,2],[79,1],[79,1],[83,4],[83,0],[80,3],[80,0],[57,3],[85,2],[85,0],[56,2],[58,2],[59,8],[71,1],[71,4],[90,2],[90,2],[91,5],[91,5],[91,0],[93,2],[93,2],[93,2],[93,2],[93,2],[93,2],[96,1],[96,1],[89,6],[89,0],[100,4],[100,0],[101,9],[103,2],[103,2],[107,3],[107,3],[107,3],[107,3],[107,3],[107,3],[107,4],[107,0],[105,6],[109,1],[109,1],[109,1],[111,4],[111,1],[111,0],[113,1],[113,2],[112,2],[112,0],[106,3],[106,0]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
console.log("terminado");
break;
case 2:
console.error('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this.$.first_line + ', en la columna: ' + this.$.first_column);
break;
}
},
table: [o($V0,$V1,{3:1,4:2,2:[1,3],7:$V2}),{1:[3]},{5:5,6:$V3,10:$V4},{1:[2,2]},{8:[1,7]},{6:[1,8]},{8:[1,9]},{9:[1,10]},{1:[2,1]},{11:[1,11]},o($V0,$V1,{4:12,7:$V2}),{5:16,8:$V5,10:$V4,12:13,13:$V6,14:14,16:$V7,39:$V8,40:$V9,41:$Va,42:$Vb,43:$Vc},o($V0,[2,3]),{13:[1,23]},{8:[1,24]},{8:[1,26],17:25,51:[1,27]},{5:16,8:$V5,10:$V4,12:28,13:$V6,14:14,16:$V7,39:$V8,40:$V9,41:$Va,42:$Vb,43:$Vc},{18:29,37:$Vd,38:$Ve},{8:[2,34]},{8:[2,35]},{8:[2,36]},{8:[2,37]},{8:[2,38]},o([6,8,13,16,39,40,41,42,43],$V3,{5:32,10:$V4}),{9:[1,34],15:33,19:[1,35],23:[1,36],25:[1,37]},{5:16,8:$V5,10:$V4,12:38,13:$V6,14:14,16:$V7,39:$V8,40:$V9,41:$Va,42:$Vb,43:$Vc},{19:[1,39]},{19:[1,40]},{13:[2,9]},{9:[1,41]},o($Vf,[2,32]),o($Vf,[2,33]),o([6,8,10,13,16,39,40,41,42,43],[2,5]),{5:16,8:$V5,10:$V4,12:42,13:$V6,14:14,16:$V7,39:$V8,40:$V9,41:$Va,42:$Vb,43:$Vc},o($Vg,[2,12]),{14:44,20:43,21:$Vh,39:$V8,40:$V9,41:$Va,42:$Vb,43:$Vc},{8:[1,45]},{8:$Vi,26:46,28:$Vj,30:$Vk,32:$Vl},{13:[2,8]},{14:44,20:51,21:$Vh,39:$V8,40:$V9,41:$Va,42:$Vb,43:$Vc},{21:[1,52]},{13:[2,10]},{13:[2,7]},{21:[1,53]},{8:[1,54]},{9:$Vm,23:$Vn,24:55,25:$Vo},{9:[1,58]},{9:$Vp,29:59,44:$Vq},{9:$Vp,29:61,44:$Vq},{18:65,19:[1,63],31:62,35:64,37:$Vd,38:$Ve,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw},{9:$Vx,18:73,33:72,35:74,37:$Vd,38:$Ve,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw},{21:[1,75]},{11:[1,76]},{11:[1,77]},{21:$Vy,23:$Vz,27:78},{9:[1,80]},{8:[1,81]},{8:$Vi,26:82,28:$Vj,30:$Vk,32:$Vl},o($Vg,[2,15]),{9:[2,23]},{8:[1,84],28:[1,86],30:[1,87],32:[1,85],50:83},{9:[2,24]},{9:[2,25]},{8:[1,88]},{8:$VA,28:$VB,30:$VC,32:$VD,36:89},{9:[2,29]},o($VE,[2,39]),o($VE,[2,40]),o($VE,[2,41]),o($VE,[2,42]),o($VE,[2,43]),o($VE,[2,44]),{9:[2,26]},o($Vf,[2,45]),{8:$VA,28:$VB,30:$VC,32:$VD,36:94},{11:[1,95]},{8:$VF,13:$VG,22:96,52:98,53:99,54:100,55:101,56:102,57:103,58:104,59:105,60:$VH,61:$VI,70:$VJ,72:$VK,75:$VL,84:$VM,86:$VN,87:$VO,88:$VP},{8:$VF,13:$VG,22:115,52:98,53:99,54:100,55:101,56:102,57:103,58:104,59:105,60:$VH,61:$VI,70:$VJ,72:$VK,75:$VL,84:$VM,86:$VN,87:$VO,88:$VP},{21:[2,19]},{14:116,39:$V8,40:$V9,41:$Va,42:$Vb,43:$Vc},o($Vg,[2,14]),{9:$Vm,23:$Vn,24:117,25:$Vo},{9:[2,17]},o($VQ,$Vp,{29:118,44:$Vq}),{9:$Vx,18:73,33:119,35:74,37:$Vd,38:$Ve,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw},{9:$Vx,18:73,33:120,35:74,37:$Vd,38:$Ve,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw},o($Vf,[2,56]),o($Vf,[2,57]),{21:$VR,23:$VS,34:121},{9:$Vx,18:73,33:123,35:74,37:$Vd,38:$Ve,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw},o($Vf,[2,48]),o($Vf,[2,49]),o($VQ,$Vp,{29:124,44:$Vq}),o($VQ,$Vp,{29:125,44:$Vq}),{9:$Vx,18:73,33:126,35:74,37:$Vd,38:$Ve,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw},{8:$VF,13:$VG,22:127,52:98,53:99,54:100,55:101,56:102,57:103,58:104,59:105,60:$VH,61:$VI,70:$VJ,72:$VK,75:$VL,84:$VM,86:$VN,87:$VO,88:$VP},{13:[1,128]},{18:129,37:$Vd,38:$Ve},o($VT,$VG,{52:98,53:99,54:100,55:101,56:102,57:103,58:104,59:105,22:130,8:$VF,60:$VH,61:$VI,70:$VJ,72:$VK,75:$VL,84:$VM,86:$VN,87:$VO,88:$VP}),o($VT,$VG,{52:98,53:99,54:100,55:101,56:102,57:103,58:104,59:105,22:131,8:$VF,60:$VH,61:$VI,70:$VJ,72:$VK,75:$VL,84:$VM,86:$VN,87:$VO,88:$VP}),o($VT,$VG,{52:98,53:99,54:100,55:101,56:102,57:103,58:104,59:105,22:132,8:$VF,60:$VH,61:$VI,70:$VJ,72:$VK,75:$VL,84:$VM,86:$VN,87:$VO,88:$VP}),o($VT,$VG,{52:98,53:99,54:100,55:101,56:102,57:103,58:104,59:105,22:133,8:$VF,60:$VH,61:$VI,70:$VJ,72:$VK,75:$VL,84:$VM,86:$VN,87:$VO,88:$VP}),o($VT,$VG,{52:98,53:99,54:100,55:101,56:102,57:103,58:104,59:105,22:134,8:$VF,60:$VH,61:$VI,70:$VJ,72:$VK,75:$VL,84:$VM,86:$VN,87:$VO,88:$VP}),o($VT,$VG,{52:98,53:99,54:100,55:101,56:102,57:103,58:104,59:105,22:135,8:$VF,60:$VH,61:$VI,70:$VJ,72:$VK,75:$VL,84:$VM,86:$VN,87:$VO,88:$VP}),o($VT,$VG,{52:98,53:99,54:100,55:101,56:102,57:103,58:104,59:105,22:136,8:$VF,60:$VH,61:$VI,70:$VJ,72:$VK,75:$VL,84:$VM,86:$VN,87:$VO,88:$VP}),o($VT,$VG,{52:98,53:99,54:100,55:101,56:102,57:103,58:104,59:105,22:137,8:$VF,60:$VH,61:$VI,70:$VJ,72:$VK,75:$VL,84:$VM,86:$VN,87:$VO,88:$VP}),o($VT,$VG,{52:98,53:99,54:100,55:101,56:102,57:103,58:104,59:105,22:138,8:$VF,60:$VH,61:$VI,70:$VJ,72:$VK,75:$VL,84:$VM,86:$VN,87:$VO,88:$VP}),{19:[1,139]},{19:[1,140]},{11:[1,141]},{76:[1,142]},{9:[1,143]},{8:$VA,9:[2,97],28:$VB,30:$VC,32:$VD,36:145,85:144},{9:[1,146]},{19:[1,147]},{13:[1,148]},{8:[1,149]},{9:[2,16]},o($Vf,[2,52]),o($Vf,[2,54]),o($Vf,[2,55]),{21:[1,150]},{8:[1,151]},{9:[2,28]},o($Vf,[2,50]),o($Vf,[2,51]),o($Vf,[2,46]),{13:[1,152]},o($Vg,[2,59]),{9:[1,153]},o($VT,[2,61]),o($VT,[2,62]),o($VT,[2,63]),o($VT,[2,64]),o($VT,[2,65]),o($VT,[2,66]),o($VT,[2,67]),o($VT,[2,68]),o($VT,[2,69]),{8:[1,156],39:[1,155],62:154},{8:$VU,19:$VV,71:157,90:158,92:$VW},{8:$VF,13:$VG,22:162,52:98,53:99,54:100,55:101,56:102,57:103,58:104,59:105,60:$VH,61:$VI,70:$VJ,72:$VK,75:$VL,84:$VM,86:$VN,87:$VO,88:$VP},{77:[1,163]},o($VX,[2,98]),{9:[1,164]},{9:$Vx,18:73,33:165,35:74,37:$Vd,38:$Ve,44:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw},o($VX,[2,99]),{8:$VU,19:$VV,71:166,90:158,92:$VW},o($Vg,[2,13]),{21:$Vy,23:$Vz,27:167},{9:[2,27]},{21:$VR,23:$VS,34:168},o($Vg,[2,58]),o($VT,$VG,{52:98,53:99,54:100,55:101,56:102,57:103,58:104,59:105,22:169,8:$VF,60:$VH,61:$VI,70:$VJ,72:$VK,75:$VL,84:$VM,86:$VN,87:$VO,88:$VP}),{25:[1,170]},{8:[1,171]},{25:[2,73]},{21:[1,172]},{21:[2,101]},{8:$VU,90:173,92:$VW},{8:[1,174]},{66:[1,176],67:[1,177],68:[1,178],69:[1,179],93:175,97:[1,180],98:[1,181]},{13:[1,182]},{76:[1,183]},o($VX,[2,95]),{9:[2,96]},{21:[1,184]},{21:[2,21]},{21:[2,30]},o($VT,[2,60]),{8:$VY,32:$VZ,63:185},{25:[2,72]},{11:[1,188]},{21:[1,189]},{21:[2,103]},{21:[2,104]},{8:$V_,32:$V$,96:190},{8:$V_,32:$V$,96:193},{8:$V_,32:$V$,96:194},{8:$V_,32:$V$,96:195},{8:$V_,32:$V$,96:196},{8:$V_,32:$V$,96:197},{70:[1,198]},{78:199,81:[1,200],82:[1,201]},{11:[1,202]},{9:[1,203]},{9:[2,74]},{9:[2,75]},{8:$VF,13:$VG,22:204,52:98,53:99,54:100,55:101,56:102,57:103,58:104,59:105,60:$VH,61:$VI,70:$VJ,72:$VK,75:$VL,84:$VM,86:$VN,87:$VO,88:$VP},{21:$V01,91:205,94:$V11,95:$V21},{21:[2,108]},{21:[2,114]},{21:[2,115]},{21:[2,109]},{21:[2,110]},{21:[2,111]},{21:[2,112]},{21:[2,113]},{19:[1,208]},{19:[1,209]},{19:[2,85]},{19:[2,86]},{8:$VF,13:$VG,22:210,52:98,53:99,54:100,55:101,56:102,57:103,58:104,59:105,60:$VH,61:$VI,70:$VJ,72:$VK,75:$VL,84:$VM,86:$VN,87:$VO,88:$VP},{8:[1,211]},{13:[1,212]},{21:[2,102]},{19:[1,213]},{19:[1,214]},{8:[1,215]},{8:$V31,28:$V41,30:$V51,32:$V61,79:216},{13:[1,221]},{64:222,66:[1,223],67:[1,224],68:[1,225],69:[1,226]},o($VX,[2,82]),{8:$VU,90:227,92:$VW},{8:$VU,90:228,92:$VW},{73:[1,229]},{21:$V71,44:$V81,80:230},o($V91,[2,87]),o($V91,[2,92],{83:232,19:[1,233]}),o($V91,[2,89]),o($V91,[2,90]),o($VX,$Va1,{89:234,99:$Vb1}),{8:$VY,32:$VZ,63:236},o($Vc1,[2,76]),o($Vc1,[2,77]),o($Vc1,[2,78]),o($Vc1,[2,79]),{21:[1,237]},{21:[1,238]},{74:[1,239]},{21:[1,240]},{8:$V31,28:$V41,30:$V51,32:$V61,79:241},o($V91,[2,88]),{8:[1,242]},o($VX,[2,100]),{11:[2,119],88:[1,244],100:243},{9:[1,245]},{21:$V01,91:246,94:$V11,95:$V21},{21:$V01,91:247,94:$V11,95:$V21},{21:[1,248]},{9:[1,249]},{21:$V71,44:$V81,80:250},{21:$VR,23:$VS,34:251},{11:[1,252]},{19:[1,253]},{8:[1,254]},{21:[2,105]},{21:[2,106]},{9:[1,255]},o($VX,[2,84]),{21:[2,93]},{21:[1,256]},{8:$VF,11:$VG,22:257,52:98,53:99,54:100,55:101,56:102,57:103,58:104,59:105,60:$VH,61:$VI,70:$VJ,72:$VK,75:$VL,84:$VM,86:$VN,87:$VO,88:$VP},{8:$VU,19:$VV,71:258,90:158,92:$VW},{37:[1,260],38:[1,261],65:259},o($VX,[2,83]),o($V91,[2,91]),{11:[1,262]},{21:[1,263]},{21:[1,264]},{21:[2,80]},{21:[2,81]},o($VX,$Va1,{89:265,99:$Vb1}),{11:[2,118]},{11:[1,266]},o($VX,[2,116]),{8:$VF,13:$VG,22:267,52:98,53:99,54:100,55:101,56:102,57:103,58:104,59:105,60:$VH,61:$VI,70:$VJ,72:$VK,75:$VL,84:$VM,86:$VN,87:$VO,88:$VP},{13:[1,268]},o($VX,[2,71])],
defaultActions: {3:[2,2],8:[2,1],18:[2,34],19:[2,35],20:[2,36],21:[2,37],22:[2,38],28:[2,9],38:[2,8],41:[2,10],42:[2,7],59:[2,23],61:[2,24],62:[2,25],65:[2,29],72:[2,26],78:[2,19],82:[2,17],117:[2,16],123:[2,28],150:[2,27],156:[2,73],158:[2,101],165:[2,96],167:[2,21],168:[2,30],171:[2,72],174:[2,103],175:[2,104],186:[2,74],187:[2,75],190:[2,108],191:[2,114],192:[2,115],193:[2,109],194:[2,110],195:[2,111],196:[2,112],197:[2,113],200:[2,85],201:[2,86],205:[2,102],246:[2,105],247:[2,106],250:[2,93],260:[2,80],261:[2,81],263:[2,118]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse (input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack (n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

_token_stack:
    var lex = function () {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

_handle_error:
        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth;
            var errStr = '';

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
                var stack_probe = stack.length - 1;
                var depth = 0;

                // try to recover from error
                for(;;) {
                    // check for error recovery rule in this state
                    if ((TERROR.toString()) in table[state]) {
                        return depth;
                    }
                    if (state === 0 || stack_probe < 2) {
                        return false; // No suitable error recovery rule available.
                    }
                    stack_probe -= 2; // popStack(1): [symbol, action]
                    state = stack[stack_probe];
                    ++depth;
                }
            }

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected,
                    recoverable: (error_rule_depth !== false)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth);

            preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;
}};

   
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:
break;
case 1:
break;
case 2:
break;
case 3:
break;
case 4:return 39;
break;
case 5:return 40;
break;
case 6:return 41;
break;
case 7:return 42;
break;
case 8:return 43;
break;
case 9:return 10;
break;
case 10:return 7;
break;
case 11:return 88;
break;
case 12:return 99;
break;
case 13:return 102;
break;
case 14:return 104;
break;
case 15:return 86;
break;
case 16:return 114;
break;
case 17:return 70;
break;
case 18:return 72;
break;
case 19:return 61;
break;
case 20:return 87;
break;
case 21:return 84;
break;
case 22:return 51;
break;
case 23:return 75;
break;
case 24:return 77;
break;
case 25:return 81;
break;
case 26:return 82;
break;
case 27:return 16;
break;
case 28:return 44;
break;
case 29:return 45;
break;
case 30:return 49;
break;
case 31:return 46;
break;
case 32:return 47;
break;
case 33:return 48;
break;
case 34:return 37;
break;
case 35:return 38;
break;
case 36:return 97;
break;
case 37:return 98;
break;
case 38:return 66;
break;
case 39:return 68;
break;
case 40:return 67;
break;
case 41:return 69;
break;
case 42:return 95;
break;
case 43:return 94;
break;
case 44:return 92;
break;
case 45:return 11;
break;
case 46:return 13;
break;
case 47:return 9;
break;
case 48:return 19;
break;
case 49:return 21;
break;
case 50:return 110;
break;
case 51:return 76;
break;
case 52:return 23;
break;
case 53:return 25;
break;
case 54:return 28;
break;
case 55:return 30;
break;
case 56:return 8;
break;
case 57:return 32;
break;
case 58:return 6;
break;
case 59:console.error('Este es un error léxico: ' + yy_.yytext + ', en la linea: ' + yy_.yylloc.first_line + ', en la columna: ' + yy_.yylloc.first_column);
break;
}
},
rules: [/^(?:[ \r\t]+)/,/^(?:\n)/,/^(?:\/\/.*)/,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/,/^(?:int\b)/,/^(?:double\b)/,/^(?:boolean\b)/,/^(?:char\b)/,/^(?:String\b)/,/^(?:class\b)/,/^(?:import\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:switch\b)/,/^(?:case\b)/,/^(?:break\b)/,/^(?:default\b)/,/^(?:while\b)/,/^(?:do\b)/,/^(?:for\b)/,/^(?:continue\b)/,/^(?:return\b)/,/^(?:main\b)/,/^(?:System\b)/,/^(?:out\b)/,/^(?:print\b)/,/^(?:println\b)/,/^(?:void\b)/,/^(?:\+)/,/^(?:-)/,/^(?:\*)/,/^(?:\/)/,/^(?:\^)/,/^(?:%)/,/^(?:\+\+)/,/^(?:--)/,/^(?:==)/,/^(?:!=)/,/^(?:>)/,/^(?:>=)/,/^(?:<)/,/^(?:<=)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:!)/,/^(?:\{)/,/^(?:\})/,/^(?:;)/,/^(?:\()/,/^(?:\))/,/^(?::)/,/^(?:\.)/,/^(?:,)/,/^(?:=)/,/^(?:"[^\"]*")/,/^(?:'[^\']*')/,/^(?:[a-zA-Z]+([a-zA-Z]|[0-9]|_)*)/,/^(?:()?[0-9]+(\.[0-9]+)?\b)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = Analisis;
exports.Parser = Analisis.Parser;
exports.parse = function () { return Analisis.parse.apply(Analisis, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}