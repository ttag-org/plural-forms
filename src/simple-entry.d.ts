export declare function getFormula(lang: string): string;
export declare function getNPlurals(lang: string): number;
export declare function getPluralFunc(lang: string): (n: number, forms: string[]) => string;
export declare function hasLocale(lang: string): boolean;
export declare function printAvailableLocales(silent: boolean = true):void;
export declare function getPluralFormsHeader(lang: string): string;
type PluralExample = {"plural": number, "sample": number};
export declare function getExamples(lang:string): PluralExample[];
