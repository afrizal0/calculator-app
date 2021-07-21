const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator__keys');
const displayContent = document.querySelector('.display__calculator');
keys.addEventListener('click', e => {
	if(e.target.matches('button')) {
		const key = e.target;
		const action = key.dataset.action;
		const keyContent = key.textContent;	
		const displayNum = displayContent.textContent;
		const previousKeyType = calculator.dataset.previousKeyType;
		if(!action) {
			if(displayNum === '0' || previousKeyType === 'operator') {
				displayContent.textContent = keyContent;
				calculator.dataset.previousKeyType = '';

			}  else {
				displayContent.textContent = displayNum + keyContent;
			}
		} else if(action === "decimal") {
			displayContent.textContent = displayNum + '.';
		} else if(action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
      		calculator.dataset.firstValue = displayNum;
      		calculator.dataset.previousKeyType = 'operator';
			calculator.dataset.operator = action;

		} else if(action === 'calculate') {
			const firstValue = calculator.dataset.firstValue;
			const operator = calculator.dataset.operator;
			const secondValue = displayNum;

			if(firstValue && secondValue && previousKeyType !== 'operator') {
				displayContent.textContent = calculate(firstValue, operator, secondValue);
			}

			console.log(firstValue);
			console.log(operator)
			console.log(secondValue);


		} else if(action === 'clear') {
			calculator.dataset.firstValue = '0';
			calculator.dataset.secondValue = '0';
			displayContent.textContent = '0';
		}
	}	
})
const calculate = (n1, operator, n2) => {
	let result = '';
	if(operator === 'add') {
		result =  parseFloat(n1) + parseFloat(n2);
	} else if(operator === 'subtract') {
		result = parseFloat(n1) - parseFloat(n2);
	} else if(operator === 'multiply') {
		result = parseFloat(n1) * parseFloat(n2);
	} else if(operator === 'divide') {
		result = parseFloat(n1) / parseFloat(n2);
	}
	return result;
}