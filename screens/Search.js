import React from 'react';
import { ScrollView, View } from 'react-native';
import SearchBar from '../components/SearchBar';

export default function Search() {
    return (
       <ScrollView>
            <View style={{ flex: 1, paddingTop : 50, backgroundColor:'white' }}>
                <SearchBar/>
            </View>
        </ScrollView>
    );
}

