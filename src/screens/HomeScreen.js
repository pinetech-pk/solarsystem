import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
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

        {/* Interactive Mode Button */}
        <TouchableOpacity
          style={styles.interactiveButton}
          onPress={() => navigation.navigate('InteractiveMode')}
          activeOpacity={0.8}
        >
          <Text style={styles.interactiveButtonEmoji}>🪐</Text>
          <Text style={styles.interactiveButtonText}>Interactive Mode</Text>
          <Text style={styles.interactiveButtonSubtext}>For little explorers!</Text>
        </TouchableOpacity>
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
  interactiveButton: {
    marginTop: 20,
    backgroundColor: '#4A90D9',
    paddingHorizontal: 30,
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#4A90D9',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  interactiveButtonEmoji: {
    fontSize: 32,
    marginBottom: 4,
  },
  interactiveButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  interactiveButtonSubtext: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    marginTop: 2,
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
