import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import FunFactCard from '../components/FunFactCard';

const PlanetDetailScreen = ({ route, navigation }) => {
  const { planet } = route.params;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: planet.color }]}>
      <StatusBar style="light" />

      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
      </View>

      {/* Planet Hero Section */}
      <View style={styles.heroSection}>
        <View style={styles.emojiContainer}>
          <Text style={styles.emoji}>{planet.emoji}</Text>
        </View>
        <Text style={styles.planetName}>{planet.name}</Text>
      </View>

      {/* Content */}
      <ScrollView
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Description Card */}
        <View style={styles.descriptionCard}>
          <Text style={styles.descriptionTitle}>About {planet.name}</Text>
          <Text style={styles.descriptionText}>{planet.description}</Text>
        </View>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={[styles.statCard, { borderColor: planet.color }]}>
            <Text style={styles.statEmoji}>📏</Text>
            <Text style={styles.statLabel}>Size</Text>
            <Text style={styles.statValue}>{planet.size}</Text>
          </View>
          <View style={[styles.statCard, { borderColor: planet.color }]}>
            <Text style={styles.statEmoji}>🛸</Text>
            <Text style={styles.statLabel}>Distance</Text>
            <Text style={styles.statValue}>{planet.distance}</Text>
          </View>
        </View>

        {/* Fun Facts Section */}
        <View style={styles.funFactsSection}>
          <Text style={styles.sectionTitle}>🎉 Fun Facts!</Text>
          {planet.funFacts.map((fact, index) => (
            <FunFactCard
              key={index}
              fact={fact}
              index={index}
              color={planet.color}
            />
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerEmoji}>🌟</Text>
          <Text style={styles.footerText}>You're a space explorer!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 10,
  },
  backButton: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  heroSection: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  emojiContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  emoji: {
    fontSize: 64,
  },
  planetName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  scrollContent: {
    paddingTop: 24,
    paddingBottom: 40,
  },
  descriptionCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  descriptionText: {
    fontSize: 18,
    lineHeight: 28,
    color: '#555',
  },
  statsContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 16,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  statEmoji: {
    fontSize: 28,
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  funFactsSection: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 16,
    marginBottom: 8,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  footerEmoji: {
    fontSize: 40,
    marginBottom: 8,
  },
  footerText: {
    fontSize: 18,
    color: '#888',
    fontWeight: '500',
  },
});

export default PlanetDetailScreen;
