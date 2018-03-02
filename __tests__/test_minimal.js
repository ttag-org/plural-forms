import { getFormula, getNPlurals, getPluralFunc, hasLang, getAvailLangs } from '../minimal';

test('test getFormula for en locale', () => {
    expect(getFormula('en')).toBe('n!==1');
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
