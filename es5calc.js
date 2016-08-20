function calculator(firstNumber){
	this.firstNumber = firstNumber
}

calculator.prototype.sum = function(){
	this.result = this.firstNumber;
		for(var i = 0; i < arguments.length; i++){
			this.result = this.result+arguments[i]
		}
		return this.result
	}
	
	calculator.prototype.dif = function(){
	this.result = this.firstNumber;
		for(var i = 0; i < arguments.length; i++){
			this.result = this.result-arguments[i]
		}
		return this.result
	}
	
	calculator.prototype.div = function(){
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
	
		calculator.prototype.mul = function(){
			this.result = this.firstNumber;
		for(var i = 0; i < arguments.length; i++){
			this.result = this.result*arguments[i]
		}
		return this.result
	}


function SqrCalc(firstNumber){
	this.firstNumber = firstNumber
} 


SqrCalc.prototype = Object.create(calculator.prototype)

SqrCalc.prototype.sum = function(){
     let result = calculator.prototype.sum.apply(this, arguments);
   return (result * result);
}

SqrCalc.prototype.dif = function(){
     let result = calculator.prototype.dif.apply(this, arguments);
   return (result * result);
}

SqrCalc.prototype.div = function(){
     let result = calculator.prototype.div.apply(this, arguments);
   return (result * result);
}

SqrCalc.prototype.mul = function(){
     let result = calculator.prototype.mul.apply(this, arguments);
   return (result * result);
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