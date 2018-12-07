module.exports = {
    root: true,
    parser: 'babel-eslint',
    env: {
        browser : true,
        commonjs: true,
        es6     : true
    },
    extends: ['standard'],
    globals: {
        JSBridge : true,
        window   : true,
        document : true,
        jQuery   : true,
        $        : true,
        Zepto    : true,
        define   : true
    },
    parserOptions: {
        sourceType : 'module',
        ecmaVersion: 6
    },
    plugins: [
        'standard',
        'import',
        'html'
    ],
    settings: {
        'import/resolver': {
            'node': {
                'extensions': [
                    '.js',
                    '.jsx',
                    '.vue'
                ]
            }
        }
    },
    rules: {
        "indent"                     : ["error", 4, { 'SwitchCase': 1 }],
        'eqeqeq'                     : 'off',
        'one-var'                    : 'off',
        'camelcase'                  : 'off',
        'no-extra-boolean-cast'      : 'off',
        'padded-blocks'              : 'off',
        'eol-last'                   : 'off',
        'no-useless-escape'          : 'off',
        'semi'                       : ["error", "never"],
        'arrow-parens'               : ['error', 'as-needed'],
        'no-multiple-empty-lines'    : ['error', { 'max': 1 }],
        'space-before-function-paren': ['error', 'never'],
        'no-trailing-spaces'         : ['error', { 'skipBlankLines': true }],
        'no-unreachable'             : process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger'                : process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-console'                 : process.env.NODE_ENV === 'production' ? 'error' : 'off',
    }
}
