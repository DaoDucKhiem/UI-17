/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
export default class Open1 extends Component {
  render()  {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Chọn một hướng đi</Text>
      </View>{/* header */}
      <View style={styles.line}></View>
      <View style={styles.body}>
        <View style={styles.content}>
          <View style={styles.top}>
            <Image style={styles.logo} source={require('../images/logo.png')}></Image>
          </View>
          <View style={styles.bot}>
            <Text style={{fontWeight: "bold", fontSize: 20, textDecorationLine: 'underline',}}
            onPress={() => this.props.navigation.navigate('Open3')}
            >Bạn đã biết tiếng Anh một chút ?</Text>
            <Text style={{fontSize: 19}}>Bạn đã biết tiếng Anh một chút</Text>
          </View>
        </View>{/* content */}
        <View style={styles.content}>
          <View style={styles.top}>
            <Image style={styles.logo} source={require('../images/logo.png')}></Image>
          </View>
          <View style={styles.bot}>
            <Text style={{fontWeight: "bold", fontSize: 20, textDecorationLine: 'underline',}}
            onPress={() => this.props.navigation.navigate('Open2')}
            >Bạn đã biết tiếng Anh một chút ?</Text>
            <Text style={{fontSize: 19}}>Bạn đã biết tiếng Anh một chút</Text>
          </View>
        </View>{/* content */}
      </View>{/* body */}
    </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'rgb(234,195,176)',
  },
  header: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    textAlign: 'right',
  },
  body: {
    flex: 9,
    flexDirection: 'column',
    justifyContent: 'flex-start',// Bắt đầu từ trên xuống dưới
    alignItems: 'center',
  },
  logo: {
    height: 50,
    width: 50,
    justifyContent:'center',
    alignItems:'center',
  },
  title: {
    width:280,
    height: 45,
    fontSize: 25,
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50,
    width: 300,
    height: 150,
    borderRadius: 6,
    borderWidth: 3,
    borderColor: 'red',
    padding: 5,
  },
  line: {
    height:1,
    backgroundColor: 'black',
    justifyContent:'center',
  },
  top: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    textAlign: 'right',
  },
  bot: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'flex-start',// Bắt đầu từ trên xuống dưới
    alignItems: 'center',
  },
});

