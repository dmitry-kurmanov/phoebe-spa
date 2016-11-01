import { LayoutContainer } from '../containers/LayoutContainer';
import { PageFeatures } from '../components/PageFeatures';
import { PageLicenseContainer } from '../containers/PageLicenseContainer';
import { PageDetails } from '../components/PageDetails';

export const to = {
    features : '/features',
    license : '/license',
    details : '/details'
};

export const Routes = [
    {
        pattern: '/',
        component: LayoutContainer,
        routes: [
            {
                pattern: '/features',
                component: PageFeatures
            },
            {
                pattern: '/license',
                component: PageLicenseContainer
            },
            {
                pattern: '/details',
                component: PageDetails
            }
        ]
    }
];