import React from "react"
import CMTItem from "./cmtItem"
import CMTBox from "./cmtBox"
import { View, Text, ScrollView } from "react-native"

// 评论列表组件
export default class CMTList extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            list: [
                {
                    user:'xiaoyou', content:'哈哈哈，这是什么'
                },
                {
                    user:'xiaoyou33', content:'哈我怕了去 阿道夫'
                },
                {
                    user:'打你个', content:'我爱你，我的家'
                },
            ]
        }
    }

    render(){
        return <View style={{alignItems:"center", flex:1}}>
            <ScrollView style={{flex:1}}>
                
                {/* 标题 */}
                <Text style={{marginTop:100, fontSize:20}}>这是评论列表组件</Text>

                {/* 输入框 */}
                <CMTBox reload={this.reload}></CMTBox>

                {/* 这里根据评论数据，创建列表 */}
                {this.state.list.map((item,i)=>{
                    return <CMTItem key={i} {...item}></CMTItem>
                })}
            </ScrollView>

        </View>
    }

    reload(){
        alert("重新加载数据。。。")
    }

}