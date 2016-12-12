const Image = require('../lib/models/image');
const assert = require('chai').assert;

describe('Image model', () => {

  it('validates with title, category, and url', done => {
    const image = new Image({
      title: 'place1',
      category: 'places',
      url: 'http://www.images.com'
    });

    image.validate(err => {
      if(!err) done();
      else done(err);
    });
  });

  it('requires title', done => {
    const titlelessImage = new Image({
      category: 'places',
      url: 'http://www.images.com'
    });

    titlelessImage.validate(err => {
      assert.isOk(err, 'name not present');
      done();
    });
  });

  it('requires category', done => {
    const categorylessImage = new Image({
      title: 'place1',
      url: 'http://www.images.com'
    });

    categorylessImage.validate(err => {
      assert.isOk(err, 'category not present');
      done();
    });
  });

  it('requires category to be places, food, or animals', done => {
    const categorylessImage = new Image({
      title: 'place1',
      category: 'countries',
      url: 'http://www.images.com'
    });

    categorylessImage.validate(err => {
      assert.isOk(err, 'category not allowed');
      done();
    });
  });

  it('requires url', done => {
    const urllessImage = new Image({
      title: 'place1',
      category: 'countries'
    });

    urllessImage.validate(err => {
      assert.isOk(err, 'url not present');
      done();
    });
  });
});