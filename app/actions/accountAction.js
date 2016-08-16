/**
 * Created by xiaobing on 2016/8/10.
 */
import constants from'../Constants';

const accountAction = {
    createAccount(account) {
        console.log('add account');
        return {type:constants.CREATE_ACCOUNT, account: account}
    }
}

export default accountAction;