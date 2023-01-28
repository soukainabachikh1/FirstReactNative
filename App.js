import React, {useState} from 'react';
import { Button, FlatList, Settings, StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './Components/Header'
import TodoItem from './Components/TodoItem';

export default function App() {

  const [todos,setTodos] = useState([
    {text:'React Native', key:'1'},
    {text:'Asynchronous js', key:'2'},
    {text:'Mckinsey Forward', key:'3'},
    {text:'Mckinsey Forward', key:'4'},

  ])

  const pressHandler = (key) => {
    setTodos((prevTodos)=>(
      prevTodos.filter(todo=>todo.key!=key)
    ))
  }

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
          {/* to do form */}
          <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({item})=>(
                  <TodoItem item={item} pressHandler={pressHandler}/>
                )}
              />
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:40,
    paddingHorizontal:20,
    // justifyContent: 'center',
  },
  content:{
    padding:40,
  },
  list:{
    marginTop:20,
  }
});
