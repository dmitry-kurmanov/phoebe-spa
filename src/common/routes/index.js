import { Layout } from '../components/container/Layout';
import { PageFeatures } from '../components/presentational/PageFeatures';
import { PageLicense } from '../components/container/PageLicense';
import { PageDetails } from '../components/presentational/PageDetails';

function getRoutesAsArray(routes) {
    let arr = [];
    for(let i = routes.length; i--;) {
        const route = routes[i];
        arr.push(route);
        if(route.routes) {
            arr = [...arr, getRoutesAsArray(route.routes)];
        }
    }
    return arr;
}

const userRoutes = [
    {
        pattern: '/',
        component: Layout,
        routes: [
            {
                pattern: '/features',
                component: PageFeatures
            },
            {
                pattern: '/license',
                component: PageLicense
            },
            {
                pattern: '/details',
                component: PageDetails
            },
            {
                pattern: '*',
                redirectTo : '/features'
            }
        ]
    }
];
userRoutes.asArray = getRoutesAsArray(userRoutes);

// const anonymousRoutes = [];
// anonymousRoutes.asArray = getRoutesAsArray(anonymousRoutes);

export function routes(store, cookies) {
    //if(/*...*/) return anonymousRoutes else
    return userRoutes;
}

routes.features = '/features';
routes.license = '/license';
routes.details = '/details';
