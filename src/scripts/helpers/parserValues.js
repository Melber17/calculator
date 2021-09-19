
export const parserValues = (expression) => {
  return Function(`return (${expression})`)()
}
