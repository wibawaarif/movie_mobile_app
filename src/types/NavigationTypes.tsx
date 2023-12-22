import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// Define the type for the navigation stack
type RootStackParamList = {
  Home: undefined; // Specify other screens and their params here
  Ticket: undefined;
  Search: undefined;
  User: undefined;
  MovieDetails: undefined;
  SeatBooking: undefined;
};

// Specify the type for the navigation prop
export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;
export type SearchScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Search'
>;
export type TicketScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Ticket'
>;
export type UserScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'User'
>;
