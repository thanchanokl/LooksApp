import React from 'react';
import TopBar from '../components/Home/TopBar';
import { ScrollView, Text, View } from 'react-native';
import Goods from '../components/Home/Goods';
import BottomBar from '../components/BottomBar';
import Category from '../components/Category';
import { Ionicons } from '@expo/vector-icons';
import Banner from '../components/Banner';

export default function Home() {
    return (
       <ScrollView>
            <View style={{ flex: 1, paddingTop : 50, backgroundColor:'white' }}>
                <TopBar/>
                <Banner/>
                <Category/>
                <View style={{ flexDirection:"row", marginLeft:20, marginTop:15}}>
                    <Ionicons name="square" size={13} color="#caaddd" style={{marginTop:7}}/>
                    <Text style={{ fontSize: 18, marginLeft:5 }}>Tops hit</Text>
                </View>
                <Goods/>
                
            </View>
        </ScrollView>
    );
}

