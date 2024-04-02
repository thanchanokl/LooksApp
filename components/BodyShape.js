import React, { useEffect, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
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
    <View style={{ padding: 10 }}>
        {/* Shoulders input */}
        <View style={{ backgroundColor: "white", margin: 20,marginTop:20, borderRadius: 10}}>
            <Text style={{ fontSize : 16, marginBottom:3 }}>Shoulders</Text>
            <Text style={{ fontSize : 10, marginTop:-5, marginBottom:5}}>* วัดรอบส่วนที่สูงที่สุดของไหล่</Text>
            <View style={{ flexDirection:"row"}}>
                <TextInput
                    style={{ fontSize : 14 , height: 35, width: 300,justifyContent: 'center', borderRadius: 10, backgroundColor:'#f1f1f1', color:'#d8d8d8', padding:10 }}
                    keyboardType="numeric"
                    placeholder="Enter your shoulders size"
                    value={shoulder.toString()}
                    onChangeText={(text) => setShoulder(parseFloat(text))}
                />
                <Text style={{ fontSize : 14, marginLeft:20, alignSelf:'center', color:'#caaddd'}}>Inches (in)</Text>
            </View>
        </View>

        {/* Bust input */}
        <View style={{ backgroundColor: "white", margin: 20, marginTop:0, borderRadius: 10 }}>
            <Text style={{ fontSize : 16, marginBottom:3 }}>Bust</Text>
            <Text style={{ fontSize : 10, marginTop:-5, marginBottom:5}}>* วัดรอบส่วนที่กว้างที่สุดของหน้าอก ควรจะกระชับ แต่ไม่แน่นจนเกินไป</Text>
            <View style={{ flexDirection:"row"}}>
                <TextInput
                    style={{ fontSize : 14 , height: 35, width: 300,justifyContent: 'center', borderRadius: 10, backgroundColor:'#f1f1f1', color:'#d8d8d8', padding:10 }}
                    keyboardType="numeric"
                    placeholder="Enter your bust size"
                    value={bust.toString()}
                    onChangeText={(text) => setBust(parseFloat(text))}
                />
                <Text style={{ fontSize : 14, marginLeft:20, alignSelf:'center', color:'#caaddd'}}>Inches (in)</Text>
            </View>
        </View>

        {/* Waist input */}
        <View style={{ backgroundColor: "white", margin: 20, marginTop:0, borderRadius: 10 }}>
            <Text style={{ fontSize : 16, marginBottom:3 }}>Waist</Text>
            <Text style={{ fontSize : 10, marginTop:-5, marginBottom:5}}>* วัดรอบส่วนที่เล็กที่สุดของเอว โดยทั่วไปจะอยู่เหนือสะดือ แต่อยู่ใต้ซี่โครง</Text>
            <View style={{ flexDirection:"row"}}>
                <TextInput
                    style={{ fontSize : 14 , height: 35, width: 300,justifyContent: 'center', borderRadius: 10, backgroundColor:'#f1f1f1', color:'#d8d8d8', padding:10 }}
                    keyboardType="numeric"
                    placeholder="Enter your waist size"
                    value={waist.toString()}
                    onChangeText={(text) => setWaist(parseFloat(text))}
                />
                <Text style={{ fontSize : 14, marginLeft:20, alignSelf:'center', color:'#caaddd'}}>Inches (in)</Text>
            </View>
        </View>

        {/* Hips input */}
        <View style={{ backgroundColor: "white", margin: 20, marginTop:0, borderRadius: 10 }}>
                <Text style={{ fontSize : 16, marginBottom:3 }}>Hips</Text>
                <Text style={{ fontSize : 10, marginTop:-5, marginBottom:5}}> * วัดรอบส่วนที่กว้างที่สุดของสะโพก</Text>
                <View style={{ flexDirection:"row"}}>
                    <TextInput
                        style={{ fontSize : 14 , height: 35, width: 300,justifyContent: 'center', borderRadius: 10, backgroundColor:'#f1f1f1', color:'#d8d8d8', padding:10 }}
                        keyboardType="numeric"
                        placeholder="Enter your hips size"
                        value={hips.toString()}
                        onChangeText={(text) => setHips(parseFloat(text))}
                    />
                    <Text style={{ fontSize : 14, marginLeft:20, alignSelf:'center', color:'#caaddd'}}>Inches (in)</Text>
                </View>
            </View>

      <Button title="RESET" onPress={reset} />
      <Button title="RESULT" onPress={save} />
    </View>
  );
}
