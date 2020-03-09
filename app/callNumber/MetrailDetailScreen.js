import React, { Component } from "react"
import { View, SafeAreaView, ScrollView, Button, Text } from "react-native"


export default class MetrailDetailScreen extends Component{
    constructor(props){
        super(props)

        this.state={
            businessType:props.businessType, // 默认是0表示未选择，1，2，3 分别代表三个业务
            businessName:props.businessName, // 本页面显示的业务名字
        }
    }



    render(){
        return<View style={{flex:1, backgroundColor:"#f6f6f6"}}>
        <SafeAreaView style={{flex:1}}>
            <ScrollView>

                {/* 头 */}
                <View style={{height:155, backgroundColor:"#fff"}}>
                    <Text style={{fontSize:22, marginHorizontal:20, marginTop:20}}>身份证</Text>
                    <Text style={{fontSize:22, marginHorizontal:20, marginTop:20}}>配偶身份证</Text>
                    <Text style={{fontSize:22, marginHorizontal:20, marginTop:20}}>户口本</Text>
                    {/* <View style={{flex:1, justifyContent:"flex-start", flexDirection:"row",marginTop:10, marginBottom:10, marginHorizontal:15}}>
                        <Button title="资料详情" onPress={()=>{

                            // 进入资料详情页面
                            
                            
                        }}></Button>
                    </View> */}

                </View>

            </ScrollView>
        </SafeAreaView>
        </View>
    }
}