import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SurahNameScreen from './SurahNameScreen';
import SurahDescriptionScreen from './SurahDescriptionScreen';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Surah Names"
        onPress={() => navigation.navigate('SurahNames')}
      />
      <Button
        title="Go to Surah Descriptions"
        onPress={() => navigation.navigate('SurahDescriptions')}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  const enableDarkMode = () => {
    setDarkMode(true);
  };

  const enableLightMode = () => {
    setDarkMode(false);
  };

  const themeStyles = darkMode ? darkStyles : lightStyles;

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <View style={styles.themeButtonsContainer}>
          <Button
            title="Dark Mode"
            onPress={enableDarkMode}
            color="#333"
          />
          <Button
            title="Light Mode"
            onPress={enableLightMode}
            color="#fff"
          />
        </View>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="SurahNames" component={SurahNameScreen} />
          <Tab.Screen name="SurahDescriptions" component={SurahDescriptionScreen} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    color: '#fff',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  themeButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});
