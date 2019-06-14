import React from "react";
import "../styles/Footer.css";
import { animateScroll as scroll } from "react-scroll";
 


export class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  
  scrollToTop() {
    scroll.scrollToTop();
  }
  render()  {
    let Scroll = require('react-scroll');
    

    return (
    <footer role="contentinfo">
      <span>Made by Brendan Tanner</span>
      <button id="scroll-top-btn" onClick={this.scrollToTop}>To the top!</button>
    </footer>
    );
  }
}

export default Footer;


