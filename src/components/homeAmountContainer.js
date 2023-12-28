import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
} from 'react-native';
//import { logo } from '../constants/images';
import { primaryColor } from '../constants/colors';
import Icon from 'react-native-vector-icons/Feather';
import Spacer from './Spacer';

const HomeAmountContainer = ({ amount }) => {
    const [isVisible, setIsVisible] = useState(false);
    //setIsVisible
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 14, color: '#fff' }}>Wallet Balance</Text>
            <View style={styles.row}>
                <Text style={styles.amountText}>{isVisible ? `₦ ${amount}.00` : "**************"}</Text>
                <Spacer width={10} />
                <TouchableHighlight onPress={toggleVisibility}>
                    <Icon name={!isVisible ? "eye" : "eye-off"} size={18} color="#fff" />
                </TouchableHighlight>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: primaryColor, // Replace with your desired color
        padding: 35,
        //borderRadius: 4,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        alignContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
    },
    amountText: {
        fontSize: 28,
        color: '#fff',
        // Add additional styling as needed
    },
    // Define styles for any other elements or icons you have
});

export default HomeAmountContainer;