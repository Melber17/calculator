import {
  handlerClickNumber,
  handlerClickDelete,
  handlerClickMainOperation,
  handlerCountResult,
  handleClickSymbol,
  handlerClickPercent
} from "./handlers/handlers";

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


const percentFuncButton = document.querySelector("[data-operation-percent");
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

symbolButtons.forEach((symbol) => symbol.addEventListener("click", handleClickSymbol));


percentFuncButton.addEventListener("click", handlerClickPercent)
