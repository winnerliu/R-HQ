import {createPathname} from "../../../core/utils/pathUtils";
const appName = 'webapp';

const project = {
    name: 'hq'
};

const paths = {
    hProductDetail: createPathname(project.name, appName, '/productdetail'),
    hSearch: createPathname(project.name, appName, '/search'),
    hSearchResult: createPathname(project.name, appName, '/searchresult'),
    hHome: createPathname(project.name, appName, '/home'),
    hCategory: createPathname(project.name, appName, '/category'),
    hAbout: createPathname(project.name, appName, '/about'),


};

console.log(paths.hProductDetail);
console.log(paths.hSearch);
console.log(paths.hSearchResult);
console.log(paths.hCategory);
console.log(paths.hAbout);
export default paths;