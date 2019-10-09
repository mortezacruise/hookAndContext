// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SquarScreen from './components/SquareScreen';
import TextInputScreen from './components/TextScreen/TextInput';
import IndexScreen from './components/BlogPostProvider/MainComponent';
import {BlogProvider} from './components/BlogPostProvider/Context/BlogContext';

const App = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          backgroundColor: 'orange',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={styles.Tochables}
          onPress={() => navigation.navigate('ColorCounter')}>
          <Text>gotot color counter screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Tochables}
          onPress={() => navigation.navigate('TextScreen')}>
          <Text>gotot TextScreen screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Tochables}
          onPress={() => navigation.navigate('BlogProviders')}>
          <Text>gotot BlogProvider screen</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  Tochables: {
    width: 200,
    height: 100,
    backgroundColor: 'yellow',
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const BlogProviders = createStackNavigator(
  {
    index: IndexScreen,
  },
  {
    initialRouteName: 'index',
    defaultNavigationOptions: {
      title: 'blogs',
      header: null,
    },
  },
);
const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
  },
  ColorCounter: {
    screen: SquarScreen,
  },
  TextScreen: {
    screen: TextInputScreen,
  },
  BlogProviders: {
    screen: BlogProviders,
  },
});

const AppContainer = createAppContainer(AppNavigator);
export default () => {
  return (
    <BlogProvider>
      <AppContainer />
    </BlogProvider>
  );
};
