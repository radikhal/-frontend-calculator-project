//CALCULATOR FUNCTIONALITY SETUP
class Calculator {
	constructor(previousOperandTextElement, currentOperandTextElement) {
		this.previousOperandTextElement = previousOperandTextElement;
		this.currentOperandTextElement = currentOperandTextElement;
		this.clear();
	}

	clear() {
		this.currentOperand = "";
		this.previousOperand = "";
		this.operation = undefined;
	}

	delete() {
		this.currentOperand = this.currentOperand.toString().slice(0, -1);
	}

	appendNumber(number) {
		if (number === "." && this.currentOperand.includes(".")) return;
		this.currentOperand = this.currentOperand.toString() + number.toString();
	}

	chooseOperation(operation) {
		if (this.currentOperand === "") return;
		if (this.previousOperand !== "") {
			this.compute();
		}
		this.operation = operation;
		this.previousOperand = this.currentOperand;
		this.currentOperand = "";
	}

	compute() {
		let computation;
		const prev = parseFloat(this.previousOperand);
		const current = parseFloat(this.currentOperand);
		if (isNaN(prev) || isNaN(current)) return;
		switch (this.operation) {
			case "+":
				computation = prev + current;
				break;
			case "-":
				computation = prev - current;
				break;
			case "x":
				computation = prev * current;
				break;
			case "/":
				computation = prev / current;
				break;
			default:
				return;
		}
		this.currentOperand = computation;
		this.previousOperand = " ";
		this.operation = undefined;
	}

	getDisplayNumber(number) {
		const stringNumber = number.toString();
		const integerDigits = parseFloat(stringNumber.split(".")[0]);
		const decimalDigits = stringNumber.split(".")[1];
		let integerDisplay;
		if (isNaN(integerDigits)) {
			integerDisplay = "";
		} else {
			integerDisplay = integerDigits.toLocaleString("en", {
				maximumFractionDigits: 0,
			});
		}
		if (decimalDigits != null) {
			return `${integerDisplay}.${decimalDigits}`;
		} else {
			return integerDisplay;
		}
	}

