'use strict';
const handler = handler=>(event, context, callback)=>{
    context.callbackWaitsForEmptyEventLoop = false;
    handler(event, context)
        .then(res=>callback(null, res))
        .catch(err=>callback(null, {
            statusCode: err.statusCode||500,
            headers: {'Content-Type': 'text/plain'},
            body: 'Server Error',
        }));
};

module.exports.hello = handler(async (event, context)=>{
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless v1.0! Your function executed successfully!',
            input: event,
        }),
    };
    return response;
});
