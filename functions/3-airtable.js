require('dotenv').config();
const Airtable = require('airtable-node');

const airtable = new Airtable({
  apiKey: process.env.AIRTABLE_API_TOKEN,
})
  .base('appzL67khEb1LnkI1')
  .table('products');

exports.handler = async (event, context) => {
  try {
    const { records } = await airtable.list();
    const products = records.map((product) => {
      //console.log(product);
      const {
        id,
        fields: { name, price, image },
      } = product;
      const url = image[0].url;
      return {
        id,
        name,
        price,
        url,
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Server error',
    };
  }
};
