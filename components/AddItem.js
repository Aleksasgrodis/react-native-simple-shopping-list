import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

function AddItem({title, addItem}) {
  const [itemName, setItemName] = useState('');
  const onChange = (value) => {
    setItemName(value);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add item to list..."
        value={itemName}
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.btn} onPress={() => addItem(itemName)}>
        <Text style={styles.buttonText}>
          <Icon name="plus" size={20} />
          Add
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    padding: 9,
    backgroundColor: '#c2bad8',
    margin: 5,
  },
  buttonText: {
    color: 'darkslateblue',
    fontSize: 22,
    textAlign: 'center',
  },
});

export default AddItem;
