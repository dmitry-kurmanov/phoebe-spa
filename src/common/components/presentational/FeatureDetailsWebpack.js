import React from 'react';
import markup from './FeatureDetailsWebpack.html';

export const FeatureDetailsWebpack = () => (
    <div dangerouslySetInnerHTML = {{__html: markup}}/>
);