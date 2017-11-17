import catalogData from '../src/catalog';
import { getNPlurals, getPluralFuncStr } from '../src/lib';

export function getMinimalData() {
    const minimalData = {};
    
    Object.keys(catalogData).forEach((key) => {
        const value = catalogData[key];
        const nPlurals = getNPlurals(value.pluralsText);
        const formula = getPluralFuncStr(value.pluralsText)
            .replace(/\s/g, '')
            .replace(/^\(/, '')
            .replace(/\)$/, '');
        minimalData[key] = `${nPlurals};${formula}`;
    });
    
    return minimalData;
}
