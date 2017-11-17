const DATA = CATALOG_DATA;

export function getFormula(locale) {
    return DATA[locale].split(';')[1];
}

export function getNPlurals(locale) {
    return parseInt(DATA[locale].split(';')[0], 10);
}

function pluralFnBody(pluralStr) {
    return `return args[+ (${pluralStr})];`;
}

const fnCache = {};
function createPluralFunc(pluralStr) {
    let fn = fnCache[pluralStr];
    if (!fn) {
        fn = new Function('n', 'args', pluralFnBody(pluralStr));
        fnCache[pluralStr] = fn;
    }
    return fn;
}

export function getPluralFunc(locale) {
    const formula = getFormula(locale);
    return createPluralFunc(formula);
}