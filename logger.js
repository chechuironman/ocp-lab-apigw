var pino = require('pino')()
module.exports = function logger(reqid,user, message,severity) {
    id = reqid.slice(200, reqid.length);
    if (severity == 'error'){
        pino.error({'reqID': id,'user':user,message})
    }
    if (severity == 'info'){
        pino.info({'reqID': id,'user':user,message})
    }
    if (severity == 'debug'){
        pino.debug({'reqID': id,'user':user,message})
    }
} 
