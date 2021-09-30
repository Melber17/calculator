import { Calculator } from "./handlersToDisplayResult";
import {
  currentOperand,
  previousOperand,
  memoryContainer,
  clearMemoryHandler,
  reCallMemoryHandler,
  plusCallMemoryHandler,
  minusMemoryHandler,
} from "../../constants/constants";
export class HandlerChangeMemory extends Calculator {
  constructor(currentOperand, previousOperand, memoryContainer) {
    super(currentOperand, previousOperand);
    this.memoryContainer = memoryContainer;
  }
  handler(btn) {
    switch (btn.target.innerText) {
      case "mc":
        clearMemoryHandler.handler(memoryContainer);
        break;
      case "mr":
        reCallMemoryHandler.handler(memoryContainer);
        break;
      case "m+":
        plusCallMemoryHandler.handler(memoryContainer);
        break;
      case "m-":
        minusMemoryHandler.handler(memoryContainer);
    }
  }
}

export class ClearMemoryHandler {
  handler(memory) {
    memory.innerText = "";
  }
}
export class ReCallMemoryHandler {
  handler(memory) {
    if (memory.innerText) {
      currentOperand.innerText = memory.innerText.substring(3);
    }
  }
}

export class PlusCallMemoryHandler {
  handler(memory) {
    if (currentOperand.innerText) {
      memory.innerText =
        "M: " + (+memory.innerText.substring(3) + +currentOperand.innerText);
    }
  }
}

export class MinusMemoryHandler {
  handler(memory) {
    if (currentOperand.innerText) {
      memory.innerText =
        "M: " + (+memory.innerText.substring(3) - +currentOperand.innerText);
    }
  }
}
