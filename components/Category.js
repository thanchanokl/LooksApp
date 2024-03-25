import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Category() {
    return (
        <View style={{padding:10}}>
            
            {/* ส่วนที่ 1 */}
            <View style={{ flexDirection:"column"}}>
                <Text style={{ fontSize: 18, marginLeft:18, marginTop:10, marginBottom:10, color:'#caaddd', textAlign:'center'}}>Shop by Category</Text>
                
            {/* ส่วนที่ 2 */}    
            <View style={{ flexDirection:"row", justifyContent:'space-evenly'}}>
                <View style={{flexDirection:"column", alignItems:'center'}}>
                    <View style={{width: 60, height: 60, backgroundColor:'#f1f1f1', 
                    borderRadius:90, 
                    marginLeft:20, marginRight:10, marginBottom:5, 
                    justifyContent: 'center', alignItems: 'center', alignSelf:'center'}}> 
                        <Image style={{ width: '100%', height: '100%', alignSelf:'center',borderRadius:90}} source={require("../assets/goods/KnittedShortSleeveTop.jpg")} />
                    </View>
                        <Text style={{ fontSize : 14, textAlign:'center', color:'#caaddd'}}>Tops</Text>
                </View>
                <View style={{flexDirection:"column", alignItems:'center'}}>
                    <View style={{width: 60, height: 60, backgroundColor:'#f1f1f1', 
                    borderRadius:90, 
                    marginLeft:20, marginRight:10, marginBottom:5, 
                    justifyContent: 'center', alignItems: 'center', alignSelf:'center'}}>
                        <Image style={{ width: '100%', height: '100%', alignSelf:'center',borderRadius:90}} source={require("../assets/goods/SolidBuckleUpMiniSkirt.jpg")} />
                    </View>
                        <Text style={{ fontSize : 14, textAlign:'center', color:'#caaddd'}}>Bottoms</Text>
                </View>
                <View style={{flexDirection:"column", alignItems:'center'}}>
                    <View style={{width: 60, height: 60, backgroundColor:'#f1f1f1', 
                    borderRadius:90, 
                    marginLeft:20, marginRight:10, marginBottom:5, 
                    justifyContent: 'center', alignItems: 'center', alignSelf:'center'}}> 
                        <Image style={{ width: '100%', height: '100%', alignSelf:'center',borderRadius:90}} source={require("../assets/goods/DaisyDress.jpg")} />
                    </View>
                        <Text style={{ fontSize : 14, textAlign:'center', color:'#caaddd'}}>Dresses</Text>
                </View>

            </View>


                

            </View>
            
        </View>


    );
}
