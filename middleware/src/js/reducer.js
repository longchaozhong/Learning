/**
 * Created by longcz on 2016/12/19.
 */
import actions from './actions';
const reducer = function (state = {}, action) {
  switch (action.type) {
    case actions.REQUEST:
      return {value: actions.REQUEST};
    case actions.SUCCESS:
      return {value: actions.SUCCESS};
    case actions.FAILURE:
      return {value: actions.FAILURE};
  }
};

export default reducer;