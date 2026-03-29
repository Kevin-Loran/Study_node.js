exports.middlewareGlobal = (req, res, next) => {
    res.locals.umavariavelLocal = 'algum valor para a variavel'
    next();
};

exports.outroMiddleware = (req, res, next) => {
    next();
};