export const Header = ({ text }) => {
  const heading = document.createElement("h1");
  heading.innerText = text;

  return heading;
};
