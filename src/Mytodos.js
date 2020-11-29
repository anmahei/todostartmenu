import React, { useState }  from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns'; 
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});

 
function Mytodos() {

  const [date, setDate] = useState(new Date());
  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);
  
 
  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
   
  }
 
  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  
}
 
  return (
    <div className="App">
         
  
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker format={"dd-MM-yyyy"} value={date} onChange={date => setDate(date)}/>
      
    </MuiPickersUtilsProvider>
    <TextField label= "Description"type="text" name="desc" value={todo.desc} onChange={inputChanged}/>
      <Button size= "small" variant="contained" color="secondary" onClick={addTodo}>Add</Button>

      <table><tbody>
      {
      todos.map((todo, index) => 
        <tr key={index}>
          <td>{new Date(date).toLocaleDateString()}</td>
          
          <td>{todo.desc}</td>
        
    
        </tr>)
      }
      </tbody></table>
    </div>
  );
}
 
export default Mytodos;
