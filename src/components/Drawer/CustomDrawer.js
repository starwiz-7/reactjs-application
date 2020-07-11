import React, { useState } from 'react';
import clsx from 'clsx';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import logout from './images/logout-2@2x.png';
import folder from './images/folder@2x.png';
import press from './images/press@2x.png';
import organisation from './images/organisation@2x.png';
import taxation from './images/taxation@2x.png';
import Logo from './images/Logo.png'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import styles from './CustomDrawer.module.css'

const drawerWidth = 273;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        backgroundColor: 'white',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function MiniDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [samadhanSubMenu, setSamadhanSubmenu] = useState(false);
    const [masterSubMenu, setMasterSubmenu] = useState(false);
    const [surveySubMenu, setSurveySubmenu] = useState(false);
    const [propertiesSubMenu, setPropertiesSubmenu] = useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
        setSamadhanSubmenu(false);
        setMasterSubmenu(false);
        setPropertiesSubmenu(false);
        setSurveySubmenu(false)
    };
    const samadhanSubMenuListItems = samadhanSubMenu ? <List>
        <ListItem button key='SamadhanSubMenuItem1'>
            <div className={styles.subMenuItems}><ListItemText primary='Organisation Samadhan ID' /></div>
        </ListItem>
        <ListItem button key='SamadhanSubMenuItem1'>
            <div className={styles.subMenuItems}><ListItemText primary='Blank Samadhan ID' /></div>
        </ListItem>
    </List> : null
    const masterSubMenuListItems = masterSubMenu ? <List>
        <ListItem button key='MasterSubMenuItem1'>
            <div className={styles.subMenuItems}><ListItemText primary='Module' /></div>
        </ListItem>
        <ListItem button key='MasterSubMenuItem2'>
            <div className={styles.subMenuItems}><ListItemText primary='Country' /></div>
        </ListItem>
        <ListItem button key='MasterSubMenuItem3'>
            <div className={styles.subMenuItems}><ListItemText primary='State' /></div>
        </ListItem>
        <ListItem button key='MasterSubMenuItem4'>
            <div className={styles.subMenuItems}><ListItemText primary='City' /></div>
        </ListItem>
        <ListItem button key='MasterSubMenuItem5'>
            <div className={styles.subMenuItems}><ListItemText primary='Language' /></div>
        </ListItem>
    </List> : null
    const surveySubMenuListItems = surveySubMenu ? <List>
        <ListItem button key='Organisation'>
            <div className={styles.subMenuItems}><ListItemText primary='Survey Builder' /></div>
        </ListItem>
        <ListItem button key='Organisation'>
            <div className={styles.subMenuItems}><ListItemText primary='Survey Scheduling' /></div>
        </ListItem>
        <ListItem button key='Organisation'>
            <div className={styles.subMenuItems}><ListItemText primary='Survey Sharing' /></div>
        </ListItem>
        <ListItem button key='Organisation'>
            <div className={styles.subMenuItems}><ListItemText primary='Survey Data Recording and Analysis' /></div>
        </ListItem>
    </List> : null
    const propertiesSubMenuListItems = propertiesSubMenu ? <List>
        <ListItem button key='Organisation'>
            <div className={styles.subMenuItems}><ListItemText primary='Property List' /></div>
        </ListItem>
        <ListItem button key='Organisation'>
            <div className={styles.subMenuItems}><ListItemText primary='Category List' /></div>
        </ListItem>
        <ListItem button key='Organisation'>
            <div className={styles.subMenuItems}><ListItemText primary='Sub Category List' /></div>
        </ListItem>
    </List> : null

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                })}
            >
                <Toolbar style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <img src={Logo} alt='logo' style={{ marginRight: '10%' }} />
                        <IconButton
                            color="black"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            edge="start"
                            className={clsx(classes.menuButton)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                </div>
                <List>
                    <ListItem button key='Dashboard'>
                        <ListItemIcon><HomeOutlinedIcon /></ListItemIcon>
                        <ListItemText primary='Dashboard' />
                    </ListItem>
                    <ListItem button key='Samadhan ID'>
                        <ListItemIcon><img src={press} /></ListItemIcon>
                        <ListItemText primary='Samadhan ID' />
                        <IconButton onClick={() => { setSamadhanSubmenu(!samadhanSubMenu) }}>
                            {samadhanSubMenu ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </ListItem>
                    {samadhanSubMenuListItems}
                    <ListItem button key='Master'>
                        <ListItemIcon><EqualizerOutlinedIcon /></ListItemIcon>
                        <ListItemText primary='Master' />
                        <IconButton onClick={() => { setMasterSubmenu(!masterSubMenu) }}>
                            {masterSubMenu ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </ListItem>
                    {masterSubMenuListItems}
                    <ListItem button key='User List'>
                        <ListItemIcon><img src={folder} /></ListItemIcon>
                        <ListItemText primary='User List' />
                    </ListItem>
                    <ListItem button key='Organisation'>
                        <ListItemIcon><img src={organisation} /></ListItemIcon>
                        <ListItemText primary='Organisation' />
                    </ListItem>
                    <ListItem button key='Survey'>
                        <ListItemIcon><EqualizerOutlinedIcon /></ListItemIcon>
                        <ListItemText primary='Survey' />
                        <IconButton onClick={() => { setSurveySubmenu(!surveySubMenu) }}>
                            {surveySubMenu ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </ListItem>
                    {surveySubMenuListItems}
                    <ListItem button key='Operations'>
                        <ListItemIcon><img src={folder} /></ListItemIcon>
                        <ListItemText primary='Operations' />
                    </ListItem>
                    <ListItem button key='Properties'>
                        <ListItemIcon><img src={press} /></ListItemIcon>
                        <ListItemText primary='Properties' />
                        <IconButton onClick={() => { setPropertiesSubmenu(!propertiesSubMenu) }}>
                            {propertiesSubMenu ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </ListItem>
                    {propertiesSubMenuListItems}
                    <ListItem button key='Visualise'>
                        <ListItemIcon><img src={taxation} /></ListItemIcon>
                        <ListItemText primary='Visualise' />
                    </ListItem>
                    <ListItem button key='Taxation and Payments'>
                        <ListItemIcon><img src={taxation} /></ListItemIcon>
                        <ListItemText primary='Taxation and Payments' />
                    </ListItem>
                    <ListItem button key='Profile'>
                        <ListItemIcon><PersonOutlinedIcon /></ListItemIcon>
                        <ListItemText primary='Profile' />
                    </ListItem>
                    <ListItem button key='Logout'>
                        <ListItemIcon><img src={logout} style={{ paddingLeft: '5%' }} /></ListItemIcon>
                        <ListItemText primary='Logout' />
                    </ListItem>
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
            </main>
        </div >
    );
}
