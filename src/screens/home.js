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
import HomeCategory from '../components/homeCategory';
import { sms, phone, wallet, bet, gift, deposit, tvCable, power, mtn, glo, airtel, dstv, startime } from '../constants/images';

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
            <Spacer height={20} />
            <Text style={styles.sectionTitle}>
                Quick Actions
            </Text>
            <Spacer height={10} />
            <View style={{ ...styles.row, ...styles.spaceBetween }}>
                <Image source={mtn} style={styles.iconStyle} />
                <Image source={dstv} style={styles.iconStyle} />
                <Image source={airtel} style={styles.iconStyle} />
                <Image source={startime} style={styles.iconStyle} />
            </View>

            <Spacer height={24} />
            <Text style={styles.sectionTitle}>
                Services
            </Text>
            <Spacer height={10} />
            <View style={{ ...styles.row, ...styles.spaceBetween }}>
                <HomeCategory onPress={() => navigation.navigate('Airtime')} title="Wallet" icon={wallet} />
                <HomeCategory onPress={() => navigation.navigate('Airtime')} title="Top Up" icon={phone} />
                <HomeCategory onPress={() => navigation.navigate('Airtime')} title="Tv Cable" icon={tvCable} />
                <HomeCategory onPress={() => navigation.navigate('Airtime')} title="Gift" icon={gift} />
            </View>

            <Spacer height={30} />
            <View style={{ ...styles.row, ...styles.spaceBetween }}>
                <HomeCategory onPress={() => navigation.navigate('Airtime')} title="Deposit" icon={deposit} />
                <HomeCategory onPress={() => navigation.navigate('Airtime')} title="Power" icon={power} />
                <HomeCategory onPress={() => navigation.navigate('Airtime')} title="Bet" icon={bet} />
                <HomeCategory onPress={() => navigation.navigate('Airtime')} title="Sms" icon={sms} />
            </View>
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
    iconStyle: {
        width: 50,
        height: 50,
        borderRadius: 100,
        resizeMode: 'contain',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: primaryColor,
    }
});

export default HomeScreen;
