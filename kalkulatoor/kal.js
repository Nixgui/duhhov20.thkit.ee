
let currency=document.getElementById("currency");
let input=document.getElementById("inputnumber");
let answer=document.getElementById("answer");
let img=document.getElementById("img");

const DOLLAR=1.22;
const RUB=84.56;
const SEK=10.16;
const POUND=0.86;


function changeEvent(event){
	let inputValue=input.value;
	if(event.target.value=="dollar"){
		answer.innerHTML=calculate(inputValue, DOLLAR)+ " $";

		//style for answer
		answer.setAttribute('style', "border: 1px solid red; margin-top: 20px; width: 10%;");

		// for image source
		img.src="img/dollar.jpg";

	}else if(event.target.value=="sek"){
		answer.innerHTML=calculate(inputValue, SEK)+ " SEK";

		//style for answer
		answer.setAttribute('style', "border: 1px solid red; margin-top: 20px; width: 10%;");

		// for image source
		img.src="img/sek.jpg";

	}else if(event.target.value=="rouble"){
		answer.innerHTML=calculate(inputValue, RUB)+ " rub";

		//style for answer
		answer.setAttribute('style', "border: 1px solid red; margin-top: 20px; width: 10%;");

		// for image source
		img.src="img/rub.jpg";

	}else if(event.target.value=="pound"){
		answer.innerHTML=calculate(inputValue, POUND)+ " £";

		//style for answer
		answer.setAttribute('style', "border: 1px solid red; margin-top: 20px; width: 10%;");

		// for image source
		img.src="img/pound.jpg";
	}
}

function calculate(val, currency){

	return (val*currency).toFixed(4); //toFixed - фикс количество знаков после запятой
}