import { Messages } from './Messages';
import { FeatureDetailsEcma } from '../components/presentational/FeatureDetailsEcma';
import { FeatureDetailsReactAndRedux } from '../components/presentational/FeatureDetailsReactAndRedux';
import { FeatureDetailsReactRouter } from '../components/presentational/FeatureDetailsReactRouter';
import { FeatureDetailsWebpack } from '../components/presentational/FeatureDetailsWebpack';
import { FeatureDetailsWatch } from '../components/presentational/FeatureDetailsWatch';
import { FeatureDetailsRestart } from '../components/presentational/FeatureDetailsRestart';
import { FeatureDetailsCssModules } from '../components/presentational/FeatureDetailsCssModules';
import { FeatureDetailsManyLoaders } from '../components/presentational/FeatureDetailsManyLoaders';
import { FeatureDetailsIntl } from '../components/presentational/FeatureDetailsIntl';
import { FeatureDetailsFetchData } from '../components/presentational/FeatureDetailsFetchData';
import { FeatureDetailsTest } from '../components/presentational/FeatureDetailsTest';
import { FeatureDetailsCoverage } from '../components/presentational/FeatureDetailsCoverage';
import { FeatureDetailsLinter } from '../components/presentational/FeatureDetailsLinter';
import { FeatureDetailsFlow } from '../components/presentational/FeatureDetailsFlow';
import { FeatureDetailsMit } from '../components/presentational/FeatureDetailsMit';

export const Features = {
    ecma          : {message : Messages.FeatureEcma,          icon : 'fa-pencil-square-o', id : 'ecma',            details : FeatureDetailsEcma},
    reactAndRedux : {message : Messages.FeatureReactAndRedux, icon : 'fa-cogs',            id : 'react-and-redux', details : FeatureDetailsReactAndRedux},
    reactRouter   : {message : Messages.FeatureReactRouter,   icon : 'fa-sitemap',         id : 'react-router',    details : FeatureDetailsReactRouter},
    webpack       : {message : Messages.FeatureWebpack,       icon : 'fa-cubes',           id : 'webpack',         details : FeatureDetailsWebpack},
    watch         : {message : Messages.FeatureWatch,         icon : 'fa-eye',             id : 'watch',           details : FeatureDetailsWatch},
    restart       : {message : Messages.FeatureRestart,       icon : 'fa-refresh',         id : 'restart',         details : FeatureDetailsRestart},
    cssModules    : {message : Messages.FeatureCssModules,    icon : 'fa-magic',           id : 'css-modules',     details : FeatureDetailsCssModules},
    manyLoaders   : {message : Messages.FeatureManyLoaders,   icon : 'fa-file-text-o',     id : 'many-loaders',    details : FeatureDetailsManyLoaders},
    intl          : {message : Messages.FeatureIntl,          icon : 'fa-language',        id : 'intl',            details : FeatureDetailsIntl},
    fetchData     : {message : Messages.FeatureFetchData,     icon : 'fa-cloud-download',  id : 'fetch-data',      details : FeatureDetailsFetchData},
    test          : {message : Messages.FeatureTest,          icon : 'fa-check-square-o',  id : 'test',            details : FeatureDetailsTest},
    coverage      : {message : Messages.FeatureCoverage,      icon : 'fa-list-alt',        id : 'coverage',        details : FeatureDetailsCoverage},
    linter        : {message : Messages.FeatureLinter,        icon : 'fa-leaf',            id : 'linter',          details : FeatureDetailsLinter},
    flow          : {message : Messages.FeatureFlow,          icon : 'fa-code',            id : 'flow',            details : FeatureDetailsFlow},
    mit           : {message : Messages.FeatureMit,           icon : 'fa-users',           id : 'mit',             details : FeatureDetailsMit}
};

Features.asArray = Object.values(Features);