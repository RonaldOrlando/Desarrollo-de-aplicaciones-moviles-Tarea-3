import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, ActivityIndicator } from 'react-native';

const AgeScreen = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchAge = () => {
    setLoading(true);
    fetch(`https://api.agify.io/?name=${name}`)
      .then(response => response.json())
      .then(data => {
        setAge(data.age);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  };

  const getAgeCategory = (age) => {
    if (age <= 25) return 'young';
    if (age > 25 && age < 60) return 'adult';
    return 'elderly';
  };

  const renderImage = (category) => {
    switch (category) {
      case 'young':
        return <Image source={require('./assets/young.png')} style={styles.image} />;
      case 'adult':
        return <Image source={require('./assets/adult.png')} style={styles.image} />;
      case 'elderly':
        return <Image source={require('./assets/elderly.png')} style={styles.image} />;
      default:
        return null;
    }
  };

  const ageCategory = age !== null ? getAgeCategory(age) : null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter a name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <Button title="Predict Age" onPress={fetchAge} />

      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      
      {age !== null && !loading && (
        <View style={styles.resultContainer}>
          <Text style={styles.result}>The predicted age for {name} is {age} years old.</Text>
          <Text style={styles.result}>
            {ageCategory === 'young' ? 'You are young!' : ageCategory === 'adult' ? 'You are an adult!' : 'You are elderly!'}
          </Text>
          {renderImage(ageCategory)}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  result: {
    fontSize: 18,
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

export default AgeScreen;
