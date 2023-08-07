class Arena {
  constructor(hero, monsters, size = 10) {
    this.hero = hero;
    this.monsters = monsters;
    this.size = size;
  }

  getDistance(fighter1, fighter2) {
    return Math.sqrt(
      Math.pow(fighter2.x - fighter1.x, 2) +
        Math.pow(fighter2.y - fighter1.y, 2)
    ).toFixed(2);
  }

  isTouchable(attacker, defender) {
    return this.getDistance(attacker, defender) <= attacker.getRange();
  }

  verifMonster(wantToGo) {
    for (const m of this.monsters) {
      if (wantToGo.x === m.x && wantToGo.y === m.y) {
        let error = document.getElementById("error").innerText = "PAS LES JUMENTS";
        return true;
      }
    }
    return false;
  }

  // Hero movement managment
  // Gestion du déplacement du héros
  move(direction) {
    /* Your code goes here */
    const heroCoord = { x: this.hero.x, y: this.hero.y };
    const old = { x: this.hero.x, y: this.hero.y };
    switch (direction) {
      case "S":
        if (this.hero.y !== this.size - 1) {
          heroCoord.y++;
        }
        break;

      case "E":
        if (this.hero.x !== 0) {
          heroCoord.x--;
        }
        break;

      case "N":
        if (this.hero.y !== 0) {
          heroCoord.y--;
        }
        break;

      case "W":
        if (this.hero.x !== this.size - 1) {
          heroCoord.x++;
        }
        break;
    }
    if (!this.verifMonster(heroCoord)) {
      this.hero.x = heroCoord.x;
      this.hero.y = heroCoord.y;
    }
    return old;
  }
}
