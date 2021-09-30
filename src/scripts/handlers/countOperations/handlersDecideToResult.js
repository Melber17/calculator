import { Calculator } from "../handlersToDisplay/handlersToDisplayResult";
import {
  currentOperand,
  handlerAddition,
  handlerDegreeOfNumbers,
  handlerDivision,
  handlerMultiplication,
  handlerSubtraction,
  previousOperand,
} from "../../constants/constants";
import {
  addition,
  division,
  multiplication,
  radicalExtraction,
  subtraction,
} from "../../helpers/mathFunctions";

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
        handlerAddition.handler();
        break;
      case "-":
        handlerSubtraction.handler();
        break;
      case "*":
        handlerMultiplication.handler();
        break;
      case "÷":
        handlerDivision.handler();
        break;
      case "^":
        handlerDegreeOfNumbers.handler();
    }
  }
}

export class HandlerAddition extends Calculator {
  constructor(currentOperand, previousOperand) {
    super(currentOperand, previousOperand);
  }
  handler() {
    this.currentOperand.innerText = addition(
      +this.previousOperand.textContent.substring(
        0,
        this.previousOperand.textContent.length - 2
      ),
      +currentOperand.textContent
    );
    previousOperand.innerText = "";
  }
}

export class HandlerSubtraction extends Calculator {
  constructor(currentOperand, previousOperand) {
    super(currentOperand, previousOperand);
  }
  handler() {
    this.currentOperand.innerText = subtraction(
      +this.previousOperand.textContent.substring(
        0,
        this.previousOperand.innerText.length - 2
      ),
      +this.currentOperand.textContent
    );
    this.previousOperand.innerText = "";
  }
}

export class HandlerDivision extends Calculator {
  constructor(currentOperand, previousOperand) {
    super(currentOperand, previousOperand);
  }
  handler() {
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
  }
}
export class HandlerMultiplication extends Calculator{
  constructor(currentOperand, previousOperand) {
    super(currentOperand, previousOperand);
  }
  handler() {
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
  }
}
export class HandlerDegreeOfNumbers extends Calculator {
  constructor(currentOperand, previousOperand) {
    super(currentOperand, previousOperand);
  }
  handler() {
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
  }
}
