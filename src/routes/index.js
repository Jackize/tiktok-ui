import routesConfig from '~/config/routes';
//Layouts
import { HeaderOnly } from '~/component/Layout';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//public routes
const publicRoutes = [
    { path: routesConfig.root, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];

//private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
