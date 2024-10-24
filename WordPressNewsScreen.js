// WordPressNewsScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

const WordPressNewsScreen = () => {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('https://kinsta.com/wp-json/wp/v2/posts?per_page=3');
                const data = await response.json();
                setNewsData(data);
            } catch (error) {
                console.error('Error fetching news data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) {
        return <Text>Cargando noticias...</Text>;
    }

    if (newsData.length === 0) {
        return <Text>No se encontraron noticias.</Text>;
    }

    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: 'https://kinsta.com/wp-content/uploads/2021/09/kinsta-logo.svg' }} // URL del logo de Kinsta
                style={styles.logo}
            />
            {newsData.map((news) => (
                <View key={news.id} style={styles.newsItem}>
                    <Text style={styles.title}>{news.title.rendered}</Text>
                    <Text style={styles.summary} numberOfLines={2}>{news.excerpt.rendered.replace(/(<([^>]+)>)/gi, "")}</Text>
                    <TouchableOpacity onPress={() => Linking.openURL(news.link)}>
                        <Text style={styles.link}>Visitar noticia original</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    logo: {
        width: 150,
        height: 50,
        marginBottom: 20,
    },
    newsItem: {
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    summary: {
        fontSize: 14,
        marginBottom: 5,
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
});

export default WordPressNewsScreen;
