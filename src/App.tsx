import * as React from 'react';

import ReactGA from "react-ga4";

import NavBar from './components/navBar/NavBar';
import Home from './components/home/Home';
import AboutMe from './components/aboutMe/AboutMe';
import Skills from './components/skills/Skills';
import MyProjects from './components/myProjects/MyProjects';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
import MyCertificates from 'components/myCertificates/MyCertificates';

import styles from './app.module.scss';

const TRACKING_ID: string = process.env.REACT_APP_GOOGLE_DATA_ID || "";
ReactGA.initialize(TRACKING_ID);

const App: React.FC = () => {

    return (
        <div className={styles.app}>
            <header>
                <NavBar />
            </header>
            <main className={styles.main}>
                <Home />
                <AboutMe />
                <Skills />
                <MyCertificates />
                <MyProjects />
                <Contacts />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
