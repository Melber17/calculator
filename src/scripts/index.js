import {
  handlerClickNumber,
  handlerClickDelete,
  handlerCountResult,
  handlerChangeMemory,
 
  handlerClickFraction,
} from "./handlers/handlersToDisplay";
import {
  handlerClickMainOperation,
  handleClickSymbol,
  handlerClickPercent,
  handlerClickRadical,
  handlerClickCustomRadical,
  handlerChangeSign,
  handlerClickLog,
  handlerClickEuler,
  handlerClickSecondFunction,
  handlerCLickDegree,
  handlerClickFractionToX,
} from "./handlers/mainOperations";
import "../styles/index.scss";

// Variables for elements
export const previousOperand = document.querySelector(
  "[data-previous-operand]"
);
export const currentOperand = document.querySelector("[data-current-operand]");

const numberButtons = document.querySelectorAll("[data-number]");

const mainOperationsButtons = document.querySelectorAll("[data-operation]");

const deleteButtons = document.querySelectorAll("[data-delete]");

const equalButton = document.querySelector("[data-equal]");

const symbolButtons = document.querySelectorAll("[data-symbol]");

const percentFuncBtn = document.querySelector("[data-operation-percent");

const oppositeFuncBtn = document.querySelector("[data-opposite]");

export const memoryContainer = document.querySelector("[data-memory]");
const memoryButtons = document.querySelectorAll("[data-change-memory]");

const degreeButtons = document.querySelectorAll("[data-degree]");

const eulerBtn = document.querySelector("[data-euler]");

const fractionTenthBtn = document.querySelector("[data-fraction]");

const fractionToXBtn = document.querySelector("[data-fraction-x]");

const radicalButtons = document.querySelectorAll("[data-radical]");

const radicalCustomBtn = document.querySelector("[data-custom-radical]");

const logBtn = document.querySelector("[data-log]");

export const radicalCustomBtnHelper = document.querySelector(
  "[data-current-operand-helper]"
);

const secondBtn = document.querySelector("[data-second]");

// handlers for buttons
numberButtons.forEach((btn) =>
  btn.addEventListener("click", handlerClickNumber)
);

deleteButtons.forEach((btn) =>
  btn.addEventListener("click", handlerClickDelete)
);

mainOperationsButtons.forEach((btn) =>
  btn.addEventListener("click", handlerClickMainOperation)
);

equalButton.addEventListener("click", handlerCountResult);

symbolButtons.forEach((symbol) =>
  symbol.addEventListener("click", handleClickSymbol)
);

percentFuncBtn.addEventListener("click", handlerClickPercent);

oppositeFuncBtn.addEventListener("click", handlerChangeSign);

memoryButtons.forEach((btn) =>
  btn.addEventListener("click", handlerChangeMemory)
);

degreeButtons.forEach((btn) =>
  btn.addEventListener("click", handlerCLickDegree)
);

eulerBtn.addEventListener("click", handlerClickEuler);

fractionTenthBtn.addEventListener("click", handlerClickFraction);

fractionToXBtn.addEventListener("click", handlerClickFractionToX);

radicalButtons.forEach((btn) =>
  btn.addEventListener("click", handlerClickRadical)
);

radicalCustomBtn.addEventListener("click", handlerClickCustomRadical);

secondBtn.addEventListener("click", handlerClickSecondFunction);

logBtn.addEventListener("click", handlerClickLog);
