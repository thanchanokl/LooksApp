import React from 'react';
import { ScrollView, View } from 'react-native';
import BodyShape from '../components/BodyShape';
import PersonalColor from '../components/PersonalColor';
import BodyShapeResult from '../components/BodyShapeResult';
import PersonalColorCheck from '../components/PersonalColorCheck';


export default function Looks() {
    return (
       <ScrollView>
            <View style={{ flex: 1, paddingTop : 10, backgroundColor:'white' }}>
                <BodyShape/>
                <BodyShapeResult/>
                <PersonalColor/>
                <PersonalColorCheck/>
            </View>
        </ScrollView>
    );
}

