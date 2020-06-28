import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  openSecondPage = () => {
    const {navigation} = this.props;
    navigation.navigate('SecondPage');
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.openSecondPage}>
            <Text>Landing Page</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LandingPage;
