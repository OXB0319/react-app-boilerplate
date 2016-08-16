/**
 * Created by xiaobing on 2016/8/10.
 */
import constants from'../Constants';

const routeAction = {
    changePath(path) {
        console.log('inter route action');
        return {type:constants.CHANGE_ROUTE,path:path}
    }
}

export default routeAction;