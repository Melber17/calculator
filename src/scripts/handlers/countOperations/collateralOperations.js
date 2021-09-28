import {
  currentOperand,
  previousOperand,
  radicalCustomBtnHelper,
} from "../../constants/constants";
import { Calculator } from "../handlersToDisplay/handlersToDisplayResult";

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
