const notFound = (req, res, next) => {
    const error = new Error('Paggina non trovata');
    error.status = 404;
    next(error);
}

module.exports = notFound;