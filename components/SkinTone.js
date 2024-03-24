import React from 'react';
import { Text, View } from 'react-native';


export default function SkinTone() {
    return (
        <View style={{padding:10}}>
            
            {/* ส่วนที่ 1 */}
            <View style={{ flexDirection:"column"}}>
                <Text style={{ fontSize: 18, marginLeft:18, marginTop:10, marginBottom:10, color:'#caaddd' }}>ผิว</Text>
                <Text style={{ fontSize : 10, marginTop:-5, marginBottom:10, margin: 20}}>* สังเกตสีผิวหลังจากออกแดด</Text>
            {/* ส่วนที่ 2 */}    
                <View style={{flexDirection:"row", alignItems:'center', justifyContent:'space-around'}}>
                    <View style={{flexDirection:"row", width: 190, height: 60, backgroundColor:'#f1f1f1', 
                    borderRadius:10, 
                    padding:5, marginLeft:20, marginRight:10, marginBottom:10, 
                    justifyContent: 'center', alignItems: 'center', alignSelf:'center',}}> 
                        <Text style={{ fontSize : 14, textAlign:'center'}}>ผิวคล้ำ</Text>
                    </View>
                    <View style={{flexDirection:"row", width: 190, height: 60, backgroundColor:'#f1f1f1', 
                    borderRadius:10, 
                    padding:5, marginLeft:10, marginRight:20, marginBottom:10, 
                    justifyContent: 'center', alignItems: 'center', alignSelf:'center',}}>
                        <Text style={{ fontSize : 14, textAlign:'center' }}>ผิวแดง</Text>
                    </View>
                </View>
            </View>

        </View>


    );
}
