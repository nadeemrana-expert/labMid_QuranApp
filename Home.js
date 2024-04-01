// // App.js
// import * as React from 'react';
// import { View, Text, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import SurahNamesScreen from './SurahNamesScreen';
// import SurahDescriptionsScreen from './SurahDescriptionsScreen';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Surah Names"
//         onPress={() => navigation.navigate('SurahNames')}
//       />
//       <Button
//         title="Go to Surah Descriptions"
//         onPress={() => navigation.navigate('SurahDescriptions')}
//       />
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="SurahNames" component={SurahNamesScreen} />
//         <Tab.Screen name="SurahDescriptions" component={SurahDescriptionsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
