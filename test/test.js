const chai = require( 'chai' );
const chaiHttp = require( 'chai-http' );
const assert = chai.assert;
chai.use( chaiHttp );

const connection = require( '../lib/setupMongooseTest' );
const app = require( '../lib/app.js' );

describe('images api', () =>{

	before( done => {
		const CONNECTED = 1;
		if (connection.readyState === CONNECTED) dropCollection();
		else connection.on('open', dropCollection);

		function dropCollection(){
			const name = 'images';
			connection.db
                .listCollections({ name })
                .next( (err, collinfo) => {
	if (!collinfo) return done();
	connection.db.dropCollection(name, done);
});
		}
	});

	const request = chai.request( app );

	const badger = {
		title: 'badger',
		category: 'animals', 
		url: 'some url' 
	};

	const pizza = {
		title: 'pizza',
		category: 'food', 
		url: 'another url' 
	};

// POST an image
	it( 'posts images', done => {
		request
            .post( '/images' )
            .send(badger)
		.then( res => {
			assert.ok( res.body._id );
			badger.__v = 0;
			badger._id = res.body._id;
			done();
		})
			.catch( done );
	});


// use returned id to GET same image
	it( 'get images by id', done => {
		request
            .get( '/images/'+badger._id )
		.then( res => {
            // assert that title, description, category, and url are equal to orignally supplied data.
			assert.deepEqual( res.body, [badger]);
			done();
		})
			.catch( done );
	});


    // POST another image
	it( 'posts additional images', done => {
		request
            .post( '/images' )
            .send(pizza)
		.then( res => {
			assert.ok( res.body._id );
			pizza.__v = 0;
			pizza._id = res.body._id;
			done();
		})
			.catch( done );
	});

// get all
	it( 'gets all images', done => {
		request
            .get( '/images')
		.then( res => {
			assert.equal( res.body.length, 2);
			done();
		})
			.catch( done );
	})

// get food
	it( 'gets images by category', done => {
		request
            .get( '/images?category=food')
		.then( res => {
            // assert that title, description, category, and url are equal to orignally supplied data.
			assert.equal( res.body.length, 1);
			done();
		})
			.catch( done );
	});



});