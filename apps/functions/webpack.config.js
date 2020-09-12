const GeneratePackageJsonPlugin = require("generate-package-json-webpack-plugin");

module.exports = (config, context) => {
    return {
        ...config,
        output: {
            ...config.output,
            filename: 'index.js',
            libraryTarget: 'commonjs'
        },
        plugins: [
            ...config.plugins,
            new GeneratePackageJsonPlugin(
                {
                    "name": "yggdrasil.functions",
                    "version": "1.0.0",
                    "main": "./index.js",
                    "license": "MIT",
                    "private": true,
                    "dependencies": {
                        "tslib": "",
                        "firebase-functions": "",
                        "firebase-admin": "",
                        "node-fetch": ""
                    },
                    "engines": {
                        "node": "10"
                    }
                },
                __dirname + "/../../package.json"
            )
        ]
    };
};
