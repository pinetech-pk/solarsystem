import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PlanetCard = ({ planet, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: planet.backgroundColor }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={[styles.emojiContainer, { backgroundColor: planet.color }]}>
        <Text style={styles.emoji}>{planet.emoji}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{planet.name}</Text>
        <Text style={styles.subtitle} numberOfLines={2}>{planet.description}</Text>
      </View>
      <Text style={styles.arrow}>→</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 20,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  emojiContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  emoji: {
    fontSize: 32,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  arrow: {
    fontSize: 24,
    color: '#999',
    marginLeft: 8,
  },
});

export default PlanetCard;
