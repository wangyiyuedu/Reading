const proxy = require('http-proxy-middleware')
module.exports = function(app) {
    app.use(
        '/rank',
        proxy({
            target:'http://m.yuedu.163.com',
            changeOrigin:true
        })
    )
}