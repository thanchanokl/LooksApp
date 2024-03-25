import React from 'react';
import { MaterialCommunityIcons, MaterialIcons, Feather } from '@expo/vector-icons';
import { View } from 'react-native';

export default function TopBar() {

    return (
        <View style={{flex: 1}}>
            <View style={{flexDirection:'row', paddingHorizontal:20}}>
                <MaterialCommunityIcons name="widgets-outline" size={24} color="black" />
                <MaterialIcons name="mail-outline" size={24} color="black" marginLeft={330}/>
                <Feather name="bell" size={24} color="black" marginLeft={10}/>
            </View>
        </View>
        
    
    );
}

