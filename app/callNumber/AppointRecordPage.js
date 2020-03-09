import React from "react"
import { View, Button, SafeAreaView, ScrollView, StyleSheet, Text, Image, TouchableHighlight } from "react-native"
import { Actions } from "react-native-router-flux"


export default class AppointRecordPage extends React.Component{

    constructor(props){
        super(props)

        this.state={}
    }


    renderItem = (showBtn)=>{

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
        return<View style={{flex:1, backgroundColor:"#f6f6f6"}}>
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