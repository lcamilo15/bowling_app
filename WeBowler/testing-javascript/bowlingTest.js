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

        var frames = [[5,4], [3,4], [4,8], [9,2], [4,7], [6,4]];
        var totalScore = 0;
        for (var i=0; i < frames.length; i++){
            var currentFrame = frames[i];
            bowlingScoringService.addFrameScore(currentFrame[0], currentFrame[1]);
            totalScore += currentFrame[0] + currentFrame[1];
        }
        assert( totalScore === bowlingScoringService.getTotalScore(), "Total score should be " + totalScore + " but it is " + bowlingScoringService.getTotalScore());
    });

});
