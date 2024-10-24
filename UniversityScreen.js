import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Linking, StyleSheet, ActivityIndicator } from 'react-native';

const UniversityScreen = () => {
  const [country, setCountry] = useState('');
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUniversities = () => {
    setLoading(true);
    fetch(`http://universities.hipolabs.com/search?country=${country}`)
      .then(response => response.json())
      .then(data => {
        setUniversities(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  };

  const renderUniversity = ({ item }) => (
    <View style={styles.universityContainer}>
      <Text style={styles.universityName}>{item.name}</Text>
      <Text style={styles.universityDomain}>{item.domains[0]}</Text>
      <Text
        style={styles.universityLink}
        onPress={() => Linking.openURL(item.web_pages[0])}
      >
        {item.web_pages[0]}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter a country name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Country"
        value={country}
        onChangeText={setCountry}
      />
      <Button title="Fetch Universities" onPress={fetchUniversities} />

      {loading && <ActivityIndicator size="large" color="#0000ff" />}

      <FlatList
        data={universities}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderUniversity}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
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
    width: '100%',
    marginBottom: 20,
  },
  universityContainer: {
    marginVertical: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  universityName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  universityDomain: {
    fontSize: 16,
    color: '#555',
  },
  universityLink: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default UniversityScreen;
