import { currentOperand, previousOperand } from "../../constants/constants";

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
      number.target.textContent === "."
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
