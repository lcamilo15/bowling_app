

function BowlingScoringService() {

    var totalScore = 0;

    this.getFrameCount = function() {
        return 10;
    };

    this.getTotalScore = function (game) {

        for (var i = 0; i < game.length; i++) {
            var gameFrame = game[i];
            var frameScore = 0;

            if (gameFrame.length === 2) {
                frameScore = (gameFrame[0] + gameFrame[1]);
            } else {
                frameScore = gameFrame[0];
            }
           
            if (gameFrame[0] === 10) { //isStrike
                if (i === 9) {
                    frameScore += game[i + 1][0];
                    i += 1; //Move ahead a frame, so we don't count the last bonus ball twice
                } else {
                    frameScore += game[i + 1][0] + game[i + 1][1];
                }
            }

            if (frameScore === 10) { //isSpare
                frameScore += game[i + 1][0];
            }
            totalScore += frameScore;
        }


        return totalScore;
    };

    this.addFrameScore = function(ballOne, ballTwo){
       
    }
}