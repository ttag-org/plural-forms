
const DATA = {
    ach: {
        
        
        n: 2,
        
        f: function(n) {
            return (n > 1);
        }
    },
    af: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    ak: {
        
        
        n: 2,
        
        f: function(n) {
            return (n > 1);
        }
    },
    am: {
        
        
        n: 2,
        
        f: function(n) {
            return (n > 1);
        }
    },
    an: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    ar: {
        
        
        n: 6,
        
        f: function(n) {
            return (n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
        }
    },
    arn: {
        
        
        n: 2,
        
        f: function(n) {
            return (n > 1);
        }
    },
    ast: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    ay: {
        name: 'Aymará',
        
        n: 1,
        
        f: function() {
            return 0;
        }
    },
    az: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    be: {
        
        
        n: 3,
        
        f: function(n) {
            return (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
        }
    },
    bg: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    bn: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    bo: {
        
        
        n: 1,
        
        f: function() {
            return 0;
        }
    },
    br: {
        
        
        n: 2,
        
        f: function(n) {
            return (n > 1);
        }
    },
    brx: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    bs: {
        
        
        n: 3,
        
        f: function(n) {
            return (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
        }
    },
    ca: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    cgg: {
        
        
        n: 1,
        
        f: function() {
            return 0;
        }
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
        
        f: function(n) {
            return (n !== 1);
        }
    },
    de: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    doi: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    dz: {
        
        
        n: 1,
        
        f: function() {
            return 0;
        }
    },
    el: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    en: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    eo: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    es: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    et: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    eu: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    fa: {
        
        
        n: 1,
        
        f: function() {
            return 0;
        }
    },
    ff: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    fi: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    fil: {
        
        
        n: 2,
        
        f: function(n) {
            return (n > 1);
        }
    },
    fo: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    fr: {
        
        
        n: 2,
        
        f: function(n) {
            return (n > 1);
        }
    },
    fur: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    fy: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    ga: {
        
        
        n: 5,
        
        f: function(n) {
            return (n === 1 ? 0 : n === 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
        }
    },
    gd: {
        name: 'Scottish Gaelic',
        
        n: 4,
        
        f: function(n) {
            return ((n === 1 || n === 11) ? 0 : (n === 2 || n === 12) ? 1 : (n > 2 && n < 20) ? 2 : 3);
        }
    },
    gl: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    gu: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    gun: {
        
        
        n: 2,
        
        f: function(n) {
            return (n > 1);
        }
    },
    ha: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    he: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    hi: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    hne: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    hr: {
        
        
        n: 3,
        
        f: function(n) {
            return (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
        }
    },
    hu: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    hy: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    id: {
        
        
        n: 1,
        
        f: function() {
            return 0;
        }
    },
    is: {
        
        
        n: 2,
        
        f: function(n) {
            return (n % 10 !== 1 || n % 100 === 11);
        }
    },
    it: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    ja: {
        
        
        n: 1,
        
        f: function() {
            return 0;
        }
    },
    jbo: {
        
        
        n: 1,
        
        f: function() {
            return 0;
        }
    },
    jv: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 0);
        }
    },
    ka: {
        
        
        n: 1,
        
        f: function() {
            return 0;
        }
    },
    kk: {
        
        
        n: 1,
        
        f: function() {
            return 0;
        }
    },
    km: {
        
        
        n: 1,
        
        f: function() {
            return 0;
        }
    },
    kn: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    ko: {
        
        
        n: 1,
        
        f: function() {
            return 0;
        }
    },
    ku: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    kw: {
        
        
        n: 4,
        
        f: function(n) {
            return (n === 1 ? 0 : n === 2 ? 1 : n === 3 ? 2 : 3);
        }
    },
    ky: {
        
        
        n: 1,
        
        f: function() {
            return 0;
        }
    },
    lb: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    ln: {
        
        
        n: 2,
        
        f: function(n) {
            return (n > 1);
        }
    },
    lo: {
        
        
        n: 1,
        
        f: function() {
            return 0;
        }
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
        
        f: function(n) {
            return (n !== 1);
        }
    },
    mfe: {
        name: 'Mauritian Creole',
        
        n: 2,
        
        f: function(n) {
            return (n > 1);
        }
    },
    mg: {
        
        
        n: 2,
        
        f: function(n) {
            return (n > 1);
        }
    },
    mi: {
        
        
        n: 2,
        
        f: function(n) {
            return (n > 1);
        }
    },
    mk: {
        
        
        n: 2,
        
        f: function(n) {
            return (n === 1 || n % 10 === 1 ? 0 : 1);
        }
    },
    ml: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    mn: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    mni: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    mnk: {
        
        
        n: 3,
        
        f: function(n) {
            return (n === 0 ? 0 : n === 1 ? 1 : 2);
        }
    },
    mr: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    ms: {
        
        
        n: 1,
        
        f: function() {
            return 0;
        }
    },
    mt: {
        
        
        n: 4,
        
        f: function(n) {
            return (n === 1 ? 0 : n === 0 || (n % 100 > 1 && n % 100 < 11) ? 1 : (n % 100 > 10 && n % 100 < 20) ? 2 : 3);
        }
    },
    my: {
        
        
        n: 1,
        
        f: function() {
            return 0;
        }
    },
    nah: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    nap: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    nb: {
        name: 'Norwegian Bokmal',
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    ne: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    nl: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    nn: {
        name: 'Norwegian Nynorsk',
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    no: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    nso: {
        name: 'Northern Sotho',
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    oc: {
        
        
        n: 2,
        
        f: function(n) {
            return (n > 1);
        }
    },
    or: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    pa: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    pap: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    pl: {
        
        
        n: 3,
        
        f: function(n) {
            return (n === 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
        }
    },
    pms: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    ps: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    pt: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    rm: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
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
        
        f: function(n) {
            return (n !== 1);
        }
    },
    sah: {
        
        
        n: 1,
        
        f: function() {
            return 0;
        }
    },
    sat: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    sco: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    sd: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    se: {
        name: 'Northern Sami',
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    si: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
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
        
        f: function(n) {
            return (n !== 1);
        }
    },
    son: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    sq: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    sr: {
        
        
        n: 3,
        
        f: function(n) {
            return (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
        }
    },
    su: {
        
        
        n: 1,
        
        f: function() {
            return 0;
        }
    },
    sv: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    sw: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    ta: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    te: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    tg: {
        
        
        n: 2,
        
        f: function(n) {
            return (n > 1);
        }
    },
    th: {
        
        
        n: 1,
        
        f: function() {
            return 0;
        }
    },
    ti: {
        
        
        n: 2,
        
        f: function(n) {
            return (n > 1);
        }
    },
    tk: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    tr: {
        
        
        n: 2,
        
        f: function(n) {
            return (n > 1);
        }
    },
    tt: {
        
        
        n: 1,
        
        f: function() {
            return 0;
        }
    },
    ug: {
        
        
        n: 1,
        
        f: function() {
            return 0;
        }
    },
    uk: {
        
        
        n: 3,
        
        f: function(n) {
            return (n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
        }
    },
    ur: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    uz: {
        
        
        n: 2,
        
        f: function(n) {
            return (n > 1);
        }
    },
    vi: {
        
        
        n: 1,
        
        f: function() {
            return 0;
        }
    },
    wa: {
        
        
        n: 2,
        
        f: function(n) {
            return (n > 1);
        }
    },
    wo: {
        
        
        n: 1,
        
        f: function() {
            return 0;
        }
    },
    yo: {
        
        
        n: 2,
        
        f: function(n) {
            return (n !== 1);
        }
    },
    zh: {
        
        
        n: 1,
        
        f: function() {
            return 0;
        }
    }
};

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
