/* config-overrides.js */
import darkTheme from '@ant-design/dark-theme';
const { override, addLessLoader, fixBabelImports } = require('customize-cra');
// module.exports = function override(config, env) {
//     if (!config.plugins) {
//         config.plugins = [];
//     }
//     config.plugins.push(
//         {
//             loader: 'less-loader',
//             options: {
//                 modifyVars: darkTheme,
//             },
//         }
//     );
//     return config;
// };

module.exports = override(fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
}), addLessLoader({
    javascriptEnabled: true,
    modifyVars: darkTheme,
}))
