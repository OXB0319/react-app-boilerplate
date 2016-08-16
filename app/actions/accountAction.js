/**
 * Created by xiaobing on 2016/8/10.
 */
import constants from'../Constants';
import 'babel-polyfill';

let accountAction = {
    createAccount(account) {
        return (dispatch) =>{dispatch({type:constants.CREATE_ACCOUNT, account: account})};
    }
};

export default accountAction;