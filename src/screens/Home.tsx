import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  ScrollView,
  StatusBar,
} from 'react-native';
import InputHeader from '../components/InputHeader';
import {COLORS, SPACING} from '../theme/theme';
import {HomeScreenNavigationProp} from '../types/NavigationTypes';
import {
  upcomingMovies,
  nowPlayingMovies,
  popularMovies,
  baseImagePath,
} from '../api/apicalls';
import CategoryHeader from '../components/CategoryHeader';

const {width, height} = Dimensions.get('window');

const getNowPlayingMoviesList = async () => {
  try {
    let response = await fetch(nowPlayingMovies);
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(
      'Something went wrong in getNowPlayingMoviesList Function',
      error,
    );
  }
};

const getPopularMoviesList = async () => {
  try {
    let response = await fetch(popularMovies);
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(
      'Something went wrong in getPopularMoviesList Function',
      error,
    );
  }
};

const getUpcomingMoviesList = async () => {
  try {
    let response = await fetch(upcomingMovies);
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(
      'Something went wrong in getUpcomingMoviesList Function',
      error,
    );
  }
};

const Home = ({navigation}: {navigation: HomeScreenNavigationProp}) => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<any>(undefined);
  const [popularMovies, setPopularMovies] = useState<any>(undefined);
  const [upcomingMovies, setUpcomingMovies] = useState<any>(undefined);

  useEffect(() => {
    (async () => {
      let tempNowPlaying = await getNowPlayingMoviesList();
      setNowPlayingMovies(tempNowPlaying.results);

      let tempPopular = await getPopularMoviesList();
      setPopularMovies(tempPopular.results);

      let tempUpcoming = await getUpcomingMoviesList();
      setUpcomingMovies(tempUpcoming.results);
    })();
  }, []);

  const searchMoviesFunction = (text: any) => {
    navigation.navigate('Search');
  };

  if (
    nowPlayingMovies == undefined &&
    nowPlayingMovies == null &&
    popularMovies == undefined &&
    popularMovies == null &&
    upcomingMovies == undefined &&
    upcomingMovies == null
  ) {
    return (
      <ScrollView
        style={styles.container}
        bounces={false}
        contentContainerStyle={styles.scrollViewContainer}>
        <StatusBar hidden />

        <View style={styles.InputHeaderContainer}>
          <InputHeader searchFunction={searchMoviesFunction} />
        </View>

        <View style={styles.loadingContainer}>
          <ActivityIndicator size={'large'} color={COLORS.Orange} />
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      bounces={false}
      contentContainerStyle={styles.scrollViewContainer}>
      <StatusBar hidden />

      <View style={styles.InputHeaderContainer}>
        <InputHeader searchFunction={searchMoviesFunction} />
      </View>

      <CategoryHeader title={'Now Playing'} />
      <CategoryHeader title={'Popular'} />
      <CategoryHeader title={'Upcoming'} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: COLORS.Black,
  },
  scrollViewContainer: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  InputHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_28,
  },
});

export default Home;
