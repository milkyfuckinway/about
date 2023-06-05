module.exports = {
    env: {
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
    parserOptions: {
        ecmaVersion: 2022,
    },
    overrides: [
        {
            files: ['*.html'],
            processor: 'vue/.vue',
        },
    ],
    rules: {
        'quotes': ['error', 'single'],
        'no-console': [
            'error',
            {
                allow: ['warn', 'error'],
            },
        ],

        // vue
        'vue/no-unused-vars': 'error',
    },
}
