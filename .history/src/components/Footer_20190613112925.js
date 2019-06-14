import React from "react";
import "../styles/Footer.css";
import { animateScroll as scroll } from "react-scroll";
 


export default function Footer() {
  let Scroll = require('react-scroll');
  let scroll = Scroll.animateScroll;

  scrollToTop: function() {
    scroll.scrollToTop();
  }
  return  (
    <footer role="contentinfo">
      <span>Made by Brendan Tanner</span>
      <a onClick={this.scrollToTop}>To the top!</a>
      <br />
    </footer>
  );
}


