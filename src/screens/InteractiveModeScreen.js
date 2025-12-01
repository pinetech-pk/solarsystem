import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const { width, height } = Dimensions.get('window');
const centerX = width / 2;
const centerY = height / 2 - 40;

// Planet data with relative sizes and orbit distances
const interactivePlanets = [
  { id: 'sun', name: 'Sun', emoji: '☀️', size: 70, orbitRadius: 0, color: '#FFD93D', speed: 0 },
  { id: 'mercury', name: 'Mercury', emoji: '🪨', size: 18, orbitRadius: 55, color: '#B5B5B5', speed: 4800 },
  { id: 'venus', name: 'Venus', emoji: '🟡', size: 24, orbitRadius: 80, color: '#E6A86E', speed: 6200 },
  { id: 'earth', name: 'Earth', emoji: '🌍', size: 26, orbitRadius: 108, color: '#6B93D6', speed: 8000 },
  { id: 'mars', name: 'Mars', emoji: '🔴', size: 20, orbitRadius: 135, color: '#E27B58', speed: 9500 },
  { id: 'jupiter', name: 'Jupiter', emoji: '🟠', size: 42, orbitRadius: 175, color: '#D4A574', speed: 12000 },
  { id: 'saturn', name: 'Saturn', emoji: '🪐', size: 38, orbitRadius: 220, color: '#E8D5A3', speed: 14500 },
  { id: 'uranus', name: 'Uranus', emoji: '🔵', size: 30, orbitRadius: 260, color: '#7FDBDA', speed: 17000 },
  { id: 'neptune', name: 'Neptune', emoji: '💙', size: 28, orbitRadius: 295, color: '#4169E1', speed: 20000 },
];

const Planet = ({ planet, onTap, isSelected }) => {
  const rotationAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const bounceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Orbit animation
    if (planet.speed > 0) {
      Animated.loop(
        Animated.timing(rotationAnim, {
          toValue: 1,
          duration: planet.speed,
          useNativeDriver: true,
        })
      ).start();
    }

    // Gentle floating animation for all planets
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: 1,
          duration: 1500 + Math.random() * 500,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0,
          duration: 1500 + Math.random() * 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  // Tap animation
  const handleTap = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.3,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
    onTap(planet);
  };

  const rotation = rotationAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const bounce = bounceAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 5],
  });

  // For the sun (center), no orbit
  if (planet.orbitRadius === 0) {
    return (
      <TouchableWithoutFeedback onPress={handleTap}>
        <Animated.View
          style={[
            styles.planet,
            {
              width: planet.size,
              height: planet.size,
              borderRadius: planet.size / 2,
              backgroundColor: planet.color,
              left: centerX - planet.size / 2,
              top: centerY - planet.size / 2,
              transform: [{ scale: scaleAnim }, { translateY: bounce }],
              shadowColor: planet.color,
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.8,
              shadowRadius: 20,
              elevation: 10,
            },
          ]}
        >
          <Text style={[styles.planetEmoji, { fontSize: planet.size * 0.6 }]}>
            {planet.emoji}
          </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }

  // Orbiting planets
  return (
    <Animated.View
      style={[
        styles.orbitContainer,
        {
          width: planet.orbitRadius * 2,
          height: planet.orbitRadius * 2,
          left: centerX - planet.orbitRadius,
          top: centerY - planet.orbitRadius,
          transform: [{ rotate: rotation }],
        },
      ]}
    >
      {/* Orbit path (subtle ring) */}
      <View
        style={[
          styles.orbitPath,
          {
            width: planet.orbitRadius * 2,
            height: planet.orbitRadius * 2,
            borderRadius: planet.orbitRadius,
          },
        ]}
      />
      <TouchableWithoutFeedback onPress={handleTap}>
        <Animated.View
          style={[
            styles.planet,
            {
              width: planet.size,
              height: planet.size,
              borderRadius: planet.size / 2,
              backgroundColor: planet.color,
              position: 'absolute',
              top: -planet.size / 2,
              left: planet.orbitRadius - planet.size / 2,
              transform: [
                { rotate: rotation.interpolate({
                    inputRange: [0, 360],
                    outputRange: ['360deg', '0deg'],
                  })
                },
                { scale: scaleAnim },
                { translateY: bounce },
              ],
            },
          ]}
        >
          <Text style={[styles.planetEmoji, { fontSize: planet.size * 0.65 }]}>
            {planet.emoji}
          </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

const InteractiveModeScreen = ({ navigation }) => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const nameOpacity = useRef(new Animated.Value(0)).current;
  const nameScale = useRef(new Animated.Value(0.5)).current;

  const handlePlanetTap = (planet) => {
    setSelectedPlanet(planet);

    // Reset and animate name display
    nameOpacity.setValue(0);
    nameScale.setValue(0.5);

    Animated.parallel([
      Animated.timing(nameOpacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.spring(nameScale, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start();

    // Hide after 2 seconds
    setTimeout(() => {
      Animated.timing(nameOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setSelectedPlanet(null));
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      {/* Back button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>

      {/* Stars background decoration */}
      <View style={styles.starsContainer}>
        {[...Array(30)].map((_, i) => (
          <View
            key={i}
            style={[
              styles.star,
              {
                left: Math.random() * width,
                top: Math.random() * height,
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
              },
            ]}
          />
        ))}
      </View>

      {/* Solar system */}
      <View style={styles.solarSystem}>
        {interactivePlanets.map((planet) => (
          <Planet
            key={planet.id}
            planet={planet}
            onTap={handlePlanetTap}
            isSelected={selectedPlanet?.id === planet.id}
          />
        ))}
      </View>

      {/* Planet name display */}
      {selectedPlanet && (
        <Animated.View
          style={[
            styles.nameContainer,
            {
              opacity: nameOpacity,
              transform: [{ scale: nameScale }],
              backgroundColor: selectedPlanet.color + 'DD',
            },
          ]}
        >
          <Text style={styles.planetNameEmoji}>{selectedPlanet.emoji}</Text>
          <Text style={styles.planetName}>{selectedPlanet.name}</Text>
        </Animated.View>
      )}

      {/* Instruction for kids */}
      <View style={styles.instructionContainer}>
        <Text style={styles.instruction}>👆 Tap the planets!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a1a',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    zIndex: 100,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  starsContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  star: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 10,
    opacity: 0.6,
  },
  solarSystem: {
    flex: 1,
    position: 'relative',
  },
  orbitContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orbitPath: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    borderStyle: 'dashed',
  },
  planet: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  planetEmoji: {
    textAlign: 'center',
  },
  nameContainer: {
    position: 'absolute',
    top: 100,
    alignSelf: 'center',
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  planetNameEmoji: {
    fontSize: 50,
    marginBottom: 8,
  },
  planetName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  instructionContainer: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 30,
  },
  instruction: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '500',
  },
});

export default InteractiveModeScreen;
