import React, { Component } from 'react';
import { View, StyleSheet, Text,} from 'react-native';
import { connect } from 'react-redux';
import IntroductionScreen from './introduction/IntroductionScreen'


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


export class Main extends Component {

  render() {
    return(
      <View style={styles.container}>
          <IntroductionScreen />
      </View>
    );
  }

}

export default connect(null, null)(Main);
