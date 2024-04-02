import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function CustomerList() {
    const [goods, setGoods] = useState([]);
    const [quantities, setQuantities] = useState({});

    const loadGoods = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/thanchanokl/LooksApp/main/infoGoods.json');
            let data = await promise.json();
            console.log("Load Data : ", data);
            //SET STATE
            setGoods(data);
            // default value 0
            let initialQuantities = {};
            data.forEach(item => {
                initialQuantities[item.id] = 0;
            });
            setQuantities(initialQuantities);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    }

    useEffect(() => {
        loadGoods();
    }, []);

    const decreaseQuantity = (itemId) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [itemId]: Math.max(0, prevQuantities[itemId] - 1)
        }));
    };

    const increaseQuantity = (itemId) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [itemId]: prevQuantities[itemId] + 1
        }));
    };

    return (
        <View style={{ padding: 10, backgroundColor: 'white' }}>
            <FlatList
                horizontal={false}
                data={goods}
                renderItem={({ item, index }) => {
                    console.log(item, index, item.uri);
                    return (
                        <View style={{ flexDirection: 'row', borderBottomWidth: 0.5, borderColor: "#AFAFAF", width: 400, height: 120, alignSelf: 'center' }}>
                            <View style={{ flexDirection: 'row', flex: 1 , alignSelf: 'center' }}>
                                <View style={{ marginTop: 40, marginLeft: 10 }}>
                                    <AntDesign name="checkcircle" size={24} color="#caaddd" />
                                </View>
                                {/* Image */}
                                <View style={{ margin: 10, alignSelf: 'center', borderRadius: 10, borderWidth: 0.5, borderColor: "#AFAFAF" }}>
                                    <Image style={{ width: 100, height: 90, borderRadius: 10 }} source={{ uri: item.uri }}></Image>
                                </View>
                                {/* Text */}
                                <View style={{ flexDirection: "column", flex: 1}}>
                                    <Text style={{ fontSize: 16, marginTop: 15  }}>{item.title}</Text>
                                    <View style={{ flexDirection: "row", marginTop: 40}}>
                                        <Text style={{ fontSize: 14, fontWeight: 'bold', marginRight: 5, color: '#caaddd' }}>{item.currency}</Text>
                                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#caaddd' }}>{item.price}</Text>
                                    </View>
                                </View>
                            </View>
                            {/* -+ */}
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:60 }}>
                                <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
                                    <AntDesign name="minus" size={14} color="#828282" style={{ marginTop: 1 }} />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 14, marginHorizontal: 5 }}>{quantities[item.id]}</Text>
                                <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
                                    <AntDesign name="plus" size={14} color="#828282" style={{ marginTop: 1 }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    );
                }}
                keyExtractor={item => item.id}
            />
        </View>
    );
}
