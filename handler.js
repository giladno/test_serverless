'use strict';
const handler = handler=>(event, context, callback)=>handler(event, context)
    .then(res=>callback(null, res))
    .catch(callback);

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
