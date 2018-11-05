const chai = require('chai');
const assert = chai.assert;
const mongoose = require('mongoose');
const imgSchema = require('../lib/imageSchema');
const app = require('../lib/app');
const request = chai.request(app);

describe('E2E testing for API CRUD operations', () => {
    it('POST an image', done => {
        const testImage = new ImageUpload({ 
            title: "Sloth", 
            category: "animals",
            description: "Sloth eating a banana",
            url: "http://example.jpeg" 
        });
        request.post('/images').send(testImage)
            .then(res => {
                console.log(res.body);
                if (res.body) {
                    done();
                } else {
                    console.log("fail");
                    done(res);
                }
            })
    })
});