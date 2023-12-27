import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { primaryColor } from '../constants/colors';
import { View, Platform } from 'react-native';
import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';
import Icon from 'react-native-vector-icons/AntDesign';


const Tab = createBottomTabNavigator();

function TabStack() {
    return (

        <Tab.Navigator
            initialRouteName="HomeStack"
            screenOptions={({ route }) => ({
                headerStyle: { backgroundColor: '#42f44b' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' },
                tabBarStyle: {
                    paddingTop: 10,
                    paddingBottom: 20,
                    height: 76,
                },
                tabBarActiveTintColor: primaryColor,
                tabBarInactiveTintColor: 'gray',
                tabBarLabelStyle: {
                    fontSize: 13,
                    //fontFamily: 'Montserrat-Medium',
                },
            })}>
            <Tab.Screen
                name="HomeStack"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        iconName = focused
                            ? 'home'
                            : 'home';
                        return (
                            <Icon
                                name={iconName}
                                size={30}
                                color={color}
                            />
                        );
                    }

                }} />

            <Tab.Screen
                name="ProfileStack"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Settings',
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        iconName = focused
                            ? 'setting'
                            : 'setting';
                        return (
                            <Icon
                                name={iconName}
                                size={30}
                                color={color}
                            />
                        );
                    }
                }} />
        </Tab.Navigator>
    );
}
export default TabStack;