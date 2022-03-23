// Objects part I

function Swordman(name, dmg, hp){
 this.name = name;
 this.dmg = dmg;
 this.hp = hp;
 this.attacks = 2;
 this.critic = 620;
};

let swordman  = new Swordman("garzy", 6200, 18000);
Object.getPrototypeOf(swordman) === Swordman.prototype;


Swordman.prototype.getTotalDamage = function() { // Whats arrow function don't work here???
 return this.attacks * this.dmg;
};

console.log(swordman.getTotalDamage());
