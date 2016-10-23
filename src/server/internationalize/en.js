import { Feature } from '../../common/components/Feature';
import { PageLicense } from '../../common/components/PageLicense';
import { Navigation } from '../../common/components/Navigation';
import { LocaleTrigger } from '../../common/components/LocaleTrigger';
import { Features } from '../../common/constants/Features';

export const en = {
    [Feature.messages[Features.ecma]] :
        `ES5, ES6, ES2016, ES.Next and JSX`,
    [Feature.messages[Features.reactAndRedux]] :
        `React and Redux`,
    [Feature.messages[Features.reactRouter]] :
        `React-Router v4 (NEW)`,
    [Feature.messages[Features.webpack]] :
        `Webpack for front-end and back-end`,
    [Feature.messages[Features.watch]] :
        `Automatically watches the sources for changes to recompile the javascript bundle`,
    [Feature.messages[Features.restart]] :
        `Automatically restart the server`,
    [Feature.messages[Features.cssModules]] :
        `PostCSS and CSS-modules`,
    [Feature.messages[Features.manyLoaders]] :
        `Support JSON, PNG, JPG, GIF and SVG`,
    [Feature.messages[Features.intl]] :
        `Internationalization / Localization (React-Intl)`,
    [Feature.messages[Features.fetchData]] :
        `Server-side fetch data`,
    [Feature.messages[Features.test]] :
        `Debugging Unit Tests (Mocha)`,
    [Feature.messages[Features.coverage]] :
        `Coverage (Istanbul)`,
    [Feature.messages[Features.linter]] :
        `JavaScript Linter (ESLint)`,
    [Feature.messages[Features.flow]] :
        `Static type checker for JavaScript (Flow)`,
    [Feature.messages[Features.mit]] :
        `MIT License`,
    [Navigation.messages.features] :
        `Features`,
    [Navigation.messages.license] :
        `License`,
    [Navigation.messages.details] :
        `Details`,
    [PageLicense.messages.captionMit] :
        `MIT License`,
    [PageLicense.messages.captionCat] :
        `Fetch Data Cat`,
    [LocaleTrigger.messages.en] :
        `EN`,
    [LocaleTrigger.messages.ru] :
        `RU`
};
