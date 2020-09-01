import React, {useState} from 'react';
import {Buffer} from 'buffer';
global.Buffer = Buffer; // very important
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import uuid from 'react-native-uuid';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid.v4(), name: 'Raisins'},
    {id: uuid.v4(), name: 'Broccoli'},
    {id: uuid.v4(), name: 'Red Bull'},
    {id: uuid.v4(), name: 'Sour Straws'},
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const addItem = (name) => {
    if (!name) {
      Alert.alert('Error', 'Please enter a name.', {text: 'OK'});
    } else {
      setItems((prevItems) => {
        return [{id: uuid.v4(), name}, ...prevItems];
      });
    }
  };
  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
