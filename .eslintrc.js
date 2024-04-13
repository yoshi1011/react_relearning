module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["plugin:react/recommended", "plugin:storybook/recommended"],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
        "react/prop-types": "off",
        "react/no-unknown-property": [
            2,
            {
                "ignore": [
                    "jsx",
                    "global"
                ]
            }
        ]
    }
}
