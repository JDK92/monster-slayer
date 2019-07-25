new Vue({
  el: "#app",
  data: {
    disabled: false,
    battleLog: [],
    monsterHealth: {},
    lifebar: "",
    damage: "",
    win: false,
    loss: false
  },
  methods: {
    startGame: function() {
      this.lifebar = 100;
      this.monsterHealth = {
        width: this.lifebar + "%"
      };
    },
    attack: function() {
      this.damage = Math.random() * 10;
      this.lifebar = this.lifebar - this.damage;
      this.monsterHealth = {
        width: this.lifebar + "%"
      };
      if (this.lifebar <= 0) {
        this.win = true;
      }
    }
  },
  watch: {
    win: function() {
      alert("You won!");
    },
    loss: function() {
      alert("Game Over");
    }
  }
});
