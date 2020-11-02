import { tryGetLangData } from './lib';

function moreThan1(n) {
    return (n > 1);
}

function not1(n) {
    return (n !== 1);
}

function zero(n) {
    return 0;
}

const DATA = {
    ach: {
        
        
        n: 2,
        
        f: moreThan1
    },
    af: {
        
        
        n: 2,
        
        f: not1
    },
    ak: {
        
        
        n: 2,
        
        f: moreThan1
    },
    am: {
        
        
        n: 2,
        
        f: moreThan1
    },
    an: {
        
        
        n: 2,
        
        f: not1
    },
    ar: {
        
        
        n: 6,
        
        f: function(n) {
            return (n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
        }
    },
    arn: {
        
        
        n: 2,
        
        f: moreThan1
    },
    ast: {
        
        
        n: 2,
        
        f: not1
    },
    ay: {
        
        
        n: 1,
        
        f: zero
    },
    az: {
        
        
        n: 2,
        
        f: not1
    },
    be: {
        
        
        n: 3,
        
        f: function(n) {
            return (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
        }
    },
    bg: {
        
        
        n: 2,
        
        f: not1
    },
    bn: {
        
        
        n: 2,
        
        f: not1
    },
    bo: {
        
        
        n: 1,
        
        f: zero
    },
    br: {
        
        
        n: 2,
        
        f: moreThan1
    },
    brx: {
        
        
        n: 2,
        
        f: not1
    },
    bs: {
        
        
        n: 3,
        
        f: function(n) {
            return (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
        }
    },
    ca: {
        
        
        n: 2,
        
        f: not1
    },
    cgg: {
        
        
        n: 1,
        
        f: zero
    },
    cs: {
        
        
        n: 3,
        
        f: function(n) {
            return (n === 1 ? 0 : (n >= 2 && n <= 4) ? 1 : 2);
        }
    },
    csb: {
        
        
        n: 3,
        
        f: function(n) {
            return (n === 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
        }
    },
    cy: {
        
        
        n: 4,
        
        f: function(n) {
            return (n === 1 ? 0 : n === 2 ? 1 : (n !== 8 && n !== 11) ? 2 : 3);
        }
    },
    da: {
        
        
        n: 2,
        
        f: not1
    },
    de: {
        
        
        n: 2,
        
        f: not1
    },
    doi: {
        
        
        n: 2,
        
        f: not1
    },
    dz: {
        
        
        n: 1,
        
        f: zero
    },
    el: {
        
        
        n: 2,
        
        f: not1
    },
    en: {
        
        
        n: 2,
        
        f: not1
    },
    eo: {
        
        
        n: 2,
        
        f: not1
    },
    es: {
        
        
        n: 2,
        
        f: not1
    },
    et: {
        
        
        n: 2,
        
        f: not1
    },
    eu: {
        
        
        n: 2,
        
        f: not1
    },
    fa: {
        
        
        n: 1,
        
        f: zero
    },
    ff: {
        
        
        n: 2,
        
        f: not1
    },
    fi: {
        
        
        n: 2,
        
        f: not1
    },
    fil: {
        
        
        n: 2,
        
        f: moreThan1
    },
    fo: {
        
        
        n: 2,
        
        f: not1
    },
    fr: {
        
        
        n: 2,
        
        f: moreThan1
    },
    fur: {
        
        
        n: 2,
        
        f: not1
    },
    fy: {
        
        
        n: 2,
        
        f: not1
    },
    ga: {
        
        
        n: 5,
        
        f: function(n) {
            return (n === 1 ? 0 : n === 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
        }
    },
    gd: {
        
        
        n: 4,
        
        f: function(n) {
            return ((n === 1 || n === 11) ? 0 : (n === 2 || n === 12) ? 1 : (n > 2 && n < 20) ? 2 : 3);
        }
    },
    gl: {
        
        
        n: 2,
        
        f: not1
    },
    gu: {
        
        
        n: 2,
        
        f: not1
    },
    gun: {
        
        
        n: 2,
        
        f: moreThan1
    },
    ha: {
        
        
        n: 2,
        
        f: not1
    },
    he: {
        
        
        n: 2,
        
        f: not1
    },
    hi: {
        
        
        n: 2,
        
        f: not1
    },
    hne: {
        
        
        n: 2,
        
        f: not1
    },
    hr: {
        
        
        n: 3,
        
        f: function(n) {
            return (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
        }
    },
    hu: {
        
        
        n: 2,
        
        f: not1
    },
    hy: {
        
        
        n: 2,
        
        f: not1
    },
    id: {
        
        
        n: 1,
        
        f: zero
    },
    is: {
        
        
        n: 2,
        
        f: function(n) {
            return (n % 10 !== 1 || n % 100 === 11);
        }
    },
    it: {
        
        
        n: 2,
        
        f: not1
    },
    ja: {
        
        
        n: 1,
        
        f: zero
    },
    jbo: {
        
        
        n: 1,
        
        f: zero
    },
    jv: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 0);
        }
    },
    ka: {
        
        
        n: 1,
        
        f: zero
    },
    kab: {
        
        
        n: 2,
        
        f: not1
    },
    kk: {
        
        
        n: 1,
        
        f: zero
    },
    km: {
        
        
        n: 1,
        
        f: zero
    },
    kn: {
        
        
        n: 2,
        
        f: not1
    },
    ko: {
        
        
        n: 1,
        
        f: zero
    },
    ku: {
        
        
        n: 2,
        
        f: not1
    },
    kw: {
        
        
        n: 4,
        
        f: function(n) {
            return (n === 1 ? 0 : n === 2 ? 1 : n === 3 ? 2 : 3);
        }
    },
    ky: {
        
        
        n: 1,
        
        f: zero
    },
    lb: {
        
        
        n: 2,
        
        f: not1
    },
    ln: {
        
        
        n: 2,
        
        f: moreThan1
    },
    lo: {
        
        
        n: 1,
        
        f: zero
    },
    lt: {
        
        
        n: 3,
        
        f: function(n) {
            return (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
        }
    },
    lv: {
        
        
        n: 3,
        
        f: function(n) {
            return (n % 10 === 1 && n % 100 !== 11 ? 0 : n !== 0 ? 1 : 2);
        }
    },
    mai: {
        
        
        n: 2,
        
        f: not1
    },
    mfe: {
        
        
        n: 2,
        
        f: moreThan1
    },
    mg: {
        
        
        n: 2,
        
        f: moreThan1
    },
    mi: {
        
        
        n: 2,
        
        f: moreThan1
    },
    mk: {
        
        
        n: 2,
        
        f: function(n) {
            return (n === 1 || n % 10 === 1 ? 0 : 1);
        }
    },
    ml: {
        
        
        n: 2,
        
        f: not1
    },
    mn: {
        
        
        n: 2,
        
        f: not1
    },
    mni: {
        
        
        n: 2,
        
        f: not1
    },
    mnk: {
        
        
        n: 3,
        
        f: function(n) {
            return (n === 0 ? 0 : n === 1 ? 1 : 2);
        }
    },
    mr: {
        
        
        n: 2,
        
        f: not1
    },
    ms: {
        
        
        n: 1,
        
        f: zero
    },
    mt: {
        
        
        n: 4,
        
        f: function(n) {
            return (n === 1 ? 0 : n === 0 || (n % 100 > 1 && n % 100 < 11) ? 1 : (n % 100 > 10 && n % 100 < 20) ? 2 : 3);
        }
    },
    my: {
        
        
        n: 1,
        
        f: zero
    },
    nah: {
        
        
        n: 2,
        
        f: not1
    },
    nap: {
        
        
        n: 2,
        
        f: not1
    },
    nb: {
        
        
        n: 2,
        
        f: not1
    },
    ne: {
        
        
        n: 2,
        
        f: not1
    },
    nl: {
        
        
        n: 2,
        
        f: not1
    },
    nn: {
        
        
        n: 2,
        
        f: not1
    },
    no: {
        
        
        n: 2,
        
        f: not1
    },
    nso: {
        
        
        n: 2,
        
        f: not1
    },
    oc: {
        
        
        n: 2,
        
        f: moreThan1
    },
    or: {
        
        
        n: 2,
        
        f: not1
    },
    pa: {
        
        
        n: 2,
        
        f: not1
    },
    pap: {
        
        
        n: 2,
        
        f: not1
    },
    pl: {
        
        
        n: 3,
        
        f: function(n) {
            return (n === 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
        }
    },
    pms: {
        
        
        n: 2,
        
        f: not1
    },
    ps: {
        
        
        n: 2,
        
        f: not1
    },
    pt: {
        
        
        n: 2,
        
        f: not1
    },
    rm: {
        
        
        n: 2,
        
        f: not1
    },
    ro: {
        
        
        n: 3,
        
        f: function(n) {
            return (n === 1 ? 0 : (n === 0 || (n % 100 > 0 && n % 100 < 20)) ? 1 : 2);
        }
    },
    ru: {
        
        
        n: 3,
        
        f: function(n) {
            return (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
        }
    },
    rw: {
        
        
        n: 2,
        
        f: not1
    },
    sah: {
        
        
        n: 1,
        
        f: zero
    },
    sat: {
        
        
        n: 2,
        
        f: not1
    },
    sco: {
        
        
        n: 2,
        
        f: not1
    },
    sd: {
        
        
        n: 2,
        
        f: not1
    },
    se: {
        
        
        n: 2,
        
        f: not1
    },
    si: {
        
        
        n: 2,
        
        f: not1
    },
    sk: {
        
        
        n: 3,
        
        f: function(n) {
            return (n === 1 ? 0 : (n >= 2 && n <= 4) ? 1 : 2);
        }
    },
    sl: {
        
        
        n: 4,
        
        f: function(n) {
            return (n % 100 === 1 ? 1 : n % 100 === 2 ? 2 : n % 100 === 3 || n % 100 === 4 ? 3 : 0);
        }
    },
    so: {
        
        
        n: 2,
        
        f: not1
    },
    son: {
        
        
        n: 2,
        
        f: not1
    },
    sq: {
        
        
        n: 2,
        
        f: not1
    },
    sr: {
        
        
        n: 3,
        
        f: function(n) {
            return (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
        }
    },
    su: {
        
        
        n: 1,
        
        f: zero
    },
    sv: {
        
        
        n: 2,
        
        f: not1
    },
    sw: {
        
        
        n: 2,
        
        f: not1
    },
    ta: {
        
        
        n: 2,
        
        f: not1
    },
    te: {
        
        
        n: 2,
        
        f: not1
    },
    tg: {
        
        
        n: 2,
        
        f: moreThan1
    },
    th: {
        
        
        n: 1,
        
        f: zero
    },
    ti: {
        
        
        n: 2,
        
        f: moreThan1
    },
    tk: {
        
        
        n: 2,
        
        f: not1
    },
    tr: {
        
        
        n: 2,
        
        f: moreThan1
    },
    tt: {
        
        
        n: 1,
        
        f: zero
    },
    ug: {
        
        
        n: 1,
        
        f: zero
    },
    uk: {
        
        
        n: 3,
        
        f: function(n) {
            return (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
        }
    },
    ur: {
        
        
        n: 2,
        
        f: not1
    },
    uz: {
        
        
        n: 2,
        
        f: moreThan1
    },
    vi: {
        
        
        n: 1,
        
        f: zero
    },
    wa: {
        
        
        n: 2,
        
        f: moreThan1
    },
    wo: {
        
        
        n: 1,
        
        f: zero
    },
    yo: {
        
        
        n: 2,
        
        f: not1
    },
    zh: {
        
        
        n: 1,
        
        f: zero
    }
}
;

export function getNPlurals(locale) {
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
