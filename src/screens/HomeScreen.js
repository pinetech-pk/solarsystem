import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import PlanetCard from '../components/PlanetCard';
import { planets } from '../data/planets';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.headerEmoji}>🚀</Text>
        <Text style={styles.title}>Solar System</Text>
        <Text style={styles.subtitle}>Tap a planet to learn more!</Text>
      </View>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {planets.map((planet) => (
          <PlanetCard
            key={planet.id}
            planet={planet}
            onPress={() => navigation.navigate('PlanetDetail', { planet })}
          />
        ))}
        <View style={styles.footer}>
          <Text style={styles.footerText}>🌟 Keep exploring! 🌟</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  header: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerEmoji: {
    fontSize: 48,
    marginBottom: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#a0a0a0',
    marginTop: 8,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  scrollContent: {
    paddingTop: 20,
    paddingBottom: 40,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  footerText: {
    fontSize: 18,
    color: '#888',
  },
});

export default HomeScreen;
