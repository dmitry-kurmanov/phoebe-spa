import { PageLicense } from '../../common/components/container/PageLicense';
import { Navigation } from '../../common/components/presentational/Navigation';
import { LocaleTrigger } from '../../common/components/presentational/LocaleTrigger';
import { Messages } from '../../common/constants/Messages';

export const ru = {
    [Messages.FeatureEcma] :
        `ES5, ES6, ES2016, ES.Next и JSX`,
    [Messages.FeatureReactAndRedux] :
        `React и Redux`,
    [Messages.FeatureReactRouter] :
        `React-Router v4 (НОВИНКА)`,
    [Messages.FeatureWebpack] :
        `Webpack для клиента и сервера`,
    [Messages.FeatureWatch] :
        `Автоматическое отслеживание изменений в коде и пересборка javascript bundle`,
    [Messages.FeatureRestart] :
        `Автоматический перезапуск сервера`,
    [Messages.FeatureCssModules] :
        `PostCSS и CSS-модули`,
    [Messages.FeatureManyLoaders] :
        `Поддержка JSON, PNG, JPG, GIF и SVG`,
    [Messages.FeatureIntl] :
        `Интернационализация / Локализация (React-Intl)`,
    [Messages.FeatureFetchData] :
        `Загрузка данных на стороне сервера`,
    [Messages.FeatureTest] :
        `Отладка юнит-тестов (Mocha)`,
    [Messages.FeatureCoverage] :
        `Покрытие тестами (Istanbul)`,
    [Messages.FeatureLinter] :
        `Проверка качества кода (ESLint)`,
    [Messages.FeatureFlow] :
        `Статический анализ кода (Flow)`,
    [Messages.FeatureMit] :
        `Лицензия MIT`,
    [Navigation.messages.features] :
        `Features`,
    [Navigation.messages.license] :
        `License`,
    [Navigation.messages.details] :
        `Details`,
    [PageLicense.messages.captionMit] :
        `Лицензия MIT`,
    [PageLicense.messages.captionCat] :
        `Динамически загруженный кот`,
    [LocaleTrigger.messages.en] :
        `EN`,
    [LocaleTrigger.messages.ru] :
        `RU`
};
