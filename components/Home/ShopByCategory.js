import React from 'react';
import { View, Text, Image } from 'react-native';

export default function ShopByCategory() {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ fontSize: 18, marginLeft: 18, marginBottom: 10, color: '#caaddd' }}>SHOP BY CATEGORY</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <View style={{ flexDirection: "column", marginTop: 10, alignSelf: 'center' }}>
                    <Image style={{ width: 60, height: 60, borderRadius: 90 }} source={require("../assets/goods/GlitterDress.jpg")} />
                    <Text style={{ fontSize: 18, marginTop: 10, marginBottom: 10, color: '#caaddd', textAlign: 'center' }}>Dress</Text>
                </View>
                <View style={{ flexDirection: "column", marginTop: 10, alignSelf: 'center', marginLeft: 40 }}>
                    <Image style={{ width: 60, height: 60, borderRadius: 90 }} source={require("../assets/goods/KnittedShortSleeveTop.jpg")} />
                    <Text style={{ fontSize: 18, marginTop: 10, marginBottom: 10, color: '#caaddd', textAlign: 'center' }}>Top</Text>
                </View>
                <View style={{ flexDirection: "column", marginTop: 10, alignSelf: 'center', marginLeft: 40 }}>
                    <Image style={{ width: 60, height: 60, borderRadius: 90 }} source={require("../assets/goods/CroppedJeans.jpg")} />
                    <Text style={{ fontSize: 18, marginTop: 10, marginBottom: 10, color: '#caaddd', textAlign: 'center' }}>Bottom</Text>
                </View>
                <View style={{ flexDirection: "column", marginTop: 10, alignSelf: 'center', marginLeft: 40 }}>
                    <Image style={{ width: 60, height: 60, borderRadius: 90 }} source={require("../assets/goods/BlackLineMiniSkirt.jpg")} />
                    <Text style={{ fontSize: 18, marginTop: 10, marginBottom: 10, color: '#caaddd', textAlign: 'center' }}>Skirt</Text>
                </View>
            </View>
        </View>
    );
}
