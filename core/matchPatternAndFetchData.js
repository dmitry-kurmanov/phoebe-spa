import matchPattern from 'react-router/matchPattern';

function getAllRoutesAsArray(routes) {
    let arr = [];
    for(let i = routes.length; i--;) {
        const route = routes[i];
        arr.push(route);
        if(route.routes) {
            arr = [...arr, getAllRoutesAsArray(route.routes)];
        }
    }
    return arr;
}

export function matchPatternAndFetchData(url, routes) {
    console.log(url, getAllRoutesAsArray(routes));
}