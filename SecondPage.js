import 'react-native-gesture-handler';
import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class SecondPage extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <TouchableOpacity>
            <Text>Second Page</Text>
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

export default SecondPage;
