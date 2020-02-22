rm -rf node_modules

yarn set version berry

yarn add --dev @yarnpkg/pnpify

yarn add --dev babel-eslint eslint eslint-config-react-app eslint-plugin-flowtype eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks prop-types

yarn pnpify --sdk

# add the following config to package.json

# "eslintConfig": {
#   "extends": "react-app",
#   "rules": {
#     "max-len": [
#       "error",
#       {
#         "code": 80
#       }
#     ],
#     "react/prop-types": [ 2 ]
#   }
# },