function pluralFnBody(pluralStr) {
    return `return args[+ (${pluralStr})];`;
}

const fnCache = {};
export function createPluralFunc(pluralStr) {
    let fn = fnCache[pluralStr];
    if (!fn) {
        fn = new Function('n', 'args', pluralFnBody(pluralStr));
        fnCache[pluralStr] = fn;
    }
    return fn;
}

const pluralRegex = /\splural ?=?([\s\S]*);?/;

export function getPluralFuncStr(pluralsText) {
    try {
        let pluralFn = pluralRegex.exec(pluralsText)[1];
        if (pluralFn[pluralFn.length - 1] === ';') {
            pluralFn = pluralFn.slice(0, -1);
        }
        return pluralFn.trim();
    } catch (err) {
        throw new Error(`Failed to parse plural func from headers "${pluralsText}"\n`);
    }
}

export function getNPlurals(pluralsText) {
    const nplurals = /nplurals ?= ?(\d)/.exec(pluralsText)[1];
    return parseInt(nplurals, 10);
}
