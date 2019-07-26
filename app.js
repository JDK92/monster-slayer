new Vue({
  el: "#app",
  data: {
    disabled: false,
    battleLog: [],
    hero: {},
    monster: {},
    heroLifebar: "Waiting",
    monsterLifebar: "Waiting",
    heroDamage: "",
    monsterDamage: "",
    heroHealing: "",
    healthStatus: {},
    win: false,
    loss: false
  },
  methods: {
    startGame: function() {
      this.heroLifebar = 100;
      this.monsterLifebar = 100;

      this.hero = {
        width: this.heroLifebar + "%"
      };

      this.monster = {
        width: this.monsterLifebar + "%"
      };

      this.battleLog.push("BEGIN!");
    },
    attack: function() {
      this.heroDamage = Math.round(Math.random() * 10);
      this.monsterDamage = Math.round(Math.random() * 8);

      this.monsterLifebar = this.monsterLifebar - this.heroDamage;
      this.heroLifebar = this.heroLifebar - this.monsterDamage;

      this.monster = {
        width: this.monsterLifebar + "%"
      };

      this.hero = {
        width: this.heroLifebar + "%"
      };

      this.battleLog.push(
        "ATTACK! Hero dealt " +
          this.heroDamage +
          " / " +
          "Monster dealt " +
          this.monsterDamage
      );
    },
    specialAttack: function() {
      this.heroDamage = Math.round(Math.random() * 12);
      this.monsterDamage = Math.round(Math.random() * 10);

      this.monsterLifebar = this.monsterLifebar - this.heroDamage;
      this.heroLifebar = this.heroLifebar - this.monsterDamage;

      this.monster = {
        width: this.monsterLifebar + "%"
      };

      this.hero = {
        width: this.heroLifebar + "%"
      };

      this.battleLog.push(
        "SPECIAL ATTACK! Hero dealt " +
          this.heroDamage +
          " / " +
          "Monster dealt " +
          this.monsterDamage
      );
    },
    heal: function() {
      if (this.heroLifebar == 100) {
        this.monsterDamage = Math.round(Math.random() * 10);

        this.heroLifebar = this.heroLifebar - this.monsterDamage;

        this.hero = {
          width: this.heroLifebar + "%"
        };

        this.battleLog.push(
          "YOU HAVE FULL HEALTH! Monster dealt " + this.monsterDamage
        );
      } else {
        this.heroHealing = Math.round(Math.random() * 10);
        this.monsterDamage = Math.round(Math.random() * 10);

        this.heroLifebar =
          this.heroLifebar + this.heroHealing - this.monsterDamage;

        this.hero = {
          width: this.heroLifebar + "%"
        };

        this.battleLog.push(
          "HEALING! Hero healed " +
            this.heroHealing +
            " / " +
            "Monster dealt " +
            this.monsterDamage
        );
      }
    }
  },
  watch: {
    win: function() {
      alert("You won!");
    },
    loss: function() {
      alert("Game Over");
    },
    monsterLifebar: function() {
      if (this.monsterLifebar < 50) {
        this.monsterStatus = {
          backgroundColor: "yellow",
          width: this.monsterLifebar + "%"
        };
      }

      if (this.monsterLifebar < 20) {
        this.monsterStatus = {
          backgroundColor: "red",
          width: this.monsterLifebar + "%"
        };
      }
      if (this.monsterLifebar >= 50) {
        this.monsterStatus = {
          backgroundColor: "green"
        };
      }
    },
    heroLifebar: function() {
      if (this.heroLifebar < 50) {
        this.heroStatus = {
          backgroundColor: "yellow",
          width: this.heroLifebar + "%"
        };
      }
      if (this.heroLifebar < 20) {
        this.heroStatus = {
          backgroundColor: "red",
          width: this.heroLifebar + "%"
        };
      }
      if (this.heroLifebar >= 50) {
        this.heroStatus = {
          backgroundColor: "green"
        };
      }
    }
  }
});
