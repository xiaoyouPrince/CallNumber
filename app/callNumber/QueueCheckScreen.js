import React from "react"
import TypeScript from "type-check"
import { View, Button, SafeAreaView, ScrollView, StyleSheet, Text, Image, TouchableHighlight, ImageBackground, Dimensions } from "react-native"
import { Actions } from "react-native-router-flux"


export default class QueueCheckScreen extends React.Component{

    constructor(props){
        super(props)

        this.state={}
    }

    _renderKeyValueView = (key, value)=>{

        key: String
        value: String

        return<View style={{flexDirection:"row", justifyContent:"space-evenly", marginTop:10}}>
            <Text style = {{width:"50%", color:"#999999"}}>{key}</Text>
            <Text style = {{width:"50%", color:"#333333"}}>{value}</Text>
        </View>
    }


    renderItem = (showBtn)=>{

        // 基本参数设置
        // cell背景图片size
        const {height, width} = Dimensions.get('window');
        let bgWidth = width - 30;
        let bgHeigth = bgWidth / 3 * 2;

        // 人数 序号 业务名称 手机号 预约时间 取号时间
        let personLeft = 12;
        let currentNumber = "A0009";
        let busiName = "新入职业务 - 入职 - 雇员证"
        let phoneNum = "18211077994"
        let appointTime = "2019:12:31 - 2020:1:2"
        let fetchTime = "2020:1:1 10:19:29"

        return<View>
            <ImageBackground 
            source = {require("../images/icon/queue_bg.png")} 
            style = {{ marginHorizontal:15, marginVertical:15, width:bgWidth, height:bgHeigth}}>
                <View style = {{alignItems:"center", marginVertical:30}}>
                    <Text style = {{color:"red", fontSize:22, fontWeight:"bold"}}>{personLeft}<Text style = {{fontSize:12}}>人</Text></Text>
                    <Text style = {{fontSize:12}}>(等待人数)</Text>
                    <View style = {{flexDirection:"row", marginTop:5, alignItems:"center"}}>
                        <Text style = {{fontSize:12, marginTop:3, fontWeight:"bold", justifyContent:"center"}}>您的当前编号: </Text>
                        <Text style = {{fontSize:25, fontWeight:"bold", color:"black"}}>{currentNumber}</Text>
                    </View>
                </View>

                {/* 下面部分 */}
                <View style = {{marginHorizontal:40}}>
                    <Text style={{color:"black", fontSize:19, fontWeight:"bold"}}>{busiName}</Text>
                    {this._renderKeyValueView("预约手机",phoneNum)}
                    {this._renderKeyValueView("预约时间",appointTime)}
                    {this._renderKeyValueView("取号时间",fetchTime)}
                </View>

            </ImageBackground>
        </View>




        if (showBtn) {
            return<View style={{flex:1, borderRadius:10, backgroundColor:"white", marginHorizontal:20,marginTop:15}}>
            <Text style={{marginHorizontal:15, marginTop:10, fontSize:22, color:"red"}}>已经预约</Text>
            <Text style={{marginHorizontal:15, marginTop:10, fontSize:15, color:"#000"}}>入职业务 - 新入职</Text>
            <Text style={{marginHorizontal:15, marginTop:10, fontSize:15, color:"#000"}}>18211077997</Text>
            <Text style={{marginHorizontal:15, marginTop:10, marginBottom:10, fontSize:15, color:"#000"}}>2020年03月03日08:44:50</Text>
            
            <View style={{flexDirection:"row", justifyContent:"center", }}>
                <Button   title="确认预约" onPress={()=>{

                // 进入资料详情页面
                Actions.pop({businessType:0},true)


                }}></Button>
                <Button title="取消预约" onPress={()=>{

                // 进入资料详情页面
                Actions.pop({businessType:0},true)


                }}></Button>
            </View>
         </View>
        }


        return<View style={{flex:1, borderRadius:10, backgroundColor:"white", marginHorizontal:20,marginTop:15}}>
            <Text style={{marginHorizontal:15, marginTop:10, fontSize:22, color:"red"}}>已经预约</Text>
            <Text style={{marginHorizontal:15, marginTop:10, fontSize:15, color:"#000"}}>入职业务 - 新入职</Text>
            <Text style={{marginHorizontal:15, marginTop:10, fontSize:15, color:"#000"}}>18211077997</Text>
            <Text style={{marginHorizontal:15, marginTop:10, marginBottom:10, fontSize:15, color:"#000"}}>2020年03月03日08:44:50</Text>
         </View>
    }


    render(){
        return<View style={{flex:1, backgroundColor:"#f1f1f1"}}>
            <SafeAreaView style={{flex:1}}>
                <ScrollView>

                    {this.renderItem(true)}
                    {this.renderItem()}
                    {this.renderItem()}
                    {this.renderItem(true)}
                    {this.renderItem()}
                    {this.renderItem()}

                </ScrollView>
            </SafeAreaView>
        </View>
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"green",
        height:160
    }
})