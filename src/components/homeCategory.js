import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
} from 'react-native';
//import { logo } from '../constants/images';
import { primaryColor } from '../constants/colors';
import Icon from 'react-native-vector-icons/Feather';
import Spacer from './Spacer';

const HomeCategory = ({ onPress, title, icon }) => {
    return (
        <TouchableHighlight onPress={() => onPress()}>

            <View style={styles.column}>
                <View style={styles.iconContainer}>
                    <Image source={icon} style={styles.iconStyle} />
                </View>
                <Spacer height={10} />
                <Text style={styles.amountText}>{title}</Text>
            </View>

        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: primaryColor, // Replace with your desired color
    },
    column: {
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
    },
    amountText: {
        fontSize: 12,
        color: '#000',
    },
    iconContainer: {
        backgroundColor: '#F9F9F9',
        padding: 10,
        borderRadius: 100,
    },
    iconStyle: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
});

export default HomeCategory;