import { createPluralFunc, getPluralFuncStr, tryGetLangData } from './lib';
import DATA from './catalog';

export function getFormula(locale) {
    const data = tryGetLangData(locale, DATA);
    return getPluralFuncStr(data.pluralsText);
}

export function getNPlurals(locale) {
    const data = tryGetLangData(locale, DATA);
    return data.nplurals;
}

export function getPluralFunc(locale) {
    const formula = getFormula(locale);
    return createPluralFunc(formula);
}

export function hasLang(locale) {
    try {
        tryGetLangData(locale, DATA);
        return true;
    } catch (err) {
        return false;
    }
}

export function getAvailLangs() {
    return Object.keys(DATA);
}

export function getPluralFormsHeader(locale) {
    const data = tryGetLangData(locale, DATA);
    return data.pluralsText;
}
