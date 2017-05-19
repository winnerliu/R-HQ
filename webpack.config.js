module.exports = {
    entry: __dirname +"/src/App.js",//唯一的入口文件
    output:{
        path: __dirname +"/public",//打包后文件存放的目录
        filename:'bundle.js' //打包后输入的文件名
    },
    devServer:{
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新

    },
    //新增加部分
    module:{
        loaders:[
            //babel配置
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules'
            }
        ]
    }
}

// const path = require('path');
// module.exports = function (configs) {
//     configs = Object.assign({}, configs, {
//         name: 'widget',
//         defaultPort: 7509,
//         devServer: Object.assign({},
//             configs.devServer,
//             {
//                 proxy: [{
//                     context: ['/**', '!/app/widget/**', '!/webpack/**', '!/webpack-dev-server/**', '!/sockjs-node/**', '!/index.html'],
//                     // context: ['/**', '!/user-manage/**', '!/src/**', '!/webpack/**', '!/webpack-dev-server/**', '!/sockjs-node/**', '!/index.html'],
//                     target: 'http://tste2.360kad.com',
//                     changeOrigin: true
//                 }]
//             }),
//         apps: ['sample'],
//     });
//     return configs;
// };