import * as React from 'react';

import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import logo from 'images/logo/logo-192x192.svg';

import styles from './navBar.module.scss';

interface Props {
    window?: () => Window;
}

const NavBar = (props: Props) => {
    const { window } = props;

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { t, i18n } = useTranslation('navBar');

    const navItems = [
        { title: t("item_1"), id: "home" },
        { title: t("item_2"), id: "aboutMe" },
        { title: t("item_3"), id: "skills" },
        { title: t("item_4"), id: "certificates" },
        { title: t("item_5"), id: "projects" },
        { title: t("item_6"), id: "contacts" },
    ];

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} className={styles.drawerBox}>
            <Box className={styles.drawerLogo}>
                <img src={logo} alt='Dmytro Kotykhin logo' width='40px' />
            </Box>
            <Divider className={styles.divider} />
            {navItems.map((item) => (
                <Link
                    key={item.id}
                    className={styles.drawerItem}
                    to={item.id} spy={true} smooth={true} offset={-56} duration={500}
                    onClick={handleDrawerToggle}
                >
                    {item.title}
                </Link>
            ))}
            {
                i18n.language === 'en'
                    ? <Box onClick={() => i18n.changeLanguage('ua')} className={styles.drawerLang}>Ua</Box>
                    : <Box onClick={() => i18n.changeLanguage('en')} className={styles.drawerLang}>En</Box>
            }
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box className={styles.navBar}>
            <AppBar component="nav">
                <Container maxWidth='xl'>
                    <Toolbar>
                        <Box className={styles.logo}>
                            <Link to='home' spy={true} smooth={true} duration={800}>
                                <img src={logo} alt='Dmytro Kotykhin logo' width='40px' />
                            </Link>
                        </Box>
                        <IconButton
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={styles.burger}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box className={styles.itemBox}>
                            {navItems.map((item) => (
                                <Box key={item.id}>
                                    <Link
                                        to={item.id} spy={true} smooth={true} offset={-64} duration={500}
                                        activeClass={styles.activeLink}
                                        className={styles.link}
                                    >
                                        {item.title}
                                    </Link>
                                </Box>
                            ))}
                            {
                                i18n.language === 'en'
                                    ? <Box onClick={() => i18n.changeLanguage('ua')} className={styles.lang}>Ua</Box>
                                    : <Box onClick={() => i18n.changeLanguage('en')} className={styles.lang}>En</Box>
                            }
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    anchor={'top'}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    className={styles.drawer}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

export default NavBar;