import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import GenderScreen from './GenderScreen';
import AgeScreen from './AgeScreen';
import UniversityScreen from './UniversityScreen';
import WeatherScreen from './WeatherScreen'; // Importa la vista de clima
import WordPressNewsScreen from './WordPressNewsScreen';
import AboutScreen from './AboutScreen';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/toolbox.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Caja De Herramientas</Text>
      <Button
        title="Go to Gender Predictor"
        onPress={() => navigation.navigate('Gender')}
      />
      <Button
        title="Go to Age Predictor"
        onPress={() => navigation.navigate('Age')}
      />
      <Button
        title="Go to University Finder"
        onPress={() => navigation.navigate('University')}
      />
      <Button
        title="Go to Weather"
        onPress={() => navigation.navigate('Weather')}
      />
      <Button
        title="WordPress"
        onPress={() => navigation.navigate('WordPress News')}
      />
      <Button
        title="Aceca de"
        onPress={() => navigation.navigate('Acerca de')}
      />
    
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Gender" component={GenderScreen} />
        <Stack.Screen name="Age" component={AgeScreen} />
        <Stack.Screen name="University" component={UniversityScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
        <Stack.Screen name="WordPress News" component={WordPressNewsScreen} />
        <Stack.Screen name="Acerca de" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});
