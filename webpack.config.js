const path = require('path');
const svgDirs = [
    require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
    // path.resolve(__dirname, 'src/my-project-svg-foler'),  // 2. 自己私人的 svg 存放目录
];
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackConfig = {
    entry: 'index.js',
    output: {
        path: 'dist',
        filename: 'index_bundle.js'
    },
    plugins: [new HtmlWebpackPlugin()]
};

module.exports = {
    entry: __dirname + "/src/App.js",//唯一的入口文件
    output: {
        path: __dirname + "/public",//打包后文件存放的目录
        filename: 'bundle.js' //打包后输入的文件名
    },
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新

    },
    //新增加部分
    module: {
        loaders: [
            //babel配置
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules'
            },
            {
                test: /.less$/,
                loader: "style-loader!css-loader!less-loader",
            },
            {
                test: /\.(svg)$/i,
                use: 'svg-sprite-loader',
                include: svgDirs,  // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
            },
        ]
    },
    resolve: {
        modules: ['node_modules', path.join(__dirname, '../node_modules')],
        extensions: ['.web.js', '.js', '.json'],
    },
    plugins: [
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            filename: './index.html', //生成的html存放路径，相对于 path
            template: './src/templates/index.html', //html模板路径
            hash: true,    //为静态资源生成hash值
        })
    ],
}
