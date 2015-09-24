var assert = chai.assert;

describe( 'BowlingScoringServiceTest', function() {
    var bowlingScoringService;

    beforeEach(function() {
        bowlingScoringService = new BowlingScoringService();
    });

    afterEach(function() {

    });

    it("Must have a total of 10 frames", function(){
        var frameCount = bowlingScoringService.getFrameCount();
        assert(frameCount === 10, "Frame count is not " + 10);
    });

    it("The total score should be equal to the sum of all the frames", function(){
        bowlingScoringService = new BowlingScoringService();
    });

});
