/**
 *  跨域接口代理配置
 */

module.exports = {
    '/wapapi/User/taskOverView': {
        changeOrigin: true,
        target: 'http://www.baidu.com',
        secure: false,
    },
}