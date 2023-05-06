const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware( '/board-service',{
            target: "http://localhost:8000",
    changeOrigin: true,
})
);
};