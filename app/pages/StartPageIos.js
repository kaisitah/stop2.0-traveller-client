import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator, View, TouchableOpacity } from 'react-native'

import { DefaultText } from '../components/textComponents'
import styles from '../styles/stylesheet'
import strings from '../resources/translations'

import StartViewButtons from '../components/StartViewButtons'
import AccessibilityView from '../components/AccessibilityView'

import { getLocation } from '../actions/gpsLocationActions'

class StartView extends Component {
    constructor()
    {
        super()

        this.state = {
            locationPermissionsError: false
        }
    }

    componentWillMount = () =>
    {
        this.props.getLocation()
    }

    render()
    {
        let viewElement

        if (this.state.locationPermissionsError)
        {
            viewElement = <View>
                          <DefaultText style={styles.locationErrorText}>{strings.locationPermissionsError}</DefaultText>
                        </View>
        }
        else if (this.props.locationError)
            {
            viewElement = <View>
                              <DefaultText style={styles.locationErrorText}>{strings.locationError}</DefaultText>
                              <TouchableOpacity onPress={this.props.getLocation} accessibilityComponentType="button" accessibilityLabel={strings.tryAgain}>
                                <DefaultText style={styles.tryAgain}>{strings.tryAgain}</DefaultText>
                              </TouchableOpacity>
                            </View>
        }
        else if (this.props.gettingLocation == false)
        {
            viewElement = <StartViewButtons />
        }
        else
        {
            viewElement = <View><DefaultText style={styles.gettingLocationText}>{strings.gettingLocation}</DefaultText><ActivityIndicator /></View>
        }


        return (
      <AccessibilityView style={styles.start} name="start">
        {viewElement}
      </AccessibilityView>
        )
    }
}

StartView.propTypes = {
    gettingGpsLocation: React.PropTypes.bool.isRequired,
    locationError: React.PropTypes.string,
    getLocation: React.PropTypes.func.isRequired
}

const mapStateToProps = (state) =>
{
    return {
        gettingGpsLocation: state.gpsLocation.gettingGpsLocation,
        locationError: state.gpsLocation.error
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        getLocation: () =>
        {
            dispatch(getLocation())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartView)
