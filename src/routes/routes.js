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
        path: '/WholesalesView',
        component: HomePage,
        exact: true,
        id: 0,
    },
    {
        path: '/WholesalesView/login',
        component: LoginPage,
        id: 1,
    },
    {
        path: '/WholesalesView/signup',
        component: SignUp,
        id: 2,
    },
    {
        path: '/WholesalesView/item/:id',
        component: ItemInfoPage,
        id: 3,
    },
    {
        path: '/WholesalesView/user/:id',
        component: ProfilePage,
        id: 4,
    },
    {
        path: '/WholesalesView/profile/:id',
        component: ProfileInfoPage,
        id: 5,
    },
    {
        path: '/WholesalesView/cart/:id',
        component: CartPage,
        id: 6,
    },
    {
        path: '/WholesalesView/orders/:id',
        component: OrderPage,
        id: 7,
    },
    {
        path: '/WholesalesView/checkout/:id/:orderId',
        component: Checkout,
        id: 8,
    },
    {
        path: '/WholesalesView/fees/:type/:subType',
        component: FeeContent,
        id: 9,
    },
    {
        path: '/WholesalesView/fees/:type',
        component: FeeContent,
        id: 10,
    },
    {
        path: '/WholesalesView/fees/',
        component: FeeContent,
        id: 11,
    },
    {
        path: '/WholesalesView/forbidden',
        component: ForbiddenPage,
        id: 12,
    },
    {
        path: '/WholesalesView/*',
        component: NotFoundPage,
        id: 13,
    },
    
    
];

export default routes;
