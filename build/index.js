/* @jsx createElement*/
import { createElement, render, Component } from './react.js';

class YourTitle extends Component {
  render() {
    return createElement("p", null, "This is your Title!");
  }

}

function Title(props) {
  return createElement("div", null, createElement("h2", null, "\uC774\uAC8C \uB418\uB0D0?"), createElement(YourTitle, null), createElement("p", null, "Working"));
} // console.log(Title());


render(createElement(Title, null), document.querySelector('#root'));