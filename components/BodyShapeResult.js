import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
import ShouldersStorage from "../storages/ShouldersStorage";
import BustStorage from "../storages/BustStorage";
import WaistStorage from "../storages/WaistStorage";
import HipsStorage from "../storages/HipsStorage";


export default function BodyShapeResult() {
  const [shoulder, setShoulder] = useState('');
  const [bust, setBust] = useState('');
  const [waist, setWaist] = useState('');
  const [hips, setHips] = useState('');

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
    };

    load();
  }, []);
  
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Your Body Data:</Text>
      <Text>Shoulders: {shoulder}</Text>
      <Text>Bust: {bust}</Text>
      <Text>Waist: {waist}</Text>
      <Text>Hips: {hips}</Text>
      <Button title="NEXT" onPress={() => navigation.navigate('PersonalColor')}/>
    </View>
  );
}
