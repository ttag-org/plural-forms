import { getFormula, getNPlurals, getPluralFunc, hasLocale,
    printAvailableLocales, getPluralFormsHeader } from '../dist/simple';

test('test getFormula for en locale', () => {
    expect(getFormula('en')).toBe('(n !== 1)');
});

test('test getNPlurals for en locale', () => {
    expect(getNPlurals('en')).toBe(2);
});

test('test getPluralFunc for en locale', () => {
    const fn = getPluralFunc('en');
    expect(fn(0, ['banana', 'bananas'])).toBe('bananas');
    expect(fn(1, ['banana', 'bananas'])).toBe('banana');
});

test('test hasLocale', () => {
    expect(hasLocale('en')).toBe(true);
    expect(hasLocale('zzz')).toBe(false);
});

test('test printAvailableLocales', () => {
    expect(printAvailableLocales(true)).toMatchSnapshot();
});

test('test getPluralFormsHeader', () => {
    expect(getPluralFormsHeader('en')).toBe('nplurals = 2; plural = (n !== 1)');
});
