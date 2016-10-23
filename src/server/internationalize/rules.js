import { messages } from './messages';
import path from 'path';
import fs from 'fs';

export const rules = {};
for(let locale in messages) {
    rules[locale] = fs.readFileSync(path.resolve(`node_modules/react-intl/locale-data/${locale}.js`), 'utf8');
}