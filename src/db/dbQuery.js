const pool = require('../db/pool');

pool.on('connect', () => {
    console.log('connected to the db');
});


/**
 * DB Query
 * @param {object} req
 * @param {object} res
 * @returns {object} object
 */
exports.query = (quertText, params)  => {
  return new Promise((resolve, reject) => {
    pool.query(quertText, params)
      .then((res) => {
        pool.on('remove', () => {});
        resolve(res);
      })
      .catch((err) => {
        pool.on('remove', () => {});
        reject(err);
      });
  });
};