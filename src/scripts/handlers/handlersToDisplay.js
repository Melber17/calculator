import {
  addition,
  division,
  multiplication,
  radicalExtraction,
  subtraction,
} from "../helpers/mathFunctions";
import { displayCurrentValues } from "../helpers/displayValues";
import { parserValues } from "../helpers/displayValues";
import {
  previousOperand,
  currentOperand,
  memoryContainer,
  radicalCustomBtnHelper,
} from "../constants/constants";

export class Calculator {
  constructor(currentOperand, previousOperand) {
    this.currentOperand = currentOperand;
    this.previousOperand = previousOperand;
  }
  handler() {}
}

export class HandlerClickNumber extends Calculator {
  handler(number) {
    if (
      this.currentOperand.textContent.includes(".") &&
      this.number.target.textContent === "."
    ) {
      return;
    }

    if (
      this.currentOperand.textContent &&
      this.currentOperand.textContent.slice(-1) == 0 &&
      !this.currentOperand.textContent.includes(".") &&
      +number.target.textContent === 0
    ) {
      return;
    }

    const textContent =
      this.currentOperand.textContent + number.target.textContent;
    this.currentOperand.innerText = textContent;
  }
}

export class HandlerClickDelete extends Calculator {
  constructor(currentOperand, previousOperand, radicalCustomBtnHelper) {
    super(currentOperand, previousOperand);
    this.radicalCustomBtnHelper = radicalCustomBtnHelper;
  }
  handler(btn) {
    if (btn.target.innerText === "AC") {
      this.currentOperand.innerText = this.currentOperand.textContent.substring(
        0,
        this.currentOperand.innerText.length - 1
      );
    } else {
      this.currentOperand.innerText = "";
      this.previousOperand.innerText = "";
      this.radicalCustomBtnHelper.innerText = "";
    }
  }
}
export class HandlerCountResult extends Calculator {
  constructor(currentOperand, previousOperand, radicalCustomBtnHelper) {
    super(currentOperand, previousOperand);
    this.radicalCustomBtnHelper = radicalCustomBtnHelper;
  }
  handler() {
    if (this.radicalCustomBtnHelper.textContent.includes("√")) {
      this.currentOperand.innerText = radicalExtraction(
        +this.radicalCustomBtnHelper.textContent.substring(
          0,
          this.radicalCustomBtnHelper.innerText.length - 1
        ),
        +this.currentOperand.textContent
      );
      this.radicalCustomBtnHelper.innerText = "";
      this.previousOperand.innerText = "";
      return;
    }
    if (!this.previousOperand.textContent || !this.currentOperand.textContent)
      return;
    if (
      this.previousOperand.textContent.includes("(") ||
      this.currentOperand.textContent.includes(")")
    ) {
      this.currentOperand.innerText = parserValues(
        this.previousOperand.textContent + this.currentOperand.textContent
      );
      this.previousOperand.innerText = "";
      return;
    }
    switch (previousOperand.textContent.slice(-1)) {
      case "+":
        this.currentOperand.innerText = addition(
          +this.previousOperand.textContent.substring(
            0,
            this.previousOperand.textContent.length - 2
          ),
          +currentOperand.textContent
        );
        previousOperand.innerText = "";
        break;
      case "-":
        this.currentOperand.innerText = subtraction(
          +this.previousOperand.textContent.substring(
            0,
            this.previousOperand.innerText.length - 2
          ),
          +this.currentOperand.textContent
        );
        this.previousOperand.innerText = "";
        break;
      case "*":
        this.currentOperand.innerText = multiplication(
          +this.previousOperand.textContent.substring(
            0,
            this.previousOperand.innerText.length - 2
          ),
          +this.currentOperand.textContent
        );
        this.previousOperand.innerText = "";
        break;
      case "÷":
        if (this.currentOperand.textContent == 0) {
          alert("Can't division number to 0");
          return;
        }
        this.currentOperand.innerText = division(
          +this.previousOperand.textContent.substring(
            0,
            this.previousOperand.innerText.length - 2
          ),
          +this.currentOperand.textContent
        );
        previousOperand.innerText = "";
        break;
      case "^":
        if (this.currentOperand.textContent == 0) {
          alert("Can't division number to 0");
          return;
        }
        this.currentOperand.innerText = Math.pow(
          +this.previousOperand.textContent.substring(
            0,
            this.previousOperand.innerText.length - 2
          ),
          +this.currentOperand.textContent
        );
        this.previousOperand.innerText = "";
    }
  }
}

export class HandlerChangeMemory extends Calculator {
  constructor(currentOperand, previousOperand, memoryContainer) {
    super(currentOperand, previousOperand);
    this.memoryContainer = memoryContainer;
  }
  handler(btn) {
    switch (btn.target.innerText) {
      case "mc":
        memoryContainer.innerText = "";
        break;
      case "mr":
        if (memoryContainer.innerText) {
          currentOperand.innerText = memoryContainer.innerText.substring(3);
        }
        break;
      case "m+":
        if (currentOperand.innerText) {
          memoryContainer.innerText =
            "M: " +
            (+memoryContainer.innerText.substring(3) +
              +currentOperand.innerText);
        }
        break;
      case "m-":
        if (currentOperand.innerText) {
          memoryContainer.innerText =
            "M: " +
            (+memoryContainer.innerText.substring(3) -
              +currentOperand.innerText);
        }
    }
  }
}
