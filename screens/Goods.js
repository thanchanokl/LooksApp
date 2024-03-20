import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons, Feather } from '@expo/vector-icons';

export default function Goods(props) {

    const [goods, setGoods] = useState([]); 
    const loadGoods = async () => {
        try{
            let promise = await fetch('https://raw.githubusercontent.com/thanchanokl/LooksApp/main/info.json');
            let data = await promise.json();
            console.log("Load Data : " , data);
        //SET STATE
            setGoods(data);
        }catch(error){
            console.log("ERROR : " , error);
        }
    }

    useEffect(() => {
        loadGoods();
    }, []);

    return (
        <View style={{flex: 1}}>
            <View style={{flexDirection:'row', padding:20}}>
                <MaterialCommunityIcons name="widgets-outline" size={24} color="black" />
                <MaterialIcons name="mail-outline" size={24} color="black" marginLeft={330}/>
                <Feather name="bell" size={24} color="black" marginLeft={10}/>
            </View>
        
            <View style={{padding:20}}>
                <FlatList
                    horizontal={false}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    data={goods}
                    renderItem={({ item, index }) => {
                        console.log(item, index, item.uri);
                            return (
                                <View style={{ width:Dimensions.get("screen").width/2.5, marginRight:10, marginLeft:10, marginTop:5, marginBottom:20,borderColor:'gray', borderWidth: 0.5, borderRadius:10}}>
                                    <Image style={{width: '99%', height: 200, borderWidth: 0.5, borderTopLeftRadius:10, borderTopRightRadius:10}} source={{ uri: item.uri }} />
                                    <View style={{flexDirection:"column", padding: 10, justifyContentt:'center', alignItems: 'center'}}>
                                        <Text style={{fontSize:15, color:'black', textAlign:'center', flexWrap:'wrap', width:'90%',marginBottom:5}}> {item.title} </Text>
                                        <Text style={{fontSize:12, color:'black', textAlign:'center', flexWrap:'wrap', width:'95%',marginBottom:5}}> {item.type} </Text>
                                        <View style={{flexDirection:"row", justifyContent:'center'}}>
                                            <Text style={{fontSize:14, color:'black', textAlign:'center'}}> {item.price} </Text>
                                            <Text style={{fontSize:14, color:'black', textAlign:'center'}}> {item.currency} </Text>
                                        </View>
                                    </View>
                                </View>
                            );
                        }
                    }
                    keyExtractor={item => item.id}/>   
            </View>
        </View>
    );
}

