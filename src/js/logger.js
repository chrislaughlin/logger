let config = {};

const canLog = (next) => {
    if (console && config.on) {
        next();
    }
};

let Logger = {

    config: (configuration) => {
        config.on = configuration.on || false;
        config.prettyPrint = configuration.prettyPrint || false;
        config.async = configuration.async || false;
    },

    // Triggers a console log
    log: (message) => {
        canLog(() => {
            console.log('LOG: ', message);
        });
    },

    // Triggers a console info
    info: (message) => {
        canLog(() => {
            console.info('INFO: ', message);
        });
    },

    // Triggers a console debug
    debug: (message) => {
        canLog(() => {
            console.debug('INFO: ', message);
        });
    },

    // Triggers a console error
    error: (message) => {
        canLog(() => {
            console.error('ERROR: ', message);
        });
    },

    // Triggers a console warn
    warn: (message) => {
        canLog(() => {
            console.warn('WARN: ', message);
        });
    }
};

export default Logger;
