import React from "react"
import { View, TextInput, Button, StyleSheet, Text} from "react-native";


export default class CMTBox extends React.Component{

    constructor(props)
    {
        super(props);

        this.state = {
            placeholder:"请输入您的评论",
            user:"sss",
            content:'dddd',
        }
    }


    render()
    {
        return<View style={styles.containerStyle}>
            <Text style={styles.userLabelStyle}>评论人</Text>
            {/* 输入框 */}
            <TextInput  
            placeholder={this.state.placeholder}
            style={styles.userInputStyle}
            onChangeText={ text => {
                this.setState({user: text})
            }}
            ></TextInput>

            <Text style={styles.cmtLabelStyle}>评论信息</Text>
            {/* 输入框 */}
            <TextInput
            placeholder={this.state.placeholder}
            style={styles.contentInputStyle}
            multiline="true"
            onChangeText={text => {
                this.setState({content: text})
            }}
            ></TextInput>

            {/* 按钮 */}
            <Button style={styles.postBtnStyle} title="发表评论" onPress={this.postComment}></Button>
        </View>
    }

    postComment = () => {
        // 
        // alert("点击发表评论")

        // 1. 将评论框中的最新一条评论放到拼接到列表最前边/后边
        // 2. 获取当前评论信息列表
        // 3. 重新加载评论列表
        // 4. 把最新的评论放到本地的评论数组中
        let cmtInfo = {
            user: this.state.user,
            content: this.state.content
        } 
        
        alert(JSON.stringify(cmtInfo))
        // 怎么本地存储，怎么刷新
        // 
    }
}

const styles = StyleSheet.create({

    containerStyle:{
        marginTop:5,
        marginBottom:5,
        flex:1,
        flexDirection:"column",

    },

    userLabelStyle:{
        marginTop:5,
        marginBottom:5
    },

    userInputStyle:{
        // width:400,
        height:30, 
        borderRadius:5, 
        borderColor:"#333333",
        borderWidth:1
    },

    cmtLabelStyle:{
        marginTop:5,
        marginBottom:5
    },

    contentInputStyle:{
        // width:400,
        height:100, 
        borderRadius:5, 
        borderColor:"#333333",
        borderWidth:1
    },

    postBtnStyle:{
        width:400,
        height:100, 
        borderRadius:5, 
        borderColor:"#333333",
        borderWidth:1
    }
})