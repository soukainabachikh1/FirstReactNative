import React, {useState} from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './Components/Header'


export default function App() {

  const [todos,setTodos] = useState([
    {text:'React Native', key:'1'},
    {text:'Asynchronous js', key:'2'},
    {text:'Mckinsey Forward', key:'3'},

  ])

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header/>
      <View style={styles.content}>
          {/* to do form */}
          <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({item})=>(
                  <Text>{item.text}</Text>
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
