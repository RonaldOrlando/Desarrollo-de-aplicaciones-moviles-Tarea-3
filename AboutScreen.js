// AboutScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';

const AboutScreen = () => {
    const handleEmailPress = () => {
        Linking.openURL('ronaldorlando.03@gmail.com'); // Cambia a tu dirección de correo electrónico
    };

    const handleLinkedInPress = () => {
        Linking.openURL('https://www.linkedin.com/in/ronald-herrera-ulloa-197431250/'); // Cambia a tu perfil de LinkedIn
    };

    return (
        <View style={styles.container}>
            <Image 
                source={require('./assets/ronald.png')} // Cambia a la ruta de tu foto
                style={styles.photo}
            />
            <Text style={styles.title}>Ronald Orlando</Text>
            <Text style={styles.contactInfo}>Email:<Text onPress={handleEmailPress} style={styles.link}>ronaldorlando.03@gmail.com</Text></Text>
            <Text style={styles.contactInfo}>LinkedIn:<Text onPress={handleLinkedInPress} style={styles.link}>https://www.linkedin.com/in/ronald-herrera-ulloa-197431250/</Text></Text>
            <Text style={styles.description}>
                Soy un desarrollador de React Native con experiencia en la creación de aplicaciones móviles. 
                Siempre estoy abierto a nuevas oportunidades y colaboraciones.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
    photo: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    contactInfo: {
        fontSize: 16,
        marginBottom: 4,
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
    description: {
        marginTop: 16,
        textAlign: 'center',
        paddingHorizontal: 16,
    },
});

export default AboutScreen;
