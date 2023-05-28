const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware( {
            target: "http://localhost:8000",
    changeOrigin: true,
})
);
    app.use(
        createProxyMiddleware( "/LecturePage",{
            target: "http://54.180.213.187:8080/",
            changeOrigin: true,
        })
    );

    app.use(
        createProxyMiddleware( "/QnA",{
            target: "http://3.34.240.33:8080/",
            changeOrigin: true,
        })
    );

    app.use(
        createProxyMiddleware( "/OperatorPage/QnAManage",{
            target: "http://3.34.240.33:8080/",
            changeOrigin: true,
        })
    );

    app.use(
        createProxyMiddleware( "/OperatorPage/BannerManage",{
            target: "http://3.34.240.33:8080/",
            changeOrigin: true,
        })
    );
};