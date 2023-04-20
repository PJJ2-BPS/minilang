enum TokenType {
    Implication,
    Or,
    And,
    Identifier,
    LParen,
    RParen,
    Colon,
    Plus,
    Minus,
    Times,
    Div,
    Exp,
    Mod,
    Neg,
    False,
    True
}

interface Token {
    str: string;
    token: TokenType;
}

export default class Lexer {
    src: string;
    pos: number;
    ch: string;
    line: number;
    col: number;
    tokenList: Token[];
    constructor(src) {
        this.src = src;
        this.pos = 0;
        this.ch = src[0];

        this.line = 1;
        this.col = 1;

        this.tokenList = [];
    };

    lex() {
        while (this.pos < this.src.length) {
            
        }
    }
}