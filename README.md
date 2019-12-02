# eslint-plugin-korolint

本项目用于学习eslint `rule`开发。

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-settimeout-no-number`:

```
$ npm install eslint-plugin-settimeout-no-number --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-settimeout-no-number` globally.

## Usage

Add `settimeout-no-number` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "settimeout-no-number"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "settimeout-no-number/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





