/**
 * Created by xiaobing on 2016/8/10.
 */
import constants from'../Constants';

const routeAction = {
    changePath(path) {
        return {type:constants.CHANGE_ROUTE,path:path}
    }
}

export default routeAction;