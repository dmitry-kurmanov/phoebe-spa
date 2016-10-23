import { LayoutContainer } from '../containers/LayoutContainer';
import { PageFeaturesContainer } from '../containers/PageFeaturesContainer';
import { PageLicenseContainer } from '../containers/PageLicenseContainer';
import { PageDetailsContainer } from '../containers/PageDetailsContainer';

export const features = '/features';
export const license = 'license';
export const details = 'details';

export const Routes = [
    { pattern: '/',
        component: LayoutContainer,
        routes: [
            {
                pattern: '/features',
                component: PageFeaturesContainer
            },
            {
                pattern: '/license',
                component: PageLicenseContainer
            },
            {
                pattern: '/details',
                component: PageDetailsContainer
            }
        ]
    }
];