

function BowlingScoringService() {

    var _frames = [];
    var _totalScore = 0;

    this.getFrameCount = function() {
        return 10;
    };

    this.getTotalScore = function() {
        for (var i=0;i < _frames.length; i++){
            var currentFrame = _frames[i];
            _totalScore += currentFrame[0] + currentFrame[1];
        }
        return _totalScore;
    };

    this.addFrameScore = function(ballOne, ballTwo){
        _frames.push([ballOne, ballTwo]);
    }
}