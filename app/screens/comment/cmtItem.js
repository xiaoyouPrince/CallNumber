import React from "react"
import { View, Text } from "react-native"

export default class CMTItem extends React.Component
{
    constructor(props){
        super(props)

        this.state = {
            name: props.user,
            content: props.content
        }
    }

    render(){
        return <View style={{borderColor:'#cccccc',borderWidth:1, justifyContent:"center", alignContent:"center", alignItems:'flex-start', width:200, height:200}}>
             <Text>评论人:{this.state.name}</Text>
             <Text>评论内容:{this.state.content}</Text>
        </View>
    }
}