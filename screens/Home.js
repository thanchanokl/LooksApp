import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import TopBar from '../components/Home/TopBar';
import Banner from '../components/Banner';
import Category from '../components/Category';
import { Ionicons } from '@expo/vector-icons';
import Goods from './Goods';


export default function Home() {
    return (
       <ScrollView>
            <View style={{ flex: 1, paddingTop : 10, backgroundColor:'white' }}>
                {/* <TopBar/> */}
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

