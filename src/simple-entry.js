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

export function hasLang(locale) {
    return Boolean(DATA[locale]);
}

export function getAvailLangs() {
    return Object.keys(DATA);
}

export function getPluralFormsHeader(locale) {
    return DATA[locale].pluralsText;
}
