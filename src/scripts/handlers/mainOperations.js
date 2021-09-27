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
  radicalCustomBtnHelper,
} from "../constants/constants";
import { Calculator } from "./handlersToDisplay/handlersToDisplayResult";

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

export class HandlerClickSymbol extends Calculator {
  handler(symbol) {
    this.currentOperand.innerText += symbol.target.innerText;
  }
}

export class HandlerClickPercent extends Calculator {
  handler() {
    currentOperand.innerText /= 100;
  }
}

export class HandlerChangeSign extends Calculator {
  handler() {
    if (currentOperand.innerText) currentOperand.innerText *= -1;
  }
}

export class HandlerClickDegree extends Calculator {
  handler(btn) {
    if (!this.currentOperand.innerText) {
      return;
    }
    switch (btn.target.innerText) {
      case "x2":
        this.currentOperand.innerText = Math.pow(
          +this.currentOperand.innerText,
          2
        );
        break;
      case "2":
        this.currentOperand.innerText = Math.pow(
          +this.currentOperand.innerText,
          2
        );
        break;
      case "x3":
        this.currentOperand.innerText = Math.pow(
          +this.currentOperand.innerText,
          3
        );
        break;
      case "3":
        this.currentOperand.innerText = Math.pow(
          +this.currentOperand.innerText,
          3
        );
        break;
      case "xy":
        this.previousOperand.innerText = `${this.currentOperand.innerText} ^`;
        this.currentOperand.innerText = "";
        break;
      case "y":
        this.previousOperand.innerText = `${this.currentOperand.innerText} ^`;
        this.currentOperand.innerText = "";
    }
  }
}

export class HandlerClickRadical extends Calculator {
  handler(btn) {
    if (!this.currentOperand.innerText) {
      return;
    }
    switch (btn.target.innerText) {
      case "√x":
        this.currentOperand.innerText = Math.sqrt(
          +this.currentOperand.innerText
        );
      case "∛x":
        this.currentOperand.innerText = Math.cbrt(
          this.currentOperand.innerText
        );
    }
  }
}

export class HandlerClickCustomRadical extends Calculator {
  constructor(currentOperand, previousOperand, radicalCustomBtnHelper) {
    super(currentOperand, previousOperand);
    this.radicalCustomBtnHelper = radicalCustomBtnHelper;
  }
  handler() {
    if (!this.currentOperand.innerText) {
      return;
    }
    this.radicalCustomBtnHelper.innerText = this.currentOperand.innerText + "√";
    this.currentOperand.innerText = "";
  }
}

export class HandlerClickSecondFunction extends Calculator {
  handler() {
    if (!this.currentOperand.innerText) {
      return;
    }
    this.currentOperand.innerText = Math.pow(2, this.currentOperand.innerText);
  }
}

export class HandlerClickLog extends Calculator {
  handler() {
    if (!this.currentOperand.innerText) {
      return;
    }
    this.currentOperand.innerText = Math.log(this.currentOperand.innerText);
  }
}

export class HandlerClickFractionToX extends Calculator {
  handler() {
    if (!this.currentOperand.innerText) {
      return;
    }
    this.currentOperand.innerText = 1 / +this.currentOperand.innerText;
  }
}

export class HandlerClickFraction extends Calculator {
  handler() {
    if (!this.currentOperand.innerText) return;
    this.currentOperand.innerText = Math.pow(
      10,
      +this.currentOperand.innerText
    );
  }
}

export class HandlerClickEuler extends Calculator {
  handler() {
    if (!this.currentOperand.innerText) return;
    this.currentOperand.innerText = Math.exp(+this.currentOperand.innerText);
  }
}
