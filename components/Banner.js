import React from 'react';
import { Image, ScrollView, View } from 'react-native';

export default function Banner() {
    return (
       <ScrollView>
            <View style={{flexDirection:"column", alignItems:'center', backgroundColor:'#f1f1f1', borderRadius:10, marginLeft:20, marginRight:20, marginTop:20}}>
                    <View style={{flexDirection:"row", alignItems:'center', width: 410, height: 150}}>
                        <Image style={{ width: '100%', height: '100%', marginRight:-10, borderRadius:10 }} source={require("../assets/banner/banner-1.jpg")} />
                        
                    </View>
                    
                </View>
        </ScrollView>
    );
}

