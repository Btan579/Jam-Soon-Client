import React from 'react';
import { connect } from "react-redux";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import * as Scroll from 'react-scroll';
// import TopNav from "../components/TopNav";
import RegisterForm from "../components/RegisterForm";
// import Header from "../components/Header";
import Footer from "../components/Footer";
import LandingSection from "../components/LandingSection";
import '../styles/LandingPage.css';
import TopMenu from "../components/topMenu";
import { landingSectionsData } from '../components/ComponentData';

export class LandingPage extends React.Component {
    // componentDidMount() {
    //     window.scrollTo(0, 0);
    // }

    render() {
        let Button = Scroll.Element;
        const landingSections = landingSectionsData.map((section, index) => (
            <LandingSection
            key={index}
            sectionIndex={section.sectionIndex}
            heading={section.heading}
            subheading={section.subHeading}
            image={section.image}
            text={section.text}
            />
        ));

        return (
            <div className="landing-page">
                <TopMenu />
                <section id="banner">
                        <div className="inner">
                        <p> JamSoon <span>listen locally</span></p>
                        <Link
                            activeClass="active"
                            to="landing-0"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        > 
                        Discover more</Link>
                        <Button activeClass="active" className="btn" type="button"  to="landing-0" spy={true} smooth={true} offset={-70} duration={500} >
                            Discover more
                        </Button>
                        </div>
                </section>
                {landingSections}
                <RegisterForm />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    landingSections: state.landingSections
});

export default connect(mapStateToProps)(LandingPage);