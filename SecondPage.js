import 'react-native-gesture-handler';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import React from 'react';
import {connect} from 'react-redux';
import {resetUserAction} from './redux/actions/userActions';

class SecondPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {user, resetUser} = this.props;
    return (
      <>
        <View style={styles.container}>
          <Text style={{color: user.loggedIn ? 'green' : 'red'}}>
            {user.loggedIn
              ? `Logged in user: ${user.name}`
              : 'No logged in user.'}
          </Text>
          <TouchableOpacity
            onPress={() => {
              resetUser();
            }}>
            <Text>Reset the user</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetUser: () => {
      dispatch(resetUserAction());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SecondPage);
