import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FunFactCard = ({ fact, index, color }) => {
  return (
    <View style={[styles.card, { borderLeftColor: color }]}>
      <View style={[styles.numberBadge, { backgroundColor: color }]}>
        <Text style={styles.number}>{index + 1}</Text>
      </View>
      <Text style={styles.factText}>{fact}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  numberBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  number: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  factText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
  },
});

export default FunFactCard;
