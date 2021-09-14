import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, Text, View} from 'react-native'
import SearchInput from "./components/SearchInput"
import getImageForWeather from "./utils/getImageForWeather"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      error: false,
      location: '',
      temperature: 0,
      weather: '',
    }
  }

  componentDidMount() {
    console.log('Component has mounted!')
    this.handleUpdateLocation('Hue')
  }

  handleUpdateLocation = city => {
    this.setState({
      location: city
    })
  }

  render() {
    const { location } = this.state
    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
          <ImageBackground
              source={getImageForWeather('Clear')}
              style={styles.imageContainer}
              imageStyle={styles.image}>

            <View style={styles.detailsContainer}>
              <Text style={[styles.largerText, styles.textStyle]}>{location}</Text>
              <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
              <Text style={[styles.largerText, styles.textStyle]}>30°</Text>

              <SearchInput
                  placeholder='Search any city'
                  onSubmit={this.handleUpdateLocation}
              />
            </View>
          </ImageBackground>

          <StatusBar style="auto" />
        </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingHorizontal: 20,
  },
  textStyle: {
    textAlign: 'center',
    // fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    ...Platform.select({
      ios: {
        fontFamily: 'AvenirNext-Regular'
      },
      android: {
        fontFamily: 'Roboto'
      }
    }),
    color: 'white',
  },
  largerText: {
    fontSize: 44
  },
  smallText: {
    fontSize: 18
  },
  textInput: {
    backgroundColor: '#666',
    color: 'white',
    width: 300,
    height: 40,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
  }
})
