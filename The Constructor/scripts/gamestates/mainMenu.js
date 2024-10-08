let menuState = {

    create: function() {

        // add sprites
        let background = game.add.sprite(0, 0, 'mainMenuBg');
        background.height = this.game.height;
        background.width = this.game.width;
        let startButton = game.add.button(330,260,'mainMenuButton',this.gameStart,this,1,2,0);
        let scoresButton = game.add.button(330,340,'mainMenuButton',this.showScoreboard,this,1,2,0);

        startButton.width = 160;
        startButton.height = 50;
        scoresButton.width = 160;
        scoresButton.height = 50;

        mechanics.createText('The Constructor', 60, 5, 0, 130);
        mechanics.createText('Play game', 20, 3, 0, 270);
        mechanics.createText('Scoreboard', 20, 3, 0, 350);
        mechanics.createText('(C) 2023 AyeshaPT', 12, 3, -300, 500);

    },

    gameStart:function(){
        game.state.start('pickLevel');
    },

    showCredits:function(){
        game.state.start('credits');
    },

    showScoreboard: function () {
        game.state.start('scoreboard');
    }




};