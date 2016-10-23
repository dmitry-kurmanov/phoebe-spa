import { en } from './en';
import { ru } from './ru';

export const messages = {
    en,
    ru
};

for(let localeId in messages) {
    for(let messageId in messages[localeId]) {
        for(let localeId in messages) {
            if(!messages[localeId][messageId]) {
                throw new Error(`Not found {messageId: ${messageId}, locale: ${localeId}}`);
            }
        }
    }
}