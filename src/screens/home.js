import React, { useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { primaryColor } from '../constants/colors';
import HomeAmountContainer from '../components/homeAmountContainer';
import Spacer from '../components/Spacer';

const HomeScreen = ({ navigation }) => {

    return (
        <View style={styles.sectionContainer}>
            <View style={{ ...styles.row, ...styles.spaceBetween }}>
                <Text style={styles.username}>
                    Welcome, Splash
                </Text>
                <View>
                    <MaterialIcon name="notifications" size={25} color={primaryColor} />
                </View>
            </View>
            <Spacer height={20} />

            <HomeAmountContainer amount={"23,333"} />
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
    spaceAround: {
        justifyContent: 'space-around',
    },
    spaceEvenly: {
        justifyContent: 'space-evenly',
    },
    center: {
        justifyContent: 'center',
    },
    username: {
        fontSize: 20,
        fontWeight: 'bold',
        color: primaryColor,
    },
});

export default HomeScreen;
