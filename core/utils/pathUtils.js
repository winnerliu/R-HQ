import {createPath as createLocationPath} from 'history';

export function createPathname(module, app, pathname) {
    return `/app/${module}/${app}${pathname || ''}`;
}

export function createPath(location) {
    return createLocationPath(typeof location === 'string' ? {pathname: location} : location);
}

