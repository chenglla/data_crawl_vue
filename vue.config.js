module.exports = {
    // publicPath: 'http://localhost:8000/',
    baseUrl: './',
    // baseUrl: 'http://localhost:8000/',
    assetsDir: "static",
    productionSourceMap: false,
    devServer: {
        // proxy: {
            // '/table': {
            //     target: 'http://localhost:8080/',
            //     changeOrigin: true,
            //     pathRewrite: {
            //         '/': 'http://localhost:8000/'
            //     }
            // },
            // '/ms': {
            //     target: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128',
            //     changeOrigin: true
            // }
        // }
    },
    configureWebpack: {
        //关闭 webpack 的性能提示
        performance: {
            hints: false
        }

    }
}
