import React, { useEffect, useState } from 'react';
import TopBar from '../components/Home/TopBar';
import { ScrollView, View } from 'react-native';
import Goods from '../components/Home/Goods';
import ShopByCategory from '../components/Home/ShopByCategory';

export default function Home() {

    return (
        <ScrollView>
            <View>
                <TopBar/>
                {/* <ShopByCategory/> */}
                <Goods/>
            </View>
        </ScrollView>
       

    
    );
}

