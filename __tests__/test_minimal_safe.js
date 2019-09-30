import { getNPlurals, getPluralFunc, hasLang, getAvailLangs } from '../minimal-safe';


test('test getNPlurals for en locale', () => {
    expect(getNPlurals('en')).toBe(2);
});

test('test getNPlurals for en_US locale', () => {
    expect(getNPlurals('en_US')).toBe(2);
});

test('test getNPlurals for en-US locale', () => {
    expect(getNPlurals('en-US')).toBe(2);
});

test('test getPluralFunc for en locale', () => {
    const fn = getPluralFunc('en');
    expect(fn(0, ['banana', 'bananas'])).toBe('bananas');
    expect(fn(1, ['banana', 'bananas'])).toBe('banana');
});

test('test getPluralFunc for en_US locale', () => {
    const fn = getPluralFunc('en_US');
    expect(fn(0, ['banana', 'bananas'])).toBe('bananas');
    expect(fn(1, ['banana', 'bananas'])).toBe('banana');
});

test('test getPluralFunc for en-US locale', () => {
    const fn = getPluralFunc('en-US');
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
