// Introduction Screen

import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Swiper from 'react-native-swiper';
import CheckBox from 'react-native-checkbox';

import introductionActions from './introductionActions';

const win = Dimensions.get('window');

// Introduction data
const swiperData = [
	{
		mainImage: require('./images/slide1.png'),
		subImage: require('./images/femaleSign.png'),
		description: 'A great place to meet new \n people and make new friends.\n And the best part?',
		boldText: 'It\'s girls only!',
	},
	{
		mainImage: require('./images/slide2.png'),
		subImage: require('./images/shareLogo.png'),
		description: 'Meet people like you\n and make new friends\n in new places.',
		boldText: 'Share your interests!',
	},
	{
		mainImage: require('./images/slide3.png'),
		subImage: require('./images/wineglass.png'),
		description: 'Made for women by women \n for friendship, fun\n and freedom.',
		boldText: 'Never a dull moment!',
	}
];

const mapStateToProps = (state => ({
}));

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ introductionActions }, dispatch),
});

class IntroductionScreen extends Component {
	constructor(props){
		super(props);

		this._onSignInPress = this._onSignInPress.bind(this);
	}

	_onSignInPress() {
		alert('hi');
	}

	render(){
		return(
			<View style={{flex: 1}}>
				<View style={{ position: 'absolute', flex: 1 }}>
		          <Image 
			          source={require('./images/background.png')} 
			          resizeMode="contain"
		          />
		        </View>
		        <Swiper
		          loop={false}
		          paginationStyle={{bottom: 480}}
		          pagination
		          ref={(swiper) => {this.swiper = swiper;}}
		          scrollEnabled={true}
		        >
		          {
		          	swiperData.map((item, i) => (
			            <SwipeItem
			              key={i}
			              mainImage={item.mainImage}
			              subImage={item.subImage}
			              description={item.description}
			              boldText={item.boldText}
			            />
		          	))
		          }
		        </Swiper>
		        <View style={{alignItems: 'center', position: 'absolute', bottom: 0, paddingBottom: 20}}>
			        <View style={styles.footer}>
				        <CheckBox
				        	label=""
		        			containerStyle={{borderRadius: 10}}
				            checked={true}
				            onChange={(checked) => console.log('I am checked', checked)}
				        />
				        <View>
					        <Text style={{color: '#fff'}}> I confirm that I am a girl and</Text>
					        <TouchableOpacity>
					        	<Text style={{color: '#fff'}}> I agree to the Terms & Conditions</Text>	
					        </TouchableOpacity>
				        </View>
			        </View> 
			        <TouchableOpacity
			        	onPress={this._onSignInPress}
			        > 
			        	<View style={{backgroundColor: '#000', opacity: 0.5, padding: 10}}>
			        		<Text style={{color: '#fff'}}>
			        			sign in with facebook 
			        		</Text>
			        	</View>
		        	</TouchableOpacity>
		        </View>
	       	</View>
			);
		}

	};

const SwipeItem = (props) => (
	<View
		style={{flexDirection: 'column', alignItems: 'center', paddingTop: 20}}
	>
      <Image 
          source={props.mainImage} 
          resizeMode="contain"
          style={{height: win.height/2.5, width: win.width/1.7}}
      />
      <Image 
          source={props.subImage} 
          resizeMode="contain"
          style={{height: 45, width: 65}}
      />
      <Text style={styles.description}>{props.description}</Text>
      <Text style={styles.boldText}>{props.boldText}</Text>
	</View>
	)

const styles = StyleSheet.create({
  description: {
    fontSize: 17,
    color: '#fff',
    textAlign: 'center',
  },
  boldText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  footer:{
  	flexDirection: 'row', 
	paddingHorizontal: 30,
	paddingBottom: 10,
	alignSelf: 'center', 
	alignItems: 'center',
	justifyContent: 'center',
} 
  
});

export default connect(null, null)(IntroductionScreen);