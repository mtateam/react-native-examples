import 'react-native-gesture-handler';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';
import {connect} from 'react-redux';
import {setUserAction} from './redux/actions/userActions';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: ''};
  }

  openSecondPage = () => {
    const {navigation} = this.props;
    navigation.navigate('SecondPage');
  };

  render() {
    const {setUser} = this.props;
    const {username} = this.state;
    return (
      <>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.openSecondPage}>
            <Text>Go to Second Page</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.openSecondPage}>
            <TextInput
              style={{textAlign: 'center'}}
              placeholder="Enter username"
              onChangeText={value => {
                this.setState({username: value});
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setUser(username)}>
            <Text>Log In</Text>
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
    setUser: username => {
      dispatch(setUserAction(username));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingPage);
