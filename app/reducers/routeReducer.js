/**
 * Created by xiaobing on 2016/8/10.
 */
import constants from '../Constants';
const initialState = {
    path:'account'
};

const routeReducer = (state = initialState, action) => {
    //console.log(action.type); //Temporarily logging all actions
    switch (action.type) {
        case constants.CHANGE_ROUTE:
            return { path: action.path };
        default:
            return state;
    }
};
export default routeReducer;
