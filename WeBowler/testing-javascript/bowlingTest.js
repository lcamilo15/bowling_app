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

        var game = [
            [1, 1], [1, 1],
            [1, 1], [1, 1],
            [1, 1], [1, 1],
            [1, 1], [1, 1],
            [1, 1], [1, 1]];
        var totalScore = 20;
        var actualScore = bowlingScoringService.getTotalScore(game);

        assert(actualScore === totalScore, "Total score should be + " + totalScore + " but it is " + actualScore);
    });

    it("Score a game with a spare and bonus ball", function() {

        var game = [
            [7, 3], [4, 0],
            [0, 0], [0, 0],
            [0, 0], [0, 0],
            [0, 0], [0, 0],
            [0, 0], [0, 0]];

        var totalScore = 18;
        var actualScore = bowlingScoringService.getTotalScore(game);

        assert(actualScore === totalScore, "Total score should be + " + totalScore + " but it is " + actualScore);

    });

    it("Score a game with a strike and two bonus balls", function () {

        var game = [
            [10, 0], [3, 6],
            [0, 0], [0, 0],
            [0, 0], [0, 0],
            [0, 0], [0, 0],
            [0, 0], [0, 0]];
        assert(bowlingScoringService.getTotalScore(game) === 28);
    });

    it("Score a game with a strike in the last frame and two bonus balls", function () {

        var game = [
            [0, 0], [0, 0],
            [0, 0], [0, 0],
            [0, 0], [0, 0],
            [0, 0], [0, 0],
            [0, 0], [10, 5], [8]];
        var totalScore = 23;
        var actualScore = bowlingScoringService.getTotalScore(game);

        assert(actualScore === totalScore, "Total score should be + " + totalScore + " but it is " + actualScore);
    });

    //Score a game with no bonuses
    //Score a game with a spare and one bonus balls
    //Socre a game with a strike and 2 bonus balls
    //Score a game wtih a strike in the last frame and two bonus balls

});
