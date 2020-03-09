import React from "react"
import { View, SafeAreaView, ScrollView, StyleSheet, Text, Image, TouchableHighlight } from "react-native"
import Swiper from 'react-native-swiper'

import {Actions} from "react-native-router-flux"

class ActionCell extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            icon: props.icon,
            title: props.title,
        }
    }

    render(){
        return <View style={cellStyles.containerStyle}>
            <Image source={require("../images/icon/1.png")} style={cellStyles.iconStyle}></Image>
            <Text style={cellStyles.titleStyle}>{this.state.title}</Text>
            <Image source={require("../images/icon/r.png")} style={cellStyles.arrawStyle}></Image>
        </View>
    }
}

const cellStyles = StyleSheet.create({
    containerStyle:{
        flex:1,
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems:"center",
        height:55,
        marginTop:20,
        marginLeft:25,
        marginRight:25,
        borderRadius:10,
        backgroundColor:"#f6f6f6"
    },

    iconStyle:{
        width:20,
        height:20,
        marginLeft:15
    },

    titleStyle:{
        flex:1,
        marginLeft:15,
        justifyContent:"flex-start"
    },

    arrawStyle:{
        marginRight:15,
    }
})







// 基础组件
export default class CallNumberBasePage extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state={}
    }

    render(){
        return <View style={{flex:1}}>

            <SafeAreaView style={{flex:1}}>
                <ScrollView>

                    {/* 轮播图 */}
                    <Swiper style={styles.wrapper} showsButtons={false}>

                        <View style={styles.slide1}>
                            <Text style={styles.text}>Hello Swiper</Text>
                        </View>

                        <View style={styles.slide2}>
                            <Text style={styles.text}>Beautiful</Text>
                        </View>

                        <View style={styles.slide3}>
                            <Text style={styles.text}>And simple</Text>
                        </View>
                    </Swiper>


                    {/* 四个功能导航入口 */}
                    <TouchableHighlight onPress={()=>{
                        Actions.push("onlineApoint")
                    }} underlayColor={"white"}>
                        <ActionCell title="在线预约" icon="../images/icon/1.png"></ActionCell>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>{
                        Actions.push("appointRecord")
                    }} underlayColor={"white"}>
                        <ActionCell title="预约取号" icon="../images/icon/1.png"></ActionCell>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={()=>{
                        alert("点击了在线预约")
                        Actions.push("callNumberScene")
                    }} underlayColor={"white"}>
                        <ActionCell title="现场取号" icon="../images/icon/1.png"></ActionCell>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={()=>{
                        Actions.push("queueCheck")
                    }} underlayColor={"white"}>
                        <ActionCell title="排队查询" icon="../images/icon/1.png"></ActionCell>
                    </TouchableHighlight>

                </ScrollView>
                        
            </SafeAreaView>
            
        </View>
    }
}



const styles = StyleSheet.create({
    wrapper: {
        flex:1,
        height:200
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })