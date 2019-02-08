
import { createPluralFunc, tryGetLangData } from './lib';

const DATA = CATALOG_DATA;

export function getFormula(locale) {
    const data = tryGetLangData(locale, DATA);
    return data.split(';')[1];
}

export function getNPlurals(locale) {
    const data = tryGetLangData(locale, DATA);
    return parseInt(data.split(';')[0], 10);
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
