# Help Kids Learning: Solar System

A fun and educational mobile app for kids to learn about our solar system! Built with React Native and Expo.

## Features

- Learn about the Sun and all 8 planets in our solar system
- Kid-friendly descriptions and fun facts for each celestial body
- Colorful, engaging interface designed for children
- Easy navigation with beautiful planet cards
- Detailed information about size and distance from the Sun

## Planets Included

- The Sun
- Mercury
- Venus
- Earth
- Mars
- Jupiter
- Saturn
- Uranus
- Neptune

## Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn
- Expo Go app on your mobile device (for testing)

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Scan the QR code with:
   - **iOS**: Camera app or Expo Go
   - **Android**: Expo Go app

### Running on Specific Platforms

```bash
# iOS Simulator
npm run ios

# Android Emulator
npm run android

# Web Browser
npm run web
```

## Project Structure

```
solarsystem/
├── App.js                    # Main app entry with navigation
├── app.json                  # Expo configuration
├── package.json              # Dependencies
├── assets/                   # App icons and images
├── src/
│   ├── components/
│   │   ├── PlanetCard.js     # Planet list item component
│   │   └── FunFactCard.js    # Fun fact display component
│   ├── data/
│   │   └── planets.js        # Planet data and descriptions
│   └── screens/
│       ├── HomeScreen.js     # Main planet list screen
│       └── PlanetDetailScreen.js  # Individual planet details
```

## Technologies Used

- React Native
- Expo SDK 52
- React Navigation (Native Stack)
- expo-status-bar

## Customization

### Adding More Content

Edit `src/data/planets.js` to:
- Add more fun facts
- Update descriptions
- Modify planet information

### Changing Colors

Each planet has custom colors defined in `planets.js`:
- `color`: Primary planet color
- `backgroundColor`: Card background color

## License

This project is open source and available for educational purposes.
