new Vue({
    el: "#app",
    data: {
        gameOver: true,
        yourHealth: 50,
        monsterHealth: 50,
        logs : []
    },
    computed: {
        reverseLogs: function () { return this.logs.reverse() }
    },
    methods: {
        startNewGame: function () {
            this.yourHealth = 100;
            this.monsterHealth = 100;
            this.logs = [];
            this.gameOver = false;
        },
        attack: function () {
            this.playerHitMonster();
            this.monsterHitsPlayer();    
            this.updateGameState();
        },
        specialAttack: function () {
            this.playerHitMonster();
            this.monsterHitsPlayer();
            this.updateGameState();
        },
        heal: function () {
            this.playerHeals();
            this.monsterHitsPlayer();
            this.updateGameState();
        },
        giveUp: function () {
            this.gameOver = true;
        },
        updateGameState: function() {
            if (this.yourHealth <= 0) {
                this.gameOver = true;
                if (window.confirm("You lose! New Game?")) this.startNewGame();
            }
            if (this.monsterHealth <= 0) { 
                this.gameOver = true;
                if (window.confirm("You Win! New Game?")) this.startNewGame();
            }
        },
        playerHitMonster: function () {
            const damage = this.damage();
            this.monsterHealth -= damage;
            this.logs.push("Player hits monster for " + damage);
        },
        playerHeals: function () {
            const damage = this.damage();
            this.yourHealth += damage;
            this.logs.push("Player heals himself for " + damage);
        },
        monsterHitsPlayer: function () {
            const damage = this.damage();
            this.yourHealth -= damage;
            this.logs.push("Monster hits player for " + damage);
        },
        damage: function() {
            return Math.floor(Math.random() * 10)
        }
    }
});