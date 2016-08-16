/**
 * Created by xiaobing on 2016/8/10.
 */
import constants from '../Constants';
const initialState = {
    account:{userName:"amy", age:10}
};

const accountReducer = (state = initialState, action) => {
    //console.log(action); //Temporarily logging all actions
    switch (action.type) {
        case constants.CREATE_ACCOUNT:
            return {account: action.account};
        case constants.UPDATE_ACCOUNT_INFO:
            return update(state,{account:{$apply: userName => action.userName + '1111', $apply: age => action.age + 111}});
        default:
            return state;
    }
};
export default accountReducer;
