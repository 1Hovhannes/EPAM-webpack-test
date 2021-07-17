import { Button } from "../../components/Button";
import { Header } from "../../components/Heading";
import { counter } from "../../utils/helpers";

let count = 0;

const body = document.body;
const root = document.createElement("div");
const countWrapper = document.createElement("h2");
countWrapper.innerText = count;

const header = Header({
  text: "Counter",
});

const decrement = Button({
  text: "Decrement",
  clickHandler: () => {
    counter(countWrapper, --count);
  },
});

const increment = Button({
  text: "Increment",
  clickHandler: () => {
    counter(countWrapper, ++count);
  },
});

root.append(header);

root.append(decrement);
root.append(countWrapper);
root.append(increment);

body.append(root);
