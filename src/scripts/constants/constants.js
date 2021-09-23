import {
  HandlerChangeMemory,
  HandlerClickDelete,
  HandlerClickNumber,
  HandlerCountResult,
} from "../handlers/handlersToDisplay";
import {
  HandlerChangeSign,
  HandlerClickCustomRadical,
  HandlerClickDegree,
  HandlerClickEuler,
  HandlerClickFraction,
  HandlerClickFractionToX,
  HandlerClickLog,
  HandlerClickMainOperation,
  HandlerClickPercent,
  HandlerClickRadical,
  HandlerClickSecondFunction,
  HandlerClickSymbol,
} from "../handlers/mainOperations";

export const previousOperand = document.querySelector(
  "[data-previous-operand]"
);
export const currentOperand = document.querySelector("[data-current-operand]");

export const numberButtons = document.querySelectorAll("[data-number]");

export const mainOperationsButtons =
  document.querySelectorAll("[data-operation]");

export const deleteButtons = document.querySelectorAll("[data-delete]");

export const equalButton = document.querySelector("[data-equal]");

export const symbolButtons = document.querySelectorAll("[data-symbol]");

export const percentFuncBtn = document.querySelector("[data-operation-percent");

export const oppositeFuncBtn = document.querySelector("[data-opposite]");

export const memoryContainer = document.querySelector("[data-memory]");
export const memoryButtons = document.querySelectorAll("[data-change-memory]");

export const degreeButtons = document.querySelectorAll("[data-degree]");

export const eulerBtn = document.querySelector("[data-euler]");

export const fractionTenthBtn = document.querySelector("[data-fraction]");

export const fractionToXBtn = document.querySelector("[data-fraction-x]");

export const radicalButtons = document.querySelectorAll("[data-radical]");

export const radicalCustomBtn = document.querySelector("[data-custom-radical]");

export const logBtn = document.querySelector("[data-log]");

export const radicalCustomBtnHelper = document.querySelector(
  "[data-current-operand-helper]"
);

export const secondBtn = document.querySelector("[data-second]");

export const handlerNumbers = new HandlerClickNumber(
  currentOperand,
  previousOperand
);
export const handlerClickDelete = new HandlerClickDelete(
  currentOperand,
  previousOperand,
  radicalCustomBtnHelper
);

export const handlerCountResult = new HandlerCountResult(
  currentOperand,
  previousOperand,
  radicalCustomBtnHelper
);

export const handlerChangeMemory = new HandlerChangeMemory(
  currentOperand,
  previousOperand,
  radicalCustomBtnHelper,
  memoryContainer
);

export const handlerClickMainOperation = new HandlerClickMainOperation(
  currentOperand,
  previousOperand,
  radicalCustomBtnHelper
);
export const handlerClickSymbol = new HandlerClickSymbol(
  currentOperand,
  previousOperand
);

export const handlerClickPercent = new HandlerClickPercent(
  currentOperand,
  previousOperand
);
export const handlerChangeSign = new HandlerChangeSign(
  currentOperand,
  previousOperand
);

export const handlerClickDegree = new HandlerClickDegree(
  currentOperand,
  previousOperand
);

export const handlerClickRadical = new HandlerClickRadical(
  currentOperand,
  previousOperand
);

export const handlerClickCustomRadical = new HandlerClickCustomRadical(
  currentOperand,
  previousOperand,
  radicalCustomBtnHelper
);

export const handlerClickSecondFunction = new HandlerClickSecondFunction(
  currentOperand,
  previousOperand
);

export const handlerClickLog = new HandlerClickLog(
  currentOperand,
  previousOperand
);

export const handlerClickFractionToX = new HandlerClickFractionToX(
  currentOperand,
  previousOperand
);

export const handlerClickFraction = new HandlerClickFraction(
  currentOperand,
  previousOperand
);

export const handlerClickEuler = new HandlerClickEuler(
  currentOperand,
  previousOperand
);
