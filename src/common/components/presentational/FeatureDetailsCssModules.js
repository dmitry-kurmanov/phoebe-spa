import React from 'react';
import markup from './FeatureDetailsCssModules.html';

export const FeatureDetailsCssModules = () => (
    <div dangerouslySetInnerHTML = {{__html: markup}}/>
);