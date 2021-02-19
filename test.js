class Player {
	constructor(n, j){
        this.name = n;
        this.jerseyNumber = j ;
	}

    // sayName(){
        // return this.name;
    // }

    details() {
        return `Name: ${this.name} Jersey Number: ${this.jerseyNumber}`
    }

    updateName(newName) {
        this.name = newName;
    }
}

const player = new Player('Iwobi', 22);
const player2 = new Player('Ozil', 10);
console.log(player.details());
console.log(player2.details());
