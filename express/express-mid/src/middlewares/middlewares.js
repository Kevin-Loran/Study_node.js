exports.middlewareGlobal = (req, res, next) => {
    if (req.body && req.body.cliente){
        console.log();
        console.log(`Vi que postou ${req.body.cliente}`);
        console.log();
    }
    next();
};

exports.outroMiddleware = (req, res, next) => {
    next();
};