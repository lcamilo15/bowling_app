var assert = chai.assert;

describe( 'main tests', function() {
  it( 'should have a default greeting', function() {
    var result = main.buildGreeting();
    assert.equal( result, 'hello, world' );
  } );

} );

describe( 'LifeCycleTests', function() {

  beforeEach(function() {
      console.log('before');
  });

  afterEach(function() {
      console.log('after');
  });

  it("test1", function(){
    console.log('test1');
  });

  it("test1", function(){
    console.log('test2');
  });

});
