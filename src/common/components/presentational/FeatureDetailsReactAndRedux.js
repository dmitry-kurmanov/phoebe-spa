import React from 'react';
import markup from './FeatureDetailsReactAndRedux.html';

export const FeatureDetailsReactAndRedux = () => (
    <div dangerouslySetInnerHTML = {{__html: markup}}/>
);