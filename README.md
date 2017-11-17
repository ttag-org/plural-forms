# plural-forms
Provides information about the plural forms from any language that you may know

## Installation

```bash
yarn add plural-forms
# or
npm install --save plural-forms
```

## Usage example
```js
import { getNPlurals } from 'c-3po'

const englishPluralsNumber = getNPlurals('en'); // 2 
```

## Available methods

### getNPlurals(locale: string): number
* *locale* - language ISO code.
Returns the number of plural forms for locale

**Example**:

```
import { getNPlurals } from 'c-3po'

const englishPluralsNumber = getNPlurals('en'); // 2 
```

### getFormula(locale: string) : string
* *locale* - language ISO code.
Returns plural form formula for locale

**Example**:

```
import { getFormula } from 'c-3po'

const englishPluralsNumber = getFormula('en'); // "n!==1'"
```

### getPluralFunc(locale: string) : function
* *locale* - language ISO code.
Returns function that can compute appropriate form for locale

**Example**:

```
import { getPluralFunc } from 'c-3po'
const fn = getPluralFunc('en')

fn(1, ['banana', 'bananas']) // 'banana'
fn(2, ['banana', 'bananas']) // 'bananas'
```

