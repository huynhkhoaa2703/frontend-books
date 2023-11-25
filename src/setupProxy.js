const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://backend-o5je.onrender.com",
      changeOrigin: true,
    })
  );
};
