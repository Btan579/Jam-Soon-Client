import React from 'react';
import { connect } from "react-redux";

// import TopNav from "../components/TopNav";
import RegisterForm from "../components/RegisterForm";
// import Header from "../components/Header";
import Footer from "../components/Footer";
import LandingSection from "../components/LandingSection";
import '../styles/LandingPage.css';
import TopMenu from "../components/topMenu";
import { landingSectionsData } from '../components/ComponentData';

export class LandingPage extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
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
                {/* <Header /> */}
                <TopMenu />
                <section id="banner">
                <div className="inner">
                        <p> JamSoon <span>listen locally</span></p>
                        <button>Discover more</button>
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