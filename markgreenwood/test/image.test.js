const Image = require('../lib/models/image');
const expect = require('chai').expect; // eslint-disable-line no-unused-vars

describe('image model', () => {

  it ('validates with all required fields', (done) => {
    const test_image = new Image({
      title: 'Attack Cat',
      category: 'animals',
      url: 'www.attackcat.com/attackcat.jpg'
    });

    test_image.validate((err) => {
      done(err);
    });
  });

  it ('does not validate without title', (done) => {
    const no_title_image = new Image({
      category: 'animals',
      url: 'www.attackcat.com/attackcat.jpg'
    });

    no_title_image.validate((err) => {
      expect(err).to.be.ok;
      done();
    });
  });

  it ('does not validate without category', (done) => {
    const no_category_image = new Image({
      title: 'Attack Cat',
      url: 'www.attackcat.com/attackcat.jpg'
    });

    no_category_image.validate((err) => {
      expect(err).to.be.ok;
      done();
    });
  });

  it ('does not validate if category is not one of specified', (done) => {
    const bad_category_image = new Image({
      title: 'Attack Cat',
      category: 'rocks',
      url: 'www.attackcat.com/attackcat.jpg'
    });

    bad_category_image.validate((err) => {
      expect(err).to.be.ok;
      done();
    });
  });

  it ('does not validate without url', (done) => {
    const no_url_image = new Image({
      title: 'Attack Cat',
      category: 'animals',
    });

    no_url_image.validate((err) => {
      expect(err).to.be.ok;
      done();
    });
  });

});