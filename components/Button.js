export const Button = ({ text, clickHandler }) => {
  const buttonWrapper = document.createElement("div");
  const button = document.createElement("button");
  button.addEventListener("click", clickHandler);
  button.innerText = text;

  buttonWrapper.append(button);

  return buttonWrapper;
};
