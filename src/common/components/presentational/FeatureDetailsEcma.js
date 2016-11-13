import React from 'react';
import markup from './FeatureDetailsEcma.html';

export const FeatureDetailsEcma = () => (
    <div dangerouslySetInnerHTML = {{__html: markup}}/>
);