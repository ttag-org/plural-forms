
function moreThan1(n) {
    return (n > 1);
}

const DATA = CATALOG_DATA;

export function getNPlurals(locale) {
    return DATA[locale]['n'];
}

export function getPluralFunc(locale) {
    return DATA[locale]['f'];
}

export function hasLang(locale) {
    return Boolean(DATA[locale]);
}

export function getAvailLangs() {
    return Object.keys(DATA);
}
