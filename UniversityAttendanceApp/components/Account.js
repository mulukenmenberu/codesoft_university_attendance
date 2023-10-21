import { StyleSheet, Text, View, Platform, SafeAreaView, StatusBar, Pressable, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Switch } from 'react-native-paper';
import { wipeDatabase } from '../DB/DB';

const Account = ({ navigation }) => {
    const [isDarkTheme, setTheme] = useState(true);
    useEffect(() => {

    }, []);

    const toggleTheme = () => {

    }
    const destroySession = () => {
        // destroyUserData()
        wipeDatabase()
        navigation.navigate('Login')
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#222' }}>Account</Text>
                {/* <Image
                    style={{ alignSelf: 'center',
                    width:100,
                    height:100}}
                    source={require('../assets/svg/default-avatar.png')}
                /> */}
                <View>
                    <View style={{ paddingTop: 25, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, color: '#222' }}>Favorite</Text>
                        <Icon name='eye-with-line' size={20} color={'#222'} />
                    </View>
                    <View style={{ paddingTop: 25, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, color: '#222' }}>Dark Mode</Text>
                        {/* <Icon name='eye-with-line' size={20} color={'#222'}  /> */}
                        <Switch value={isDarkTheme} size={20} onValueChange={toggleTheme} />

                    </View>
                    <View style={{ paddingTop: 25, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, color: '#222' }}>Edit Account</Text>
                        <Icon name='eye-with-line' size={20} color={'#222'} />

                    </View>
                    <View style={{ paddingTop: 25, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, color: '#222' }}>Settings and Privacy</Text>
                        <Icon name='eye-with-line' size={20} color={'#222'} />

                    </View>
                    <View style={{ paddingTop: 25, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, color: '#222' }}>Help</Text>
                        <Icon name='help-with-circle' size={20} color={'#222'} />

                    </View>
                    <Pressable onPress={() => destroySession()} style={{ paddingTop: 25, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, color: '#222' }}>Logout</Text>
                        <AntDesign name='logout' size={20} color={'#222'} />

                    </Pressable>
                </View>
            </View>
            <StatusBar backgroundColor={'#9FE2BF'} barStyle={'#9FE2BF'} />


        </SafeAreaView>
    )
}

export default Account

const styles = StyleSheet.create({
    container: {
        // flex:1,
        height: '100%',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        paddingTop: 25,
        paddingLeft: 15,
        paddingRight: 20,
        backgroundColor: '#fff'
    }
})