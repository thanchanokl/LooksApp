import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import ShouldersStorage from "../storages/ShouldersStorage";
import BustStorage from "../storages/BustStorage";
import WaistStorage from "../storages/WaistStorage";
import HipsStorage from "../storages/HipsStorage";
import hourglass from "../assets/bodyShape/hourglass.png";


export default function BodyShapeResult() {
  const [shoulder, setShoulder] = useState('');
  const [bust, setBust] = useState('');
  const [waist, setWaist] = useState('');
  const [hips, setHips] = useState('');
  const [description, setDescription] = useState('');
  // Inside the component function
  const [shapeImage, setShapeImage] = useState(null);

  const navigation = useNavigation();

  const calculateBodyShape = () => {
    // Convert the values to numbers
    const s = parseFloat(shoulder);
    const b = parseFloat(bust);
    const w = parseFloat(waist);
    const h = parseFloat(hips);

    // Calculate percentage differences
    const shoulderPercentDiff = Math.abs(s - h) / ((s + h) / 2) * 100;
    const waistPercentDiff = Math.abs(w - h) / h * 100;

    // Initialize the description
    let bodyShapeDescription = '';

    // Check for rectangle shape
    if (shoulderPercentDiff <= 5 && waistPercentDiff <= 25) {
      bodyShapeDescription = "รูปร่างแบบทรงกระบอก";
    }
    // Check for hourglass shape
    else if (w < (0.75 * s) && w < (0.75 * h) && shoulderPercentDiff <= 5) {
      bodyShapeDescription = "รูปร่างแบบนาฬิกาทราย";
      // Check for top hourglass or bottom hourglass
      // if (b > h) {
      //   bodyShapeDescription += ": Top Hourglass"; 
      // } else if (b < h) {
      //   bodyShapeDescription += ": Bottom Hourglass"; 
      // }
    }
    // Check for triangle shape
    else if (h > (s + (s * 0.05))) {
      bodyShapeDescription = "รูปร่างแบบสามเหลี่ยม หรือ รูปร่างแบบลูกแพร์";
    }
    // Check for inverted triangle shape
    else if (s > (h + (h * 0.05))) {
      bodyShapeDescription = "รูปร่างแบบสามเหลี่ยมคว่ำ";
    }
    // Check for round shape
    else if (w > h && s <= (w + (w * 0.05))) {
      bodyShapeDescription = "รูปร่างแบบทรงกลม หรือ รูปร่างแบบลูกแอปเปิ้ล";
    }

    // Set the state for the description
    setDescription(bodyShapeDescription);

    // Image function
switch (bodyShapeDescription.toLowerCase()) {
  case 'Top Hourglass':
    setShapeImage(hourglass);
    break;
  case 'Hourglass':
    setShapeImage(hourglass);
    break;
  case 'Bottom Hourglass':
    setShapeImage(hourglass);
    break;
  // Add cases for other shapes as needed
}
  };

  useEffect(() => {
    const load = async () => {
      const s = await ShouldersStorage.readItem();
      setShoulder(s);
      const b = await BustStorage.readItem();
      setBust(b);
      const w = await WaistStorage.readItem();
      setWaist(w);
      const h = await HipsStorage.readItem();
      setHips(h);

      // Call the function to calculate body shape
      calculateBodyShape();
    };

    load();
  }, []);

  useEffect(() => {
    calculateBodyShape();
  }, [shoulder, bust, waist, hips]);

  return (
    <View style={{  flex: 1, padding: 10, backgroundColor: "white" }}>
        <Text style={{ fontSize: 18, marginLeft:18, marginTop:10, marginBottom:10, color:'#caaddd' }}>Step 2 วิเคราะห์รูปร่างของคุณ</Text>

      {shapeImage && (
      <Image source={shapeImage} style={{ width: 200, height: 200 }} />
      )}

      <View style={{ flex : 3 , flexDirection : 'row' , justifyContent : 'center', alignItems : 'center'}}>
        <Text> คุณมี </Text>
        <Text>{description}</Text>
      </View>

      <View style={{ flex : 1 , flexDirection : 'column' , justifyContent : 'center', alignItems : 'center'}}>
          <Text>Shoulders: {shoulder}</Text>
          <Text>Bust: {bust}</Text>
          <Text>Waist: {waist}</Text>
          <Text>Hips: {hips}</Text>
        </View>

      

      {/* <View style={{width: 150, height: 50, margin: 10, borderRadius: 15, justifyContent:'center', alignSelf:'center', marginTop:10}}>
        <Button title="NEXT" color="#caaddd"  onPress={() => navigation.navigate('PersonalColor')}/>
      </View> */}
      
      <TouchableOpacity onPress={() => navigation.navigate('PersonalColor')}>
        <View style={{ width: 150, height: 50, margin: 10, backgroundColor: "#caaddd", borderRadius: 15, justifyContent:'center', alignSelf:'center', marginTop:10 }}>
          <Text style={{ fontSize: 20, textAlign: "center", color: 'black' }}>NEXT</Text>
        </View>
      </TouchableOpacity>
    
    </View>


  );
}