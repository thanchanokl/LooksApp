import React from 'react';
import { Image, View } from 'react-native';

export default function Logo() {
    return (
            <View style={{flexDirection: 'column', marginTop:40}}>
                <Image style={{ width: 200, height: 200, alignSelf:'center'}} source={require("../assets/icon/logo-21.png")} />
            </View>
    );
}
