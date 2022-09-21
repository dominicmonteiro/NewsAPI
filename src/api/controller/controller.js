"use strict";
const NewsAPI = require("newsapi");

exports.getNews = async (req, res) => {
  const newsapi = new NewsAPI(process.env.NEWS_API_KEY);
  newsapi.v2.sources({
    language: 'en',
    country: 'us'
  }).then(response => {
    if(response.status === 'ok'){
        return res.status(200).send({
          news: response.sources
        });
    } else {
        return res.status(400).send({
            message: "Something went wrong or you don't have any news.",
            error: response
        });
    }
  });
};

exports.getNewsWithByCountryAndLanguage = async (req, res) => {
  const newsapi = new NewsAPI(process.env.NEWS_API_KEY);
  newsapi.v2.sources({
    language: req.params.language,
    country: req.params.country
  }).then(response => {
    if(response.status === 'ok'){
        return res.status(200).send({
            news: response.sources
        });
    } else {
        return res.status(400).send({
            message: "The country or language informed is invalid, or you doesn't have any news.",
            error: response
        });
    }
  });
};
