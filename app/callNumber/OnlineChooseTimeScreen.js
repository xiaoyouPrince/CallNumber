import React, { Component } from "react"
import { View, SafeAreaView, ScrollView, Button, Text, Image, StyleSheet, Dimensions} from "react-native"
import { Actions } from "react-native-router-flux"
import { TouchableHighlight } from "react-native-gesture-handler"
import {Calendar, CalendarList, Agenda} from 'react-native-calendars'



export default class OnlineChooseTimeScreen extends Component{
    constructor(props){
        super(props)

        this.state={
            businessType:props.businessType, // 默认是0表示未选择，1，2，3 分别代表三个业务
            businessName:props.businessName, // 本页面显示的业务名字
            chooseTime:"选择时间 >",  // 选择时间
        }
    }

    _renderChooseTimeView = ()=>{

        // 系统宽高
        const {height, width} = Dimensions.get('window');

        const chooseTimeStyle = StyleSheet.create({
            container:{
                flex:1,
                borderRadius:15,
                backgroundColor:"#fff",
                marginVertical:15,
                marginHorizontal:15,
            },
            calendar:{
                flex:1,
                borderRadius:1,
                backgroundColor:"white",
                marginVertical:15,
                marginHorizontal:15,
                alignContent:"center",
                borderColor:"red",
                borderWidth:0.5
            },
            line: {
                width:width - 60,
                height:0.5,
                marginHorizontal:15,
                backgroundColor:"lightgray"
            },
            chooseTimeBtn:{
                flex:1,
                flexDirection:"row",
                justifyContent:"space-between",
                borderRadius:15,
                backgroundColor:"#fff",
                marginVertical:15,
                marginHorizontal:15,
            }
        })

        // 选择时间
        return <View style = {chooseTimeStyle.container}>

            <Calendar style = {chooseTimeStyle.calendar}></Calendar>
            <View style = {chooseTimeStyle.line}></View>

            <TouchableHighlight underlayColor = "red" onPress = {()=>{
                alert("用户点击了选择时间");
            }}>
                <View style = {chooseTimeStyle.chooseTimeBtn}>
                    <Text>选择时间</Text>
                    <Text style = {{color:"lightgray"}}>{this.state.chooseTime}</Text>
                </View>
            </TouchableHighlight>
            

        </View>

    }



    render(){

        // 屏幕高度


        return<View style={{flex:1, backgroundColor:"#f6f6f6"}}>
        <SafeAreaView style={{flex:1}}>
            <ScrollView style={{flex:1, height:"100%"}}>
                {/* contentView */}
                <View style = {{flex:1, justifyContent:"space-between", height:"100%", backgroundColor:"#fff"}}>
                    {/* 头 */}
                    <View style={{flex:1, backgroundColor:"#fff", justifyContent:"space-between", alignContent:"stretch"}}>
                        <View>
                            <Text style={{fontSize:22, marginHorizontal:20, marginTop:20, fontWeight:"bold"}}>所选业务类型</Text>
                            <Text style={{fontSize:15, marginHorizontal:20, marginTop:10}}>{this.state.businessType} + {this.state.businessName}</Text>
                            <Text style={{fontSize:22, marginHorizontal:20, marginTop:20, fontWeight:"bold"}}>需要携带清单</Text>
                            <View style={{flex:1, justifyContent:"flex-start", flexDirection:"row",marginTop:10, marginBottom:10, marginHorizontal:15}}>
                                <TouchableHighlight onPress = {()=>{
                                    // 进入资料详情页面
                                    Actions.push("metrailDetail")
                                }}
                                underlayColor = "#fff">
                                    <View style = {{
                                        width: 100,
                                        height: 30,
                                        borderWidth: 1,
                                        borderColor: "red",
                                        borderRadius: 15,
                                        justifyContent:"center",
                                        alignItems: "center"
                                    }}>
                                        <Text style = {{
                                            color: "red",
                                            fontSize: 14
                                        }}
                                        >查看详情 ></Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                    </View>
                    </View>
                </View>
                {/* 中间选择时间 */}
                {this._renderChooseTimeView()}
            </ScrollView>

            {/* 底部预约按钮 */}
            <TouchableHighlight onPress = {()=>{

                // 进入资料详情页面
                Actions.pop()
                // 重新加载页面
                Actions.reset("onlineApoint",{businessType:0});
            }}
            underlayColor="white">
                <View style={{height:40, 
                    marginVertical:10, 
                    marginHorizontal:15, 
                    backgroundColor:"red",
                    borderRadius:20,
                    justifyContent:"center",
                    alignItems:"center"}}>
                    <Text style = {{color:"white", fontSize:15}}>预约</Text>
                </View>

            </TouchableHighlight>
        </SafeAreaView>
        </View>
    }
}