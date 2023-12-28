const data = require('../assets/data');

exports.handler = async (event, context) => {
  return {
    Headers: {
      "Access-Control-Allow-Origin": "*"
    },
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
