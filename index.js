function formatter() {
    return function(req, res, next) {
        res.api = {
            success: (code = 200, data = {}) => res.status(code).send({ data }),
            error: (code = 400, type = '', description = '') => res.status(code).send({ error: { code, type, description } })
        };
        next();
    };
}

module.exports = formatter;
