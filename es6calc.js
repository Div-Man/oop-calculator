class calculator {
	constructor(firstNumber){
		this.firstNumber = firstNumber
	}
	
	sum(){
	this.result = this.firstNumber;
		for(var i = 0; i < arguments.length; i++){
			this.result = this.result+arguments[i]
		}
		return this.result
	}
	
	dif(){
	this.result = this.firstNumber;
		for(var i = 0; i < arguments.length; i++){
			this.result = this.result-arguments[i]
		}
		return this.result
	}
	
	div(){
	this.result = this.firstNumber;
		for(var i = 0; i < arguments.length; i++){
			if(arguments[i] === 0){
				console.error('На нуль делить нельзя')
				return;
			}
			else{
				this.result = this.result/arguments[i]
			}
		}
		return this.result
	}
	
	mul(){
	this.result = this.firstNumber;
		for(var i = 0; i < arguments.length; i++){
			this.result = this.result*arguments[i]
		}
		return this.result
	}
}

//extends расширяет(наследует)

class SqrCalc extends calculator{
	constructor(firstNumber){
		super(firstNumber);
		this.firstNumber = firstNumber
	}
	
	sum(){
     let result = super.sum.apply(this, arguments)
      return (result * result);

	}
	
		dif(){
     let result = super.dif.apply(this, arguments)
      return (result * result);

	}
	
	div(){
     let result = super.div.apply(this, arguments)
      return (result * result);

	}
	
	mul(){
     let result = super.mul.apply(this, arguments)
      return (result * result);

	}
	
}

let myCalculator = new calculator(100);
let myCalculator2 = new SqrCalc(100);


console.log(myCalculator.sum(1, 2, 3)); //вернет 106
console.log(myCalculator.dif(10, 20)); //вернет 70
console.log(myCalculator.div(2, 2)); //вернет 25
console.log(myCalculator.mul(2, 2)); //вернет 400

console.log("........................")

console.log(myCalculator2.sum(1, 2, 3)); //вернет 11 236 (100 + 1 + 2 + 3 = 106 * 106)
console.log(myCalculator2.dif(10, 20)); //вернет 4 900
console.log(myCalculator2.div(2, 2)); //вернет 625
console.log(myCalculator2.mul(2, 2)); //вернет 160 000