// The 'Model' is responsible for managing the data of the application.
// You can define your models in the 'data' section of each Vue component
// or define them separately if they might be used by multiple components.

// Models are usually prototypes (similar to classes if you are familiar with those)
function Team(){
    const FIELD = { OUTFIELD: 'OF', INFIELD: 'IF', PITCHER: 'P', CATCHER: 'C'};
    const BATTING = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5, SIX: 6, SEVEN: 7, EIGHT: 8, NINE: 9};

    //defaults when Team.call(this) is invoked when constructing new Player
    this.position = FIELD.INFIELD;
    this.order = BATTING.NINE;

    // this.battingOrder = function () { TODO next availabe to bat checking enum}

    this.remove= function(){
    }

}

function Player(name, number, bats, throws){
    Team.call(this);
    this.name = name;
    this.number = number;
    this.bats = bats;
    this.throws = throws;
}
// to ensure Player remains as a Player object type
Player.prototype = Object.create(Team.prototype);
Player.prototype.constructor = Player;




// or ES6 syntactic sugar (these are not really classes in the traditional sense)
class Example {
    num = 0;

    constructor(num){
        this.num = num;
    }
}
