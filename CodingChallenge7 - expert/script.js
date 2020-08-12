(function () {

    var score = 0;

    function quiz() {

        var Question = function (quest, ans, cans) {
            this.quest = quest;
            this.ans = ans;
            this.cans = cans;
            this.questChoose = function () {
                console.log(this.quest);
                for (var i = 0; i < ans.length; i++) {
                    console.log(this.ans[i]);
                }
            };
            this.corrAns = function () {
                var uans = prompt('Your Answer');
                if (uans !== 'exit') {
                    if (uans == this.cans) {
                        score++;
                        console.log('correct, your score is ' + score);
                    } else {
                        console.log('incorrect, your score is ' + score);
                    }
                    quiz();
                }
            }

        }

        var q1 = new Question('1. What you doin?', ['0. chillin', '1. codin'], 1);
        var q2 = new Question('2. What you singin?', ['0. anthem', '1. bieber'], 0);
        var q3 = new Question('3. What you shittin?', ['0. blood', '1. water', '2. shit'], 2);

        var quests = [q1, q2, q3];
        var qnum = Math.floor(Math.random() * 3);

        quests[qnum].questChoose();
        quests[qnum].corrAns();

    }
    quiz();
})();