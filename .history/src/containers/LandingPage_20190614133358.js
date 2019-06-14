import React from 'react';
import { connect } from "react-redux";
import { Link, animateScroll as scroll } from "react-scroll";
import RegisterForm from "../components/RegisterForm";
import Footer from "../components/Footer";
import LandingSection from "../components/LandingSection";
import '../styles/LandingPage.css';
import TopMenu from "../components/topMenu";
import { landingSectionsData } from '../components/ComponentData';

export class LandingPage extends React.Component {

    render() {

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
                        <h1>JamSoon</h1>
                        <p><span>listen locally</span></p>
                        <div className="discover">
                            <Link
                                activeClass="active"
                                to="landing- 0"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Discover more</Link>
                        </div>
                        
                        </div>
                </section>
                <div className="landings">
                    {landingSections}
                </div>
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