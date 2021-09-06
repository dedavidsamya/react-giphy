import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

// A component is responsible for producing one piece of HTML
//Static data is carried by the component's props
//Mutable data is carried by the component's state
// State and events handling make interactivity possible
//Stateless components can be coded as FUNCTIONS
//Stateful components need to be promoted as CLASSES

// this page of code shows Hello Samya on the root, and changes the color of the
// hello samya to red when someone clicks it.
// for it to function I need to create a clicked CSS class
// CSS: 
// .clicked {
//    color : red;
// }

// Here, Hello Samya is still a static element and has no state. It can't change
// because it only receives props:
// const Hello = (props) => {
//   return <div>Hello, {props.name}</div>;
// }

// Here, I build a component Hello
class Hello extends Component {
  // Here I create a Hello instance and pass props to it, that is, static data  
  constructor(props) {
    super(props);
    // Here I say that this instance of Hello has state
    // and right now I define a "clicked" state
    // which works like a property, I call "Hello.clicked"
    // the only difference from the props property is that this state property can change.
    this.state = {
      clicked: false
    };
  }

// Here I am setting (changing) the state of the Hello instance.
// I use an arrow function because I want the function to inherit "this" (the Hello 
// instance I created)
// I change the state of 'this' by making the property clicked
// the opposite of what it was when it was defined
// (it was false, so now it becomes true)
// the CSS class .clicked was not added,
// but now I activate the clicked property, it is true,
// so the CSS class is activated and the color of this Hello changes to red.
  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

// anytime 'render()'is called, the state will change
// the goal here is to build and return HTML for the component  
  render() {
    return (
      <div className={this.state.clicked ? 'clicked' : null}
        onClick={this.handleClick}>
        Hello {this.props.name}</div>
    )
  }
}

// here I am just selecting root (the whole root page) 
// and saying if root exists, react render the component Hello
// I give here a class name to Hello, and pass Samya as a name
// so Hello.name = Samya
// but as it is a React component, props.name = Samya
// because anything that this component receives that is static, goes into "props"
const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="Samya"/>, root);
}
