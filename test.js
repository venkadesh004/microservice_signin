const request = require('supertest');
const {assert} = require('chai');

describe('GET /', () => {
    it('should return the login page', async () => {
        const response = await request("https://microservice-signin.onrender.com").get('/');
        assert.ok(response.status === 200);
    });
    it('should return the item page', async () => {
        const response = await request("https://microservice-signin.onrender.com").post('/').send({
            username: 'venkadesh',
            password: 'venkadesh'
        });
        // console.log(response.status);
        assert.ok(response.status === 302);
    });
});