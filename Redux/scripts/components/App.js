import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import HistoryButton from '../containers/HistoryButton';

const App = ({params}) => (
  <div>
    <AddTodo />
    <VisibleTodoList filter={params.filter || 'SHOW_ALL'}/>
    <Footer />
    <HistoryButton/>
  </div>
);

export default App;
