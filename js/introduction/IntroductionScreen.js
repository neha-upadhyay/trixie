// Introduction Screen

import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import introductionActions from './introductionActions'

const mapStateToProps = (state => ({
}));

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ introductionActions }, dispatch),
});

class IntroductionScreen extends Component {
	render(){
		const image = require('../../assets/images/background.png');
		return(
			<View style={{flex: 1}}>
				<View style={{ position: 'absolute' }}>
		          <Image 
			          source={image} 
			          resizeMode={'cover'} 
		          />
		        </View>
	       	</View>

			);
	}

}

export default connect(null, null)(IntroductionScreen);