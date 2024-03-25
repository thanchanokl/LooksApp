import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View, StyleSheet } from 'react-native';

const CustomerList = () => {
    const [goods, setGoods] = useState([]); 

    const loadGoods = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/thanchanokl/LooksApp/main/infoGoods.json');
            let data = await promise.json();
            console.log("Load Data : ", data);
            // SET STATE
            setGoods(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    }

    useEffect(() => {
        loadGoods();
    }, []);

    const Item2 = ({ item }) => (
        <View style={styles.itemContainer}>
            <View style={{ flexDirection: 'row', flex: 1, paddingRight: 20 }}>
                {item.image && <Image source={{ uri: item.uri }} style={{ flex: 1, resizeMode: 'cover', aspectRatio: 1 / 1 }} onError={(error) => console.log("Image load error:", error)}/>}
            </View>
            <View style={{ flex: 3 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
                <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginVertical: 5, marginRight:5}}>{item.currency}</Text>
                    <Text style={{ marginVertical: 5 }}>{item.price}</Text>
                    
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={goods}
                renderItem={({ item }) => <Item2 item={item} />}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffff',
    },
    itemContainer: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccccc',
        flexDirection: 'row',
    },
});

export default CustomerList;
