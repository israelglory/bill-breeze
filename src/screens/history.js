import React, { useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
//import { logo } from '../constants/images';
import { primaryColor } from '../constants/colors';

const HistoryScreen = ({ navigation }) => {
    return (
        <View style={styles.sectionContainer}>
            <Text style={{ fontSize: 30, color: primaryColor, fontWeight: 'bold' }}>Welcome to History</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        // backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HistoryScreen;