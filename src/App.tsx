import * as React from 'react';

import NavBar from './components/navBar/NavBar';
import Home from './components/home/Home';
import AboutMe from './components/aboutMe/AboutMe';
import Skills from './components/skills/Skills';
import MyProjects from './components/myProjects/MyProjects';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';

import styles from './app.module.scss';

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
