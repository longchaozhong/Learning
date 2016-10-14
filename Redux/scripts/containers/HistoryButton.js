/**
 * Created by longcz on 2016/10/11.
 */
import React from "react";
import {connect} from 'react-redux';
import {undo, redo} from '../actions';
import Button from '../components/Button';

let HistoryButton = ({dispatch})=> {
  return (
    <div>
      <Button onClick={()=> {
        dispatch(undo())
      }} text="UNDO"/>
      <Button onClick={()=> {
        dispatch(redo())
      }} text="REDO"/>
    </div>
  );
};

HistoryButton = connect()(HistoryButton);

export default HistoryButton;
