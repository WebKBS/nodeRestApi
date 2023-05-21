const Quote = require("../models/quote.model");

const getRandomQuote = async (req, res, next) => {
  let randomQuote;
  try {
    randomQuote = await Quote.getRandomQuote();
  } catch (error) {
    console.log(error);
    return next(error);
  }

  res.json({
    quote: randomQuote,
  });
};

module.exports = {
  getRandomQuote: getRandomQuote,
};
