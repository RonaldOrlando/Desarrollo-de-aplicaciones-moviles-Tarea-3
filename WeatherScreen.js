// WeatherScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherScreen = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const apiKey = '41127132817e44d3a4f182430242410'; // Tu clave de API

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Santo%20Domingo`);
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, []);

    if (loading) {
        return <Text>Cargando...</Text>;
    }

    if (!weatherData) {
        return <Text>No se pudo obtener la información del clima.</Text>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Clima en {weatherData.location.name}</Text>
            <Text>Temperatura: {weatherData.current.temp_c}°C</Text>
            <Text>Condición: {weatherData.current.condition.text}</Text>
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
        fontWeight: 'bold',
    },
});

export default WeatherScreen;
