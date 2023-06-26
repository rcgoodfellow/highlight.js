/*
Language: P4
Category: common, networking
Website: https://en.wikipedia.org/wiki/P4_(programming_language)
Author: Ryan Goodfellow <ryan.goodfellow@oxide.computer>
*/

/** @type LanguageFn */
export default function(hljs) {
    const regex = hljs.regex;

    const P4_LINE_COMMENT_MODE = hljs.COMMENT('//', '$', { contains: [ { begin: /\\\n/ } ] });

    const TYPES = {
        className: 'type',
        variants: [
            { match: /[a-z\d_]*_[th]\s/ },
        ]
    };

    const NUMBERS = {
        className: 'number',
        variants: [
            { begin: '\\b(0b[01\']+)' },
            { begin: /([1-9][0-9]*w(0x)?\d+)/ },
            { begin: '(-?)\\b([\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)' },
            { begin: '(-?)(\\b0[xX][a-fA-F0-9\']+|(\\b[\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)([eE][-+]?[\\d\']+)?)' }
        ],
        relevance: 0
    };

    const P4_KEYWORDS = [
        "parser",
        "control",
        "state",
        "in",
        "out",
        "inout",
        "transition",
        "struct",
        "header",
        "default_action",
        "action",
        "key",
        "actions",
        "entries",
        "const",
        "table",
        "apply",
        "exact",
        "lpm",
        "ternary",
        "range",
        "if",
        "else",
    ];

    const P4_TYPES = [
        "bit",
        "packet_in",
    ];

    const KEYWORDS = {
        keyword: P4_KEYWORDS,
        type: P4_TYPES,
        literal: 'true false',
    };

    const STATES = {
        className: 'function',
        variants: [
            { match: /state [a-z\d_]*/ },
        ],
        keywords: { literal: 'state' },
    };

    const ACTIONS = {
        className: 'function',
        variants: [
            { match: /\saction [a-z\d_]*/ },
        ],
        keywords: { literal: 'action default_action' },
    };

    return {
        name: "P4",
        aliases: [ ],
        keywords: KEYWORDS,
        disableAutodetect: true,
        illegal: '</',
        contains: [].concat([
            TYPES,
            STATES,
            ACTIONS,
            NUMBERS,
            P4_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE
        ]),
        exports: {
            keywords: KEYWORDS
        }
    };

}
