import React from 'react';
import { ScrollView, View } from 'react-native';
import SearchBar from '../components/SearchBar';

export default function Search() {
    return (
       <ScrollView>
            <View style={{paddingTop : 10, backgroundColor:'white' }}>
                <SearchBar/>
            </View>
        </ScrollView>
    );
}

