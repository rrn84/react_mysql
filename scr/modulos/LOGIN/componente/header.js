import React from 'react'
import {View} from 'react-native'
import{H3} from 'native-base'
import styles from './style'

function Header (props){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <H3 style={styles.text}>{props.text}</H3>
            </View>
        </View>
    )
}

export default Header;