	updateDisplay() {
		this.currentOperandTextElement.innerText = this.getDisplayNumber(
			this.currentOperand
		);
		if (this.operation != null) {
			this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
				this.previousOperand
			)} ${this.operation}`;
		} else {
			this.previousOperandTextElement.innerText = "";
		}
	}
}

const previousOperandTextElement = document.querySelector(
	"[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
	"[data-current-operand]"
);
const numberButton = document.querySelectorAll("[data-number]");
const operationButton = document.querySelectorAll("[data-operation]");
const deleteButton = document.querySelector("[data-delete");
const allClearButton = document.querySelector("[data-all-clear]");
const equalsButton = document.querySelector("[data-equals]");

const calculator = new Calculator(
	previousOperandTextElement,
	currentOperandTextElement
);

numberButton.forEach((button) => {
	button.addEventListener("click", () => {
		calculator.appendNumber(button.innerText);
		calculator.updateDisplay();
	});
});
operationButton.forEach((button) => {
	button.addEventListener("click", () => {
		calculator.chooseOperation(button.innerText);
		calculator.updateDisplay();
	});
});

equalsButton.addEventListener("click", () => {
	calculator.compute();
	calculator.updateDisplay();
});

allClearButton.addEventListener("click", () => {
	calculator.clear();
	calculator.updateDisplay();
});

deleteButton.addEventListener("click", () => {
	calculator.delete();
	calculator.updateDisplay();
});

// THEME CHANGER SETUP

const calcContainer = document.querySelector(".calculator-container");
const theme = document.querySelector(".theme");
const calcName = document.querySelector("h1");
const output = document.querySelector(".output-container");
const numOperaContainer = document.querySelector(
	".number__operations__container"
);
const themeContainer = document.querySelector(".theme-container ");
const delButton = document.querySelector(".delete-btn");
const resetButton = document.querySelector(".reset-btn");
const eqlButton = document.querySelector(".equals-btn");
const genericBtn = document.querySelectorAll(".btn");
const previousOperand = document.querySelector(".previous-operand");
const currentOperand = document.querySelector(".current-operand");
const slider = document.querySelector(".slider");
const myRange = document.getElementById("myRange");

myRange.oninput = () => {
	let value = myRange.value;
	if (value == 1) {
		// CONTAINER SETUP
		calcContainer.style.background = "var(--t1-main-background)";
		calcName.style.color = "white";
		themeContainer.style.color = "white";
		output.style.background = "var(--t1-desaturated-blue-screen-background)";
		numOperaContainer.style.background =
			"var(--t1-toggle-background-keypad-background)";
		// GENERIC KEY BUTTONS
		genericBtn.forEach((btn) => {
			btn.style.background = "var(--t1-key-background)";
			btn.style.color = "var(--t1-toggle-background-keypad-background)";
			btn.style.boxShadow = " 0px 4px grey";
		});
		// DELETE, RESET, EQUAL BUTTONS
		delButton.style.background = " var(--t1-dark-blue-key-background)";
		resetButton.style.background = " var(--t1-dark-blue-key-background)";
		delButton.style.boxShadow = "0px 4px hsl(224, 28%, 35%)";
		resetButton.style.boxShadow = "0px 4px hsl(224, 28%, 35%)";
		eqlButton.style.background = "var(--t1-key-background-toggle)";
		eqlButton.style.color = "white";
        eqlButton.style.boxShadow = "0px 4px hsl(25, 99%, 27%)";
		// PREVIOUS AND CURRENT OPERAND DISPLAY
		previousOperand.style.color = "white";
		currentOperand.style.color = "white";
		//SLIDER BUTTON DESIGN
		slider.style.background = "var(--t1-toggle-background-keypad-background)";
	}

	if (value == 2) {
		// CONTAINER SETUP
		calcContainer.style.background = "var(--t2-main-background)";
		calcName.style.color = "black";
		themeContainer.style.color = "black";
		output.style.background = "var(--t2-light-gray-screen-background)";
		numOperaContainer.style.background =
			"var(--t2-toggle-background-keypad-background)";
		// GENERIC KEY BUTTONS
		genericBtn.forEach((btn) => {
			btn.style.background = "var( --t2-gray-yellow-key-background)";
			btn.style.color = "var(--t1-toggle-background-keypad-background)";
			btn.style.boxShadow = "0px 4px var(--t2-grayish-orange-key-shadow)";
		});
		// DELETE, RESET, EQUAL BUTTONS
		delButton.style.background = "var(     --t2-dark-cyan-key-background)";
		resetButton.style.background = "var(     --t2-dark-cyan-key-background)";
		("var(--t2-toggle-background-keypad-background)");
		delButton.style.boxShadow = "0px 4px var(--t2-very-dark-cyan-key-shadow)";
		resetButton.style.boxShadow = "0px 4px var(--t2-very-dark-cyan-key-shadow)";
		eqlButton.style.background = "var(     --t2-orange-key-background-toggle)";
		eqlButton.style.boxShadow = "0px 4px var(--t2-dark-orange-key-shadow)";
		eqlButton.style.color = "white";
		// PREVIOUS AND CURRENT OPERAND DISPLAY
		previousOperand.style.color =
			"var(--t1-toggle-background-keypad-background)";
		currentOperand.style.color =
			"var(--t1-toggle-background-keypad-background)";
		//SLIDER BUTTON DESIGN
		slider.style.background =
			"var(     --t2-toggle-background-keypad-background)";
	}

	if (value == 3) {
		// CONTAINER SETUP
		calcContainer.style.background = "var(--t3-main-background)";
		calcName.style.color = "var(--text-light-yellow)";
		themeContainer.style.color = "var(--text-light-yellow)";
		output.style.background = "var(--t3-toggle-background-keypad-background)";
		numOperaContainer.style.background =
			"var(--t3-toggle-background-keypad-background)";
		// GENERIC KEY BUTTONS
		genericBtn.forEach((btn) => {
			btn.style.background = "var(--t3-dark-violet-key-background)";
			btn.style.color = "var(--text-light-yellow)";
			btn.style.boxShadow = "0px 4px var(--t3-dark-magenta-key-shadow)";
		});

		// DELETE, RESET, EQUAL BUTTONS
		delButton.style.background = "var( --t3-vivid-magenta-key-background)";
		delButton.style.boxShadow = "0px 4px var(--t3-vivid-magenta-key-shadow)";
		resetButton.style.background = "var( --t3-vivid-magenta-key-background)";
		resetButton.style.boxShadow = "0px 4px var(--t3-vivid-magenta-key-shadow)";
		eqlButton.style.background =
			"var(      --t3-pure-cyan-key-background-toggle)";
		eqlButton.style.color = "black";
		eqlButton.style.boxShadow = "0px 4px var(    --t3-soft-cyan-key-shadow)";
		// PREVIOUS AND CURRENT OPERAND DISPLAY
		previousOperand.style.color = "var(--text-light-yellow)";
		currentOperand.style.color = "var(--text-light-yellow)";
		// SLIDER BUTTON DESIGN
		slider.style.background = "var(--t3-toggle-background-keypad-background)";
	}
};
