const requireDirectory = require('require-directory');
const Router = require('koa-router');

class InitManager {
    static initCore(app) {
        InitManager.app = app;
        InitManager.initLoaders();
        InitManager.loadConfig();
    }

    static loadConfig() {
        const configPath = `${process.cwd()}/config/config`;
        const config = require(configPath);
        global.config = config;
    }

    static initLoaders() {
        const apiDirectory = `${process.cwd()}/app/api`
        requireDirectory(module, apiDirectory, {visit: whenLoadModule});
        function whenLoadModule(obj) {
            if(obj instanceof Router) {
                InitManager.app.use(obj.routes());
            }
        }
    }
}

module.exports = InitManager