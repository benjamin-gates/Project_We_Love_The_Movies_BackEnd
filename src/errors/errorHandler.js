// Returns an error if somethingn went wrong with the sight

function errorHandler(error, request, response, next){
    const { status = 500, message = 'Something went wrong!' } = error;
    response.status(status).json({ error: message });
}

module.exports = errorHandler;