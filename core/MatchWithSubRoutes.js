import React from 'react';
import { Match } from 'react-router';

export const MatchWithSubRoutes = ({routes}) => {
    const children = routes.map(
        ({pattern, component : Component, routes}, index) => routes ? (
            <Match
                key = {index}
                pattern = {pattern}
                render = {(...props) => (
                    <Component {...props}>
                        <MatchWithSubRoutes routes = {routes}/>
                    </Component>
                )}
            />
        ) : (
            <Match
                key = {index}
                pattern = {pattern}
                component = {Component}
            />
        )
    );
    if(children.length === 1) {
        return children[0];
    } else {
        return (
            <span>
                {children}
            </span>
        );
    }
};