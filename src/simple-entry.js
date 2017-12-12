import { createPluralFunc, getPluralFuncStr } from './lib';
import DATA from './catalog';

export function getFormula(lang) {
    return getPluralFuncStr(DATA[lang].pluralsText);
}

export function getNPlurals(lang) {
    return DATA[lang].nplurals;
}

export function getPluralFunc(lang) {
    const formula = getFormula(lang);
    return createPluralFunc(formula);
}

export function hasLocale(lang) {
    return Boolean(DATA[lang]);
}

export function printAvailableLocales(silent=false) {
    const result = [];
    Object.keys(DATA).forEach((locale) => {
        result.push(`${DATA[locale].name} - ${locale}`)
    });
    const strResult = result.join('\n');
    if (!silent) {
        process.stdout.write(strResult);
    }
    return strResult;
}

export function getPluralFormsHeader(lang) {
    return DATA[lang].pluralsText;
}

export function getExamples(lang) {
    return DATA[lang].examples;
}