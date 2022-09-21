const request = require('supertest');
const expect = require('chai').expect;

let server;

describe('Buscando com filtro de país e idioma', () => {

    let language = 'en';
    let country = 'us';

    const execWithFilter = async () => {
        server = require('../server');

        return (await request(server)
            .get(`/newsapi/${country}/${language}` )
            .send());
    };

    describe('GET /newsapi/${country}/${language}', () => {

        it('should return 200', async () => {
            const res = await execWithFilter();
            expect(res.statusCode).to.be.equals(200);
        });
    });

});


describe('Buscando notícias sem filtro', () => {

    const execWithoutFilter = async () => {
        server = require('../server');

        return (await request(server)
            .get(`/newsapi` )
            .send());
    };

    describe('GET /newsapi', () => {

        it('should return 200', async () => {
            const res = await execWithoutFilter();
            expect(res.statusCode).to.be.equals(200);
        });
    });

});
