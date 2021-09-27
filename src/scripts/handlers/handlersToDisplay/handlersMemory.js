import { Calculator } from "./handlersToDisplayResult";
import {currentOperand, previousOperand, memoryContainer} from "../../constants/constants";
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
