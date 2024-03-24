import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

export default function PersonalColorTest() {
const onPressButton = () => {
    console.log("Button pressed");
};

    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const handleImageClick = (index) => {
        setSelectedImageIndex(index === selectedImageIndex ? null : index);
    };

    const skinToneImages = [
        { uri: require("../assets/skinTone/1_pale_ivory.jpg"), name: "Pale Ivory" },
        { uri: require("../assets/skinTone/2_warm_ivory.jpg"), name: "Warm Ivory" },
        { uri: require("../assets/skinTone/3_sand.jpg"), name: "Sand" },
        { uri: require("../assets/skinTone/4_rose_beige.jpg"), name: "Rose Beige" },
        { uri: require("../assets/skinTone/5_limestone.jpg"), name: "Limestone" },
        { uri: require("../assets/skinTone/6_beige.jpg"), name: "Beige" },
        { uri: require("../assets/skinTone/7-seinna.jpg"), name: "Seinna" },
        { uri: require("../assets/skinTone/8-amber.jpg"), name: "Amber" },
        { uri: require("../assets/skinTone/9-honey.jpg"), name: "Honey" },
        { uri: require("../assets/skinTone/10-band.jpg"), name: "Band" },
        { uri: require("../assets/skinTone/11-almond.jpg"), name: "Almond" },
        { uri: require("../assets/skinTone/12-bronze.jpg"), name: "Bronze" }
    ];

    const columns = 4;
    const rows = Math.ceil(skinToneImages.length / columns);
    return (
        <View style={{padding:10, marginTop:10}}>
            <Fontisto name="close-a" size={14} color="#caaddd" marginLeft={390}/>
            {/* ส่วนที่ 1 */}
            <View style={{ flexDirection:"column"}}>
                <Text style={{ fontSize: 18, marginLeft:18, marginTop:10, marginBottom:10, color:'#caaddd' }}>SKIN TONE</Text>
            {/* ส่วนที่ 2 */}    
            <View style={{flexDirection:"column", alignItems:'center'}}>
                    {[...Array(rows)].map((_, rowIndex) => (
                        <View key={rowIndex} style={{flexDirection:"row", marginBottom:10}}>
                            {[...Array(columns)].map((_, colIndex) => {
                                const index = rowIndex * columns + colIndex;
                                if (index >= skinToneImages.length) {
                                    return null;
                                }
                                return (
                                    <TouchableOpacity key={index} onPress={() => handleImageClick(index)}>
                                        <View style={{flexDirection:"column", alignItems:'center'}}>
                                            <View style={{ width: 90, height: 90, margin: 7,marginTop:-4, borderColor: selectedImageIndex === index ? '#caaddd' : 'transparent', borderWidth: selectedImageIndex === index ? 2 : 0 }}>
                                                <Image style={{ width: '100%', height: '100%' }} source={skinToneImages[index].uri} />
                                            </View>
                                                <Text style={{ position: 'absolute', bottom: 10, left: 15, right:15, color: 'black', fontSize: 7, textAlign:'center'}}>{skinToneImages[index].name}</Text>
                                            
                                        </View>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    ))}
                </View>
            </View>
            {/* ส่วนที่ 3 */}
            <View style={{ flexDirection:"column"}}>
                <Text style={{ fontSize: 18 , marginLeft:18, marginTop:10, marginBottom:10, color:'#caaddd'}}>VEIN TONE</Text>
                <View style={{flexDirection:"column", alignItems:'center', backgroundColor:'#f1f1f1', padding:5, marginLeft:10, marginRight:10, marginBottom:10}}>
                    <View style={{flexDirection:"row", alignItems:'center'}}> 
                        <Image style={{ width: 60, height: 60, marginRight:-10 }} source={require("../assets/veinTone/purple.png")} />
                        <Image style={{ width: 60, height: 60, marginLeft:-10 }} source={require("../assets/veinTone/blue.png")} />
                    </View>
                    <Text style={{ fontSize: 11, marginTop:3}}>Cool Skin Tone</Text>
                </View>
                <View style={{flexDirection:"column", alignItems:'center', backgroundColor:'#f1f1f1', padding:5, marginLeft:10, marginRight:10,marginBottom:10}}>
                    <View style={{flexDirection:"row", alignItems:'center'}}> 
                        <Image style={{ width: 60, height: 60, marginRight:-10}} source={require("../assets/veinTone/blue.png")} />
                        <Image style={{ width: 60, height: 60, marginLeft:-10 }} source={require("../assets/veinTone/bluegreen.png")} />
                        <Image style={{ width: 60, height: 60, marginLeft:-10 }} source={require("../assets/veinTone/green1.png")} />
                    </View>
                    <Text style={{ fontSize: 11, marginTop:3}}>Natural Skin Tone</Text>
                </View>
                <View style={{flexDirection:"column", alignItems:'center', backgroundColor:'#f1f1f1', padding:5, marginLeft:10, marginRight:10,marginBottom:10}}>
                    <View style={{flexDirection:"row", alignItems:'center'}}> 
                        <Image style={{ width: 60, height: 60, marginRight:-10}} source={require("../assets/veinTone/green2.png")} />
                        <Image style={{ width: 60, height: 60, marginLeft:-10 }} source={require("../assets/veinTone/yellowgreen.png")} />
                    </View>
                    <Text style={{ fontSize: 11, marginTop:3}}>Warm Skin Tone</Text>
                </View>
            </View>

            {/* ส่วนที่ 4 */}
            <TouchableOpacity onPress={onPressButton}>
                <View style={{ width: 150, height: 50, padding: 10, backgroundColor: "#caaddd", borderRadius: 15, justifyContent:'center', alignSelf:'center', marginTop:10 }}>
                    <Text style={{ fontSize: 20, textAlign: "center", color: 'black' }}>
                        RESULT
                    </Text>
                </View>
            </TouchableOpacity>

        </View>
    );
}
