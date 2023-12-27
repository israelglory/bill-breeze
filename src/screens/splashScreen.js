import React, { useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
//import { logo } from '../constants/images';
import { primaryColor } from '../constants/colors';

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigation.navigate('TabStack');
        }, 2000);

        // Clear the timeout when the component unmounts to avoid potential issues
        return () => clearTimeout(timeout);
    }, [navigation]);

    return (
        <View style={styles.sectionContainer}>
            <Text style={{ fontSize: 30, color: primaryColor, fontWeight: 'bold' }}>Welcome to Bill Breeze</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        //backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SplashScreen;
