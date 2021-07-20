const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator__keys');
const displayContent = document.querySelector('.display__calculator');
keys.addEventListener('click', e => {
	if(e.target.matches('button')) {
		const key = e.target;
		const action = key.dataset.action;
		const keyContent = key.textContent;	
		const displayNum = displayContent.textContent;
		const previousKeyType = calculator.dataset.previousKeyType
		if(!action) {
			if(displayNum === '0' || previousKeyType === 'operator') {
				displayContent.textContent = keyContent;
			}  else {
				displayContent.textContent = displayNum + keyContent;
			}
		} else if(action === "decimal") {
			displayContent.textContent = displayNum + '.';
		} else if(action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
			key.classList.add('is-pressed');
			calculator.dataset.previousKeyType = 'operator';
		} else if(action === 'calculate') {
			const firstValue = calculator.dataset.firstValue;
			const operator = calculator.dataset.operator;

		}
	}	


})