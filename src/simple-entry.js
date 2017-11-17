import { createPluralFunc, getPluralFuncStr } from './lib';
import DATA from './catalog';

export function getFormula(locale) {
    return getPluralFuncStr(DATA[locale].pluralsText);
}

export function getNPlurals(locale) {
    return DATA[locale].nplurals;
}

export function getPluralFunc(locale) {
    const formula = getFormula(locale);
    return createPluralFunc(formula);
}

export function hasLocale(locale) {
    return Boolean(DATA[locale]);
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

export function getPluralFormsHeader(locale) {
    return DATA[locale].pluralsText;
}