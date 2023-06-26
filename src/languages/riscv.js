/*
Language: RISC-V
Category: assembler
Website: https://en.wikipedia.org/wiki/RISC-V
Author: Ryan Goodfellow <ryan.goodfellow@oxide.computer>
*/

/** @type LanguageFn */
export default function(hljs) {
    const regex = hljs.regex;

    const RV_LINE_COMMENT_MODE = hljs.COMMENT('#', '$', { contains: [ { begin: /\\\n/ } ] });

    const LABELS = {
        className: 'type',
        variants: [
            { match: /[a-z\d_]*_[:]\s/ },
        ]
    };

    const NUMBERS = {
        className: 'number',
        variants: [
            { begin: '(-?)\\b([\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)' },
            { begin: '(-?)(\\b0[xX][a-fA-F0-9\']+|(\\b[\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)([eE][-+]?[\\d\']+)?)' }
        ],
        relevance: 0
    };

    const RV_KEYWORDS = [
        "lui",
        "auipc",
        "jal",
        "jalr",
        "beq",
        "bne",
        "blt",
        "bge",
        "bltu",
        "bgeu",
        "lb",
        "lh",
        "lw",
        "lbu",
        "lhu",
        "sb",
        "sh",
        "sw",
        "addi",
        "slti",
        "sltiu",
        "xori",
        "ori",
        "andi",
        "slli",
        "rli",
        "srai",
        "add",
        "sub",
        "sll",
        "slt",
        "sltu",
        "xor",
        "slr",
        "sra",
        "or",
        "and",

        // pseudo
        "bgt",
        "ble",
        "bgtu",
        "bleu",
        "beqz",
        "bnez",
        "bgez",
        "blez",
        "j",
        "jal",
        "jr",
        "jalr",
        "ret",
        "sqez",
        "snez",
        "nltz",
        "sgtz",
        "li",
        "la",
        "mv",
        "not",
        "neg",

        // redhawk extensions
        "tcs",
    ];

    const KEYWORDS = {
        keyword: RV_KEYWORDS,
    };

    const DIRECTIVES = {
        className: 'function',
        variants: [
            ".ascii",
            ".asciiz",
            ".bss",
            ".data",
            ".dword",
            ".equ",
            ".extern",
            ".global",
            ".globl",
            ".rodata",
            ".space",
            ".start",
            ".string",
            ".text",
            ".word",
            ".zero",
        ],
    };

    return {
        name: "RISC-V",
        aliases: [ ],
        keywords: KEYWORDS,
        disableAutodetect: true,
        contains: [].concat([
            NUMBERS,
            RV_LINE_COMMENT_MODE,
        ]),
        exports: {
            keywords: KEYWORDS
        }
    };

}
