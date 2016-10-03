import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, ListView, View, TouchableOpacity, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'

import styles from '../styles/stylesheet'
import strings from '../resources/translations'

class StartView extends Component{
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render(renderData) {
    const goToBusListView = () => Actions.departures()

    return (
      <View style={styles.start}>
        <TouchableOpacity style={styles.startUpper} onPress={goToBusListView}>
          <Image style={styles.startImage} source={require('../resources/images/rinkeli.jpg')}></Image>
          <Text style={styles.startText}>{strings.onStop}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.startLower}>
          <Image style={styles.startImage} source={require('../resources/images/bussi.jpg')}></Image>
          <Text style={styles.startText}>{strings.onBus}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default StartView;
