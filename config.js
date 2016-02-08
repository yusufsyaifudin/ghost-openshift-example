// # Ghost Configuration
// Setup your Ghost install for various [environments](http://support.ghost.org/config/#about-environments).

// Ghost runs in `development` mode by default. Full documentation can be found at http://support.ghost.org/config/

var path = require('path'),
    config;

config = {
    // ### Production
    // When running Ghost in the wild, use the production environment.
    // Configure your URL and mail settings here
    production: {
        url: 'http://blog-yusufs.rhcloud.com',
        mail: {},
        database: {
            host     : process.env.OPENSHIFT_MYSQL_DB_HOST,
            port     : process.env.OPENSHIFT_MYSQL_DB_PORT,
            user     : process.env.OPENSHIFT_MYSQL_DB_USERNAME,
            password : process.env.OPENSHIFT_MYSQL_DB_PASSWORD,
            database : process.env.OPENSHIFT_APP_NAME,
            charset  : 'utf8'
        },

        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: process.env.OPENSHIFT_NODEJS_PORT || '2368'
        }
    },
    development: {
    }
};

module.exports = config;
