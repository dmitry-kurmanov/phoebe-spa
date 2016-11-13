import React from 'react';
import Match from 'react-router/Match';
import Miss from 'react-router/Miss';
import Redirect from 'react-router/Redirect';

export const MatchWithSubRoutes = ({routes}) => {
    const children = routes.map(
        ({pattern, component : Component, routes, redirectTo}, index) => (routes) ? (
            (redirectTo) ? (
                <Match
                    key = {index}
                    pattern = {pattern}
                    render={() => (
                        <Redirect to = {redirectTo}/>
                    )}
                />
            ) : (
                <Match
                    key = {index}
                    pattern = {pattern}
                    render = {(...props) => (
                        <Component {...props}>
                            <MatchWithSubRoutes routes = {routes}/>
                        </Component>
                    )}
                />
            )
        ) : (pattern === '*') ? (
            (redirectTo) ? (
                <Miss
                    key = {index}
                    render={() => (
                        <Redirect to = {redirectTo}/>
                    )}
                />
            ) : (
                <Miss
                    key = {index}
                    component = {Component}
                />
            )
        ) : (
            (redirectTo) ? (
                <Match
                    key = {index}
                    pattern = {pattern}
                    render={() => (
                        <Redirect to = {redirectTo}/>
                    )}
                />
            ) : (
                <Match
                    key = {index}
                    pattern = {pattern}
                    component = {Component}
                />
            )
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