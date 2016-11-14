import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Features } from '../../constants/Features';
import { Group } from '../container/Group';
import { Messages } from '../../constants/Messages';
import Helmet from 'react-helmet';
import styles from './PageDetails.css';

function renderDetails({id, message, details : Details}, index) {
    return (
        <Group
            key = {index}
            id = {id}
            caption = {
                <FormattedMessage id = {message}/>
            }
        >
            <Details/>
        </Group>
    );
}

export const PageDetails = injectIntl(({ intl }) => (
    <div className = {styles['root']}>
        <Helmet title = {intl.formatMessage({id:Messages.PageDetails})}/>
        {Features.asArray.map(renderDetails)}
    </div>
));
