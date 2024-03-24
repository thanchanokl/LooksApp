import React from 'react';
import { ScrollView, View } from 'react-native';
import BodyShape from '../components/BodyShape';
import PersonalColor from '../components/PersonalColor';

export default function Looks() {
    return (
       <ScrollView>
            <View style={{ flex: 1, paddingTop : 50, backgroundColor:'white' }}>
                <BodyShape/>
                <PersonalColor/>
            </View>
        </ScrollView>
    );
}

