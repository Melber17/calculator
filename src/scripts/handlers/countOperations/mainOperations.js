import { Calculator } from "../handlersToDisplay/handlersToDisplayResult";
import { currentOperand, previousOperand } from "../../constants/constants";
import { division, multiplication } from "../../helpers/mathFunctions";
import { displayCurrentValues } from "../../helpers/displayValues";
export class HandlerClickMainOperation extends Calculator {
  constructor(currentOperand, previousOperand, radicalCustomBtnHelper) {
    super(currentOperand, previousOperand);
    this.radicalCustomBtnHelper = radicalCustomBtnHelper;
  }
  handler(btn) {
    if (
      !this.currentOperand.textContent ||
      this.currentOperand.textContent[currentOperand.textContent.length - 1] ===
        btn.target.innerText
    ) {
      return;
    }

    const checkForCorrectExpression =
      (this.currentOperand.textContent.includes(")") ||
        this.currentOperand.textContent.includes("(")) &&
      this.currentOperand.textContent.split("(").length - 1 !==
        this.currentOperand.textContent.split(")").length - 1;

    if (checkForCorrectExpression) {
      this.currentOperand.textContent += btn.target.innerText;
      return;
    }

    if (
      this.currentOperand.textContent.split("(").length > 1 &&
      this.checkForCorrectExpression &&
      this.currentOperand.textContent.split(")").length - 1
    ) {
      alert(
        "Expression isn't written correctly. Probably mistake is in ( or )"
      );
      return;
    }

    if (
      this.previousOperand.textContent.includes("(") ||
      this.currentOperand.textContent.includes(")")
    ) {
      const result = parserValues(
        this.previousOperand.textContent + this.currentOperand.textContent
      );
      displayCurrentValues(result, btn.target.innerText);
      return;
    }
    if (this.radicalCustomBtnHelper.textContent.includes("√")) {
      const result = radicalExtraction(
        +this.radicalCustomBtnHelper.textContent.substring(
          0,
          this.radicalCustomBtnHelper.innerText.length - 1
        ),
        +this.currentOperand.textContent
      );
      displayCurrentValues(result, btn.target.innerText);
      this.radicalCustomBtnHelper.innerText = "";
      return;
    }
    if (this.previousOperand.textContent.includes("*")) {
      const result = multiplication(
        +this.previousOperand.textContent.substring(
          0,
          this.previousOperand.innerText.length - 2
        ),
        +this.currentOperand.textContent
      );
      displayCurrentValues(result, btn.target.innerText);
      return;
    }

    if (this.previousOperand.textContent.includes("+")) {
      const result = addition(
        +this.previousOperand.textContent.substring(
          0,
          this.previousOperand.innerText.length - 2
        ),
        +this.currentOperand.textContent
      );
      displayCurrentValues(result, btn.target.innerText);
      return;
    }
    if (this.previousOperand.textContent.includes("-")) {
      const result = subtraction(
        +this.previousOperand.textContent.substring(
          0,
          this.previousOperand.innerText.length - 2
        ),
        +this.currentOperand.textContent
      );
      displayCurrentValues(result, btn.target.innerText);
      return;
    }

    if (this.previousOperand.textContent.includes("÷")) {
      if (this.currentOperand.textContent == 0) {
        alert("Can't division number to 0");
        return;
      }
      const result = division(
        +this.previousOperand.textContent.substring(
          0,
          this.previousOperand.innerText.length - 2
        ),
        +this.currentOperand.textContent
      );
      displayCurrentValues(result, btn.target.innerText);
      return;
    }
    if (this.previousOperand.textContent.includes("^")) {
      const result = Math.pow(
        +this.previousOperand.textContent.substring(
          0,
          this.previousOperand.innerText.length - 2
        ),
        +this.currentOperand.textContent
      );
      displayCurrentValues(result, btn.target.innerText);
      return;
    }
    this.previousOperand.innerText = `${this.currentOperand.textContent} ${btn.target.innerText}`;
    this.currentOperand.textContent = "";
  }
}
