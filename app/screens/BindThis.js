import React from "react"
import { View, Text, Button } from "react-native";



export default class BindThis extends React.Component{


    constructor(props){
        super(props);

        this.state = {
            name: props.name
        }

        // 一种绑定方式
        this.btnClick3 = this.btnClick3.bind(this);
    }


    render(){

        return <View style={{alignItems:"center"}}>
            <Text style={{marginTop:100, fontSize:30}}>你好，{this.state.name}</Text>
            <Text style={{paddingTop:10}}>绑定This并传参的几种方式</Text>

            {/* <Button title="点击我试试啊" onPress={this.btnClick}></Button> */}
            {/* <Button title='点击我啊' onPress={this.btnClick2.bind(this)}></Button> */}
            <Button title='点击我啊' onPress={this.btnClick3}></Button>

        </View>
    }

    // 最基本的this绑定，将函数设置为一个匿名闭包
    btnClick = () => {
        alert("昵称" + this.state.name);
    }

    // 第二种方法，在调用方法的时候调用 bind(this)
    btnClick2(){
        alert("昵称" + this.state.name);
    }

    // 第三种方法，在调用方法的时候调用 bind(this)
    btnClick3(){
        alert("昵称" + this.state.name);
    }
}


