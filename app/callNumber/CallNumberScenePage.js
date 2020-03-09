import React, { Component } from "react"
import { View, Text } from "react-native"

export default class CallNumberScenePage extends Component
{

    // componentWillMount(){

    //     // 请求数据
    //     let name = this.getMoviesFromApiAsync()
        
    //     alert(JSON.stringify(name));

    //     console.error(JSON.stringify(name))
    // }

    // getMoviesFromApiAsync() {
    //     return fetch('http://127.0.0.1/json')
    //       .then((response) => response.json())
    //       .then((responseJson) => {
    //         console.error(responseJson);
    //         return responseJson;
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //       });
    // }



    render(){

      return<View  style={{flexDirection:"row", flexWrap:"wrap"}}> 

        <View style={{width:"30%"}}>
          <Text>你好，我是第一个</Text>
        </View>

        <View style={{width:"30%"}}>
          <Text>你好，我是第二个</Text>
        </View>

        <View style={{width:"30%"}}>
          <Text>你好，我是第三个</Text>
        </View>

        <View>
          <Text>你好，我是第四个</Text>
        </View>

      </View>
    }
}