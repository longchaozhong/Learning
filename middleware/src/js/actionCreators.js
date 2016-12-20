/**
 * Created by longcz on 2016/12/19.
 */
import actions from './actions';
const request = (data)=> {
  return {
    type: actions.REQUEST,
    data
  }
};
const success = (data)=> {
  return {
    type: actions.SUCCESS,
    data
  }
};
const failure = (data)=> {
  return {
    type: actions.FAILURE,
    data
  }
};

export default {
  request,
  success,
  failure
}