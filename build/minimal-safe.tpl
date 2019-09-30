import { tryGetLangData } from './lib';

function moreThan1(n) {
    return (n > 1);
}

const DATA = CATALOG_DATA;

export function getNPlurals(locale) {
    console.log(locale);
    const langData = tryGetLangData(locale, DATA);
    return langData.n
}

const pluralFuncs = {};

export function getPluralFunc(locale) {
    if (pluralFuncs[locale]) {
        return pluralFuncs[locale];
    }
    const langData = tryGetLangData(locale, DATA);
    const pluralFunc = (n, args) => args[+ langData.f(n)];
    pluralFuncs[locale] = pluralFunc;
    return pluralFunc;
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
