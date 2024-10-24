import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator } from 'react-native';

const GenderScreen = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchGender = () => {
    setLoading(true);
    fetch(`https://api.genderize.io/?name=${name}`)
      .then(response => response.json())
      .then(data => {
        setGender(data.gender);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <View style={[styles.container, gender === 'male' ? styles.male : gender === 'female' ? styles.female : null]}>
      <Text style={styles.title}>Enter a name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <Button title="Predict Gender" onPress={fetchGender} />

      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      
      {gender && !loading && (
        <Text style={styles.result}>
          The predicted gender for {name} is {gender}.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: '80%',
    marginBottom: 20,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
  male: {
    backgroundColor: 'lightblue',
  },
  female: {
    backgroundColor: 'lightpink',
  },
});

export default GenderScreen;
