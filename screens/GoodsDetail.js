import React, { useEffect, useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import GoodsService from "../services/GoodsService";

export default function GoodsDetail() {
    
    const navigation = useNavigation();
    const route = useRoute();   
    const [goods, setGoods] = useState({
        id: "",
        name: "",
        category: "",
        type: "",
        description: "",
        price: "",
        currency: "",
        uri: ""
    });
    

    //DELETE POPUP      
    const deleteGoods = async () => {
        const { id } = route.params;
        //REMOVE BOOK
        await GoodsService.destroyItem({"id":id});
        //REDIRECT TO
        navigation.navigate("Goods");
      }; 
      const onLoad = async () => {
        navigation.setOptions({ headerRight: () => ( <TopRightMenu b={b} /> ) });              
          const { id } = route.params;
        let b = await GoodsService.getItemDetail({"id":id});
          setGoods(b);
      };
      useEffect(() => { onLoad(); }, []);
 
    const confirmDelete = () => {    
        return Alert.alert(
            "ยืนยันการลบ?",
            "คุณแน่ใจหรือไม่ว่าจะลบรายการนี้?",
            [
                { text: "ยกเลิก", },
                { text: "ยืนยัน", onPress: () => { deleteGoods(); }, },
            ]
        );
    };


    // TOP RIGHT MENU
    const TopRightMenu = ({b})=>(
        <View style={{ flexDirection: "row", width: 100, justifyContent: "space-around" }}>
            <TouchableOpacity 
                 onPress={() => { confirmDelete(); }}
                >
                <FontAwesome name="trash" size={30} />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <TouchableOpacity onPress={() => { setModalVisible(true); }} >
                <View style={{ flexDirection: "row" }}>
                    <Image style={{ flex: 1, resizeMode: "contain", aspectRatio: 1 / 1 }} source={{ uri: goods.uri }} />
                </View>
            </TouchableOpacity>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 20, marginVertical: 10 }}> {goods.name} </Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: "green", fontSize: 20 }}>{goods.price}</Text>
                    <Text style={{ paddingTop: 6 }}> บาท</Text>
                </View>
            </View>            
        </View>
    );
}