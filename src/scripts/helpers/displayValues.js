import { previousOperand, currentOperand } from "../constants/constants";


export const parserValues = (expression) => {
  return Function(`return (${expression})`)();
};

export const displayCurrentValues = (value1, value2) => {
  previousOperand.innerText = `${value1} ${value2}`;
  currentOperand.textContent = "";
};
