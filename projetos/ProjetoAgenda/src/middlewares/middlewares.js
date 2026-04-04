exports.middlewareGlobal = (req, res, next) => {
    res.locals.umavariavelLocal = 'algum valor para a variavel'
    next();
};

exports.outroMiddleware = (req, res, next) => {
    next();
};

exports.checkCsrfErro = (err, req, res, next) => {
    if (err){
        return res.render('404')
    }
};

exports.CsrfMiddlewares = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
};