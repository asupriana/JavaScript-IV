/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
    constructor (gattributes) {
        this.dimensions = gattributes.dimensions;
        this.createdAt = gattributes.createdAt;
    }
    destroy() {
        return "Evil Queen has vanished."
      }
}

class Characteristics extends GameObject {
    constructor(cattributes) {
        super(cattributes);
        this.healthPoints = cattributes.healthPoints;
        this.name = cattributes.name;
    }
    greet(){
        return "Elsa offers chills in ice."
     }

}

class Humanoid extends Characteristics {
    constructor (hattributes) {
        super(hattributes)
        this.team = hattributes.team;
        this.weapons = hattributes.weapons;
        this.language = hattributes.language;
    }
    takeDamage() {
        return "Maleficent was hit."
    }

}




  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 4,
      width: 1,
      height: 2,
    },
    healthPoints: 25,
    name: 'Maleficent',
    team: 'Dragon',
    weapons: [
      'Staff',
      'fire',
    ],
    language: 'native',
  });

  const mixologist = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 1,
      height: 2,
    },
    healthPoints: 15,
    name: 'Evil Queen',
    team: 'Poison',
    weapons: [
      'Wand',
      'apples',
    ],
    language: 'pure jealousy',
  });

  const cold = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 3,
    },
    healthPoints: 20,
    name: 'Elsa',
    team: 'Frozen',
    weapons: [
      'Balls',
      'icicles',
    ],
    language: 'ice',
  });



  console.log(mage.createdAt); // Today's date
  console.log(mixologist.healthPoints); // 15
  console.log(mage.name); // Maleficent
  console.log(mixologist.team); // Poison
  console.log(mage.weapons); // Staff
  console.log(cold.language); // ice
  console.log(cold.greet()); // Elsa offers chills in ice.
  console.log(mage.takeDamage()); // Maleficent was hit.
  console.log(mixologist.destroy()); // Evil Queen has vanished. 