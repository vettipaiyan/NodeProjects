    module.exports = function Logger(logMethod){
        this.log = logMethod || console.log;
    };