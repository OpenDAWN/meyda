var chai = require("chai");
var assert = chai.assert;
var TestData = require("../TestData");

// Setup
var spectralSkewness = require("../../dist/node/extractors/spectralSkewness");

describe('spectralSkewness', function(){
  it('should return the correct Spectral Skewness value when passed a valid signal', function(done){
    var en = spectralSkewness({
      ampSpectrum:TestData.VALID_SIGNAL
    });

    assert.equal(en,3.6735467237693653);

    done();
  });
  
  it('should throw an error when passed an empty object', function(done){
    try{
      var en = spectralSkewness({});
    } catch(e){
      done();
    }
  });
  
  it('should throw an error when not passed anything', function(done){
    try{
      var en = spectralSkewness();
    } catch(e){
      done();
    }
  });

  it('should throw an error when passed something invalid', function(done){
    try{
      var en = spectralSkewness({signal:"not a signal"});
    } catch(e){
      done();
    }
  });
});