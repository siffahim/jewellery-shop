import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import {
    Link, Route, Switch, useRouteMatch
} from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import CreateProduct from '../CreateProduct/CreateProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAlOrders from '../ManageAlOrders/ManageAlOrders';
import ManageProduct from '../ManageProduct/ManageProduct';
import MyOrder from '../MyOrder/MyOrder';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { path, url } = useRouteMatch();
    const { user, logOut } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Divider />
            <List>
                <ListItem button ><Link to='/home'>Home</Link></ListItem>
                <ListItem button ><Link exact to={`${url}`}>Make Admin</Link></ListItem>
                <ListItem button ><Link exact to={`${url}/manageAlOrders`}>Manage Orders</Link></ListItem>
                <ListItem button ><Link exact to={`${url}/createProduct`}>Create Product</Link></ListItem>
                <ListItem button ><Link exact to={`${url}/manageProduct`}>Manage Product</Link></ListItem>
                <ListItem button ><Link to={`${url}/myOrders`}>My Orders</Link></ListItem>
                <ListItem button ><Link to={`${url}/review`}>Review</Link></ListItem>
                <ListItem button ><Link to={`${url}/pay`}>Pay</Link></ListItem>
                <ListItem button ><Link to={`${url}/logout`} onClick={logOut}>Logout</Link></ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar sx={{ backgroundColor: '#cd2027' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashborad
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <MakeAdmin />
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrder />
                    </Route>
                    <Route path={`${path}/manageAlOrders`}>
                        <ManageAlOrders />
                    </Route>
                    <Route path={`${path}/createProduct`}>
                        <CreateProduct />
                    </Route>
                    <Route path={`${path}/manageProduct`}>
                        <ManageProduct />
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review />
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay />
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
