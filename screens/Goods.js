import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import GoodsService from "../services/GoodsService";


export default function Goods() {    
    const navigation = useNavigation(); 
    const [goods, setGoods] = useState(
        [
        // { id: 1, name: "พัฒนา Application ด้วย React และ React Native", price: 330, image: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/week9/book-1.jpg", },
        // { id: 2, name: "พัฒนาเว็บแอพพลิเคชันด้วย Firebase ร่วมกับ React", price: 229, image: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/week9/book-2.jpg", },
        // { id: 3, name: "พัฒนา Web Apps ด้วย React Bootstrap + Redux", price: 349, image: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/week9/book-3.jpg", },
        // { id: 4, name: "พัฒนาเว็บแอพพลิเคชันด้วย React Redux+Bootstrap", price: 229, image: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/week9/book-4.jpg", },
    ]
);    
    const [refresh, setRefresh] = useState(false);

    const loadGoods = async () => {
        let gooks = await GoodsService.getItems();
        console.log(gooks)
        setGoods(gooks);
    };

    // useEffect(() => {
    //   // WHEN MOUNT AND UPDATE
    //   const unsubscribe = navigation.addListener("focus", () => {
    //       loadGoods();
    //   });
    //   // WHEN UNMOUNT
    //   return unsubscribe;
    // }, [navigation]);

    useEffect(() => {
        const loadGoods = async () => {
            let goods = await GoodsService.getItems();
            console.log(goods); // ตรวจสอบข้อมูลที่ได้รับจาก API
            setGoods(goods);
        };
        loadGoods();
    }, [navigation]);
  
    const GoodsItem = ({ item, index })=>(
        <TouchableOpacity 
            onPress={() => { navigation.navigate("GoodsDetail", { "id": item.id }); }} 
            style={{ backgroundColor: "white", margin: 7, flex: 1, elevation: 5, }} 
            >
            <View style={{ flexDirection: "row" }}>
                <Image style={{ flex: 1, resizeMode: "cover", aspectRatio: 1 / 1 }} source={{ uri: item.uri }} />
            </View>

            <View style={{ padding : 10 }}>
                <Text style={{ fontSize: 16 }}>{item.name}</Text>
                <View style={{ flexDirection: "row"}}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', marginRight: 5, color: '#caaddd' }}>{item.currency}</Text>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#caaddd' }}>{item.price}</Text>
                </View>
            </View>

        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={goods}
                refreshing={refresh}
                onRefresh={() => { loadGoods(); }}
                numColumns={2}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item, index }) => ( <GoodsItem item={item} /> ) }
            />
        </View>
    );
    
}