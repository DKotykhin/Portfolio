import * as React from 'react';

import { Link } from 'react-scroll';

import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// import { Link as MUILink } from '@mui/material';
// import { ReactComponent as Icon } from "images/logo-32x32.svg";
import logo from 'images/logo/logo-32x32.png';

import styles from './navBar.module.scss';

interface Props {
    window?: () => Window;
}

const navItems = [
    { title: "Home", id: "home" },
    { title: "About Me", id: "aboutMe" },
    { title: "Skills", id: "skills" },
    { title: "Projects", id: "projects" },
    { title: "Contacts", id: "contacts" },
];

const NavBar = (props: Props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} className={styles.drawer}>
            <Box className={styles.drawerLogo}>
                <img src={logo} alt='logo' />
            </Box>
            <Divider className={styles.divider}/>
            {navItems.map((item) => (
                <Box key={item.id} className={styles.drawerItems}>
                    <Link
                        to={item.id} spy={true} smooth={true} offset={-56} duration={500}
                        onClick={handleDrawerToggle}
                        className={styles.drawerLink}
                    >
                        {item.title}
                    </Link>
                </Box>
            ))}
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
                                <img src={logo} alt='logo' />
                            </Link>
                        </Box>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ display: { sm: 'none' }, marginLeft: 'auto' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, marginLeft: 'auto' }}>
                            {navItems.map((item) => (
                                <Box key={item.id} sx={{ color: '#fff', px: 2 }}>
                                    <Link
                                        to={item.id} spy={true} smooth={true} offset={-64} duration={500}
                                        activeClass={styles.activeLink}
                                        className={styles.link}
                                    >
                                        {item.title}
                                    </Link>
                                </Box>
                            ))}
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
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%' },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

export default NavBar;