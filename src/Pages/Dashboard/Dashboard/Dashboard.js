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
import AdminRoute from '../../AdminRoute/AdminRoute';
import CreateProduct from '../CreateProduct/CreateProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAlOrders from '../ManageAlOrders/ManageAlOrders';
import ManageProduct from '../ManageProduct/ManageProduct';
import MyOrder from '../MyOrder/MyOrder';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import './Dashboard.css';

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { path, url } = useRouteMatch();
    const { user, logOut, admin } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Divider />
            <p className=' text-center bg-custom text-white p-3 fs-5'><i class="fas fa-user-alt"></i> {user.displayName}</p>
            <List className='nasted-container'>
                <ListItem button><Link to='/home' className='nested-menu'  ><i class="fas fa-home"></i> Home</Link></ListItem>
                <ListItem button ><Link className='nested-menu' exact to={`${url}`}><i class="fas fa-external-link-alt"></i> Review</Link></ListItem>
                {
                    admin && <Box>
                        <ListItem button ><Link className='nested-menu' to={`${url}/makeAdmin`}><i class="fas fa-users-cog"></i> Make Admin</Link></ListItem>
                        <ListItem button ><Link className='nested-menu' to={`${url}/manageAlOrders`}><i class="fas fa-tasks"></i> Manage All Orders</Link></ListItem>
                        <ListItem button ><Link className='nested-menu' to={`${url}/createProduct`}><i class="fas fa-plus"></i> Create Product</Link></ListItem>
                        <ListItem button ><Link className='nested-menu' to={`${url}/manageProduct`}><i class="fas fa-sort-amount-up-alt"></i> Manage Product</Link></ListItem>
                    </Box>
                }
                <ListItem button ><Link className='nested-menu' to={`${url}/myOrders`}><i class="fas fa-user-clock"></i> My Orders</Link></ListItem>
                <ListItem button ><Link className='nested-menu' to={`${url}/pay`}><i class="fas fa-shopping-bag"></i> Pay</Link></ListItem>
                <ListItem button ><Link className='nested-menu' to={`${url}/logout`} onClick={logOut}><i class="fas fa-sign-out-alt"></i> Logout</Link></ListItem>
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
                <Toolbar sx={{ background: 'goldenrod' }}>
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
                        <Review />
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrder />
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay />
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageAlOrders`}>
                        <ManageAlOrders />
                    </AdminRoute>
                    <AdminRoute path={`${path}/createProduct`}>
                        <CreateProduct />
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProduct`}>
                        <ManageProduct />
                    </AdminRoute>
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
