import React from 'react';
import { connect } from "react-redux";

import TopNav from "../components/TopNav";
import RegisterForm from "../components/RegisterForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LandingSection from "../components/LandingSection";
import '../styles/LandingPage.css';
import { landingSectionsData } from '../components/ComponentData';

export class LandingPage extends React.Component {
    render() {
        const landingSections = landingSectionsData.map((section, index) => (
            <LandingSection 
            key={index}
            heading={section.heading}
            subheading={section.subHeading}
            image={section.image}
            text={section.text}
            />
        ));

        return (
            <div className="App">
                <TopNav />
                <Header />
                <section className="banner">
                <p>[Landing page cover photo-image Jamsoon placeholder]</p>
                    <button>Discover more</button>
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