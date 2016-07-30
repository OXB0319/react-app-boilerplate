/**
 * Created by xiaobing on 2016/7/28.
 */
import 'whatwg-fetch';

var DataProvider = {
  GetCurrentTrades(){
      return fetch('../data/currentTrades.json')
            .then((response) => response.json());
    },
    GetPastTrades(){
        return fetch('../data/pastTrades1.json')
            .then((response) => response.json());
    }
}

export default DataProvider;