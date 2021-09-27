import HomePage from "../modules/HomePage";
import NotFoundPage from "../modules/NotFound";
import ForbiddenPage from "../modules/ForbiddenPage";
import LoginPage from "../modules/Login";
import SignUp from "../modules/SignUp"
import ProfilePage from '../modules/ProfilePage';
import CartPage from '../modules/CartPage';
import { ItemInfoPage } from '../modules/ItemInfoPage';
import FeeContent from '../modules/FeesPage';
import ProfileInfoPage from '../modules/ProfileInfoPage';
import OrderPage from "../modules/OrderPage";
import Checkout from "../modules/Checkout";

const routes =  [
    {
        path: '/',
        component: HomePage,
        exact: true,
        id: 0,
    },
    {
        path: '/login',
        component: LoginPage,
        id: 1,
    },
    {
        path: '/signup',
        component: SignUp,
        id: 2,
    },
    {
        path: '/item/:id',
        component: ItemInfoPage,
        id: 3,
    },
    {
        path: '/user/:id',
        component: ProfilePage,
        id: 4,
    },
    {
        path: '/profile/:id',
        component: ProfileInfoPage,
        id: 5,
    },
    {
        path: '/cart/:id',
        component: CartPage,
        id: 6,
    },
    {
        path: '/orders/:id',
        component: OrderPage,
        id: 7,
    },
    {
        path: '/checkout/:id/:orderId',
        component: Checkout,
        id: 8,
    },
    {
        path: '/fees/:type/:subType',
        component: FeeContent,
        id: 9,
    },
    {
        path: '/fees/:type',
        component: FeeContent,
        id: 10,
    },
    {
        path: '/fees/',
        component: FeeContent,
        id: 11,
    },
    {
        path: '/forbidden',
        component: ForbiddenPage,
        id: 12,
    },
    {
        path: '/*',
        component: NotFoundPage,
        id: 13,
    },


];

export default routes;
