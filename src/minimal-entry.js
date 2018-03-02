
import { createPluralFunc } from './lib';

const DATA = CATALOG_DATA;

export function getFormula(locale) {
    return DATA[locale].split(';')[1];
}

export function getNPlurals(locale) {
    return parseInt(DATA[locale].split(';')[0], 10);
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
