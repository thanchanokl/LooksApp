import React, { useEffect, useState } from "react";
import { Button, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ShouldersStorage from "../storages/ShouldersStorage";
import BustStorage from "../storages/BustStorage";
import WaistStorage from "../storages/WaistStorage";
import HipsStorage from "../storages/HipsStorage";

export default function BodyShape() {
  const [shoulder, setShoulder] = useState(0);
  const [bust, setBust] = useState(0);
  const [waist, setWaist] = useState(0);
  const [hips, setHips] = useState(0);

  const navigation = useNavigation();

  const load = async () => {
    console.log("load")
    let s = await ShouldersStorage.readItem();
    setShoulder(s);
    let b = await BustStorage.readItem();
    setBust(b);
    let w = await WaistStorage.readItem();
    setWaist(w);
    let h = await HipsStorage.readItem();
    setHips(h);

    console.log(s,b,w,h);
  };

  useEffect(()=>{ load(); },[]);

  const save = async()=>{    
    console.log("Save");
    ShouldersStorage.writeItem(shoulder);
    BustStorage.writeItem(bust);
    WaistStorage.writeItem(waist);
    HipsStorage.writeItem(hips);
    
    navigation.navigate('BodyShapeResult');
  };

  const reset = () => {
    console.log("Reset");
    setShoulder('');
    setBust('');
    setWaist('');
    setHips('');
  };

  return (
    <ScrollView>
    <View style={{ padding: 10, backgroundColor: "white" }}>
        <Text style={{ fontSize: 18, marginLeft:18, marginTop:10, marginBottom:10, color:'#caaddd' }}>Step 1 วัดสัดส่วนของคุณ</Text>
        <View style={{ alignSelf: 'center' }}>
            <Image style={{ width:160, height:160 }} source={require("../assets/bodyShape/measure.png")} />
        </View>
        {/* Shoulders input */}
        <View style={{ margin: 20,marginTop:10, borderRadius: 10}}>
            <Text style={{ fontSize : 16, marginBottom:3 }}>Shoulders</Text>
            <Text style={{ fontSize : 10, marginTop:-5, marginBottom:5}}>* วัดความกว้างจากปุ่มไหล่หนึ่งข้างไปอีกข้างหนึ่ง</Text>
            <View style={{ flexDirection:"row"}}>
                <TextInput
                    style={{ fontSize : 14 , height: 45, width: 300, justifyContent: 'center', borderRadius: 10, backgroundColor:'#f1f1f1', padding:10 }}
                    keyboardType="numeric"
                    placeholder="Enter your shoulders size"
                    value={shoulder.toString()}
                    onChangeText={(text) => setShoulder(parseFloat(text))}
                />
                <Text style={{ fontSize : 14, marginLeft:20, alignSelf:'center', color:'#caaddd'}}>Inches (in)</Text>
            </View>
        </View>

        {/* Bust input */}
        <View style={{ margin: 20, marginTop:0, borderRadius: 10 }}>
            <Text style={{ fontSize : 16, marginBottom:3 }}>Bust</Text>
            <Text style={{ fontSize : 10, marginTop:-5, marginBottom:5}}>* วัดรอบส่วนที่กว้างที่สุดของหน้าอก</Text>
            <View style={{ flexDirection:"row"}}>
                <TextInput
                    style={{ fontSize : 14 , height: 45, width: 300, justifyContent: 'center', borderRadius: 10, backgroundColor:'#f1f1f1', padding:10 }}
                    keyboardType="numeric"
                    placeholder="Enter your bust size"
                    value={bust.toString()}
                    onChangeText={(text) => setBust(parseFloat(text))}
                />
                <Text style={{ fontSize : 14, marginLeft:20, alignSelf:'center', color:'#caaddd'}}>Inches (in)</Text>
            </View>
        </View>

        {/* Waist input */}
        <View style={{ margin: 20, marginTop:0, borderRadius: 10 }}>
            <Text style={{ fontSize : 16, marginBottom:3 }}>Waist</Text>
            <Text style={{ fontSize : 10, marginTop:-5, marginBottom:5}}>* วัดรอบส่วนที่เล็กที่สุดของเอว</Text>
            <View style={{ flexDirection:"row"}}>
                <TextInput
                    style={{ fontSize : 14 , height: 45, width: 300, justifyContent: 'center', borderRadius: 10, backgroundColor:'#f1f1f1', padding:10 }}
                    keyboardType="numeric"
                    placeholder="Enter your waist size"
                    value={waist.toString()}
                    onChangeText={(text) => setWaist(parseFloat(text))}
                />
                <Text style={{ fontSize : 14, marginLeft:20, alignSelf:'center', color:'#caaddd'}}>Inches (in)</Text>
            </View>
        </View>

        {/* Hips input */}
        <View style={{ margin: 20, marginTop:0, borderRadius: 10 }}>
                <Text style={{ fontSize : 16, marginBottom:3 }}>Hips</Text>
                <Text style={{ fontSize : 10, marginTop:-5, marginBottom:5}}>* วัดรอบส่วนที่กว้างที่สุดของสะโพก</Text>
                <View style={{ flexDirection:"row"}}>
                    <TextInput
                        style={{ fontSize : 14 , height: 45, width: 300, justifyContent: 'center', borderRadius: 10, backgroundColor:'#f1f1f1', padding:10 }}
                        keyboardType="numeric"
                        placeholder="Enter your hips size"
                        value={hips.toString()}
                        onChangeText={(text) => setHips(parseFloat(text))}
                    />
                    <Text style={{ fontSize : 14, marginLeft:20, alignSelf:'center', color:'#caaddd'}}>Inches (in)</Text>
                </View>
            </View>

    <View style={{ flexDirection:"row", margin: 20, marginTop:0, borderRadius: 10, justifyContent: 'center' }}> 
        <TouchableOpacity onPress={reset}>
            <View style={{ width: 140, height: 50, margin: 10, backgroundColor: "#caaddd", borderRadius: 15, justifyContent:'center', alignSelf:'center', marginTop:10 }}>
            <Text style={{ fontSize: 18, textAlign: "center", color: 'black' }}>RESET</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={save}>
            <View style={{ width: 140, height: 50, margin: 10, backgroundColor: "#caaddd", borderRadius: 15, justifyContent:'center', alignSelf:'center', marginTop:10 }}>
            <Text style={{ fontSize: 18, textAlign: "center", color: 'black' }}>RESULT</Text>
            </View>
        </TouchableOpacity>
    </View>
    </View>
    </ScrollView>
  );
}
