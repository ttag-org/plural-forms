import catalogData from '../src/catalog';

const pluralRegex = /\splural ?=?([\s\S]*);?/;

function getPluralFunc(pluralsText) {
    try {
        let pluralFn = pluralRegex.exec(pluralsText)[1];
        if (pluralFn[pluralFn.length - 1] === ';') {
            pluralFn = pluralFn.slice(0, -1);
        }
        return pluralFn;
    } catch (err) {
        throw new Error(`Failed to parse plural func from headers "${pluralsText}"\n`);
    }
}

function getNPlurals(pluralsText) {
    const nplurals = /nplurals ?= ?(\d)/.exec(pluralsText)[1];
    return parseInt(nplurals, 10);
}

export function getMinimalData() {
    const minimalData = {};
    
    Object.keys(catalogData).forEach((key) => {
        const value = catalogData[key];
        const nPlurals = getNPlurals(value.pluralsText);
        const formula = getPluralFunc(value.pluralsText)
            .replace(/\s/g, '')
            .replace(/^\(/, '')
            .replace(/\)$/, '');
        minimalData[key] = `${nPlurals};${formula}`;
    });
    
    return minimalData;
}
