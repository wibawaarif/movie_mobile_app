import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieDetail from './src/screens/MovieDetail';
import TabNavigator from './src/navigators/TabNavigator';
import SeatBooking from './src/screens/SeatBooking';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tab" component={TabNavigator} options={{animation: 'default'}} />
        <Stack.Screen name="MovieDetails" component={MovieDetail} options={{animation: 'slide_from_right'}} />
        <Stack.Screen name="SeatBooking" component={SeatBooking} options={{animation: 'slide_from_bottom'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {},
});
