import { Feature } from '../../common/components/Feature';
import { PageLicense } from '../../common/components/PageLicense';
import { Navigation } from '../../common/components/Navigation';
import { LocaleTrigger } from '../../common/components/LocaleTrigger';
import { Features } from '../../common/constants/Features';

export const ru = {
    [Feature.messages[Features.ecma]] :
        `ES5, ES6, ES2016, ES.Next и JSX`,
    [Feature.messages[Features.reactAndRedux]] :
        `React и Redux`,
    [Feature.messages[Features.reactRouter]] :
        `React-Router v4 (НОВИНКА)`,
    [Feature.messages[Features.webpack]] :
        `Webpack для клиента и сервера`,
    [Feature.messages[Features.watch]] :
        `Автоматическое отслеживание изменений в коде и пересборка javascript bundle`,
    [Feature.messages[Features.restart]] :
        `Автоматический перезапуск сервера`,
    [Feature.messages[Features.cssModules]] :
        `PostCSS и CSS-модули`,
    [Feature.messages[Features.manyLoaders]] :
        `Поддержка JSON, PNG, JPG, GIF и SVG`,
    [Feature.messages[Features.intl]] :
        `Интернационализация / Локализация (React-Intl)`,
    [Feature.messages[Features.fetchData]] :
        `Загрузка данных на стороне сервера`,
    [Feature.messages[Features.test]] :
        `Отладка юнит-тестов (Mocha)`,
    [Feature.messages[Features.coverage]] :
        `Покрытие тестами (Istanbul)`,
    [Feature.messages[Features.linter]] :
        `Проверка качества кода (ESLint)`,
    [Feature.messages[Features.flow]] :
        `Статический анализ кода (Flow)`,
    [Feature.messages[Features.mit]] :
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
