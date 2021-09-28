import {
  degreeButtons,
  deleteButtons,
  eulerBtn,
  fractionTenthBtn,
  equalButton,
  handlerChangeMemory,
  handlerChangeSign,
  handlerClickEuler,
  handlerClickFraction,
  handlerClickLog,
  handlerClickFractionToX,
  radicalButtons,
  radicalCustomBtn,
  secondBtn,
  logBtn,
  fractionToXBtn,
  handlerClickDelete,
  handlerClickMainOperation,
  handlerClickCustomRadical,
  handlerClickSecondFunction,
  handlerClickPercent,
  handlerClickSymbol,
  handlerClickRadical,
  handlerCountResult,
  handlerNumbers,
  mainOperationsButtons,
  memoryButtons,
  numberButtons,
  oppositeFuncBtn,
  percentFuncBtn,
  symbolButtons,
  handlerClickDegree,
} from "./constants/constants";
import "../styles/index.scss";

numberButtons.forEach((btn) =>
  btn.addEventListener("click", (btn) => handlerNumbers.handler(btn))
);

deleteButtons.forEach((btn) =>
  btn.addEventListener("click", (btn) => handlerClickDelete.handler(btn))
);

mainOperationsButtons.forEach((btn) =>
  btn.addEventListener("click", (btn) => handlerClickMainOperation.handler(btn))
);

equalButton.addEventListener("click", () => handlerCountResult.handler());

symbolButtons.forEach((symbol) =>
  symbol.addEventListener("click", (symbol) =>
    handlerClickSymbol.handler(symbol)
  )
);

percentFuncBtn.addEventListener("click", () => handlerClickPercent.handler());

oppositeFuncBtn.addEventListener("click", () => handlerChangeSign.handler());

memoryButtons.forEach((btn) =>
  btn.addEventListener("click", (btn) => handlerChangeMemory.handler(btn))
);

degreeButtons.forEach((btn) =>
  btn.addEventListener("click", (btn) => handlerClickDegree.handler(btn))
);

eulerBtn.addEventListener("click", () => handlerClickEuler.handler());

fractionTenthBtn.addEventListener("click", () =>
  handlerClickFraction.handler()
);

fractionToXBtn.addEventListener("click", () =>
  handlerClickFractionToX.handler()
);

radicalButtons.forEach((btn) =>
  btn.addEventListener("click", (btn) => handlerClickRadical.handler(btn))
);

radicalCustomBtn.addEventListener("click", () =>
  handlerClickCustomRadical.handler()
);

secondBtn.addEventListener("click", () => handlerClickSecondFunction.handler());

logBtn.addEventListener("click", () => handlerClickLog.handler());
