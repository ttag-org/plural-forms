import { getFormula, getNPlurals, getPluralFunc, hasLang,
    getAvailLangs, getPluralFormsHeader } from '../dist/simple';

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

test('test hasLang', () => {
    expect(hasLang('en')).toBe(true);
    expect(hasLang('zzz')).toBe(false);
});

test('test getAvailLangs', () => {
    expect(getAvailLangs(true)).toMatchSnapshot();
});

test('test getPluralFormsHeader', () => {
    expect(getPluralFormsHeader('en')).toBe('nplurals = 2; plural = (n !== 1)');
});
