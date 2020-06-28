import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LandingPage from './LandingPage';
import SecondPage from './SecondPage';

const Stack = createStackNavigator();

class Router extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
      </Stack.Navigator>
    );
  }
}

export default Router;
