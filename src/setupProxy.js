const proxy = require('http-proxy-middleware');

module.exports = function (app) {

    app.use(
        proxy('/api', {
            target: 'http://localhost:8091',
            pathRewrite: { '^/api': '' }
        })
    );
    app.get('/config', (req, res) => {
        res.json({
            config: {
                monitorBackend: {
                    host: process.env.BACKEND || 'localhost',
                    port: process.env.BACKEND_PORT || '30010',
                    path: process.env.BACKEND_PATH || '',
                    //  socketIoPath: process.env.MONITOR_BACKEND_PATH_SOCKETIO || '',
                    schema: process.env.isSecure ? 'https://' : 'http://'
                }
            }
        });
    });
};