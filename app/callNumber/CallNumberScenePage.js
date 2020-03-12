import React from "react"
import { View, SafeAreaView, ScrollView, StyleSheet, Text, Image, TouchableHighlight, Button, ActivityIndicator } from "react-native"
import { color } from "react-native-reanimated"
import { Actions, StackProps } from "react-native-router-flux"

const REQUEST_URL = "http://localhost/json";


export default class OnlineAppointScreen extends React.Component{

    constructor(props){
        super(props)

        this.state={

            
            businessType:props.businessType, // 默认是0表示未选择，1，2，3 分别代表三个业务
            hasChoosen:false, // 是否已经选择了业务
            businessList:[],
            data: [{
              deptName:"第一部分"
            }],
            loaded: false,  // 是否已经加装数据
        }

        // 绑定this
        this._entryBtnClick = this._entryBtnClick.bind(this)
    }

    componentWillMount()
    {
      // 请求数据
      this.fetchData()

    }

    fetchData = ()=>{
      fetch(REQUEST_URL)
        .then(response => response.json())
        .then(responseData => {

          this.setState({
            // data: this.state.data.concat(responseData.data),
            loaded: true
          });
        });
    }




    // 点击入职任务处理
    _entryBtnClick(businessType){
        // alert("入职业务点击");

        this.setState({
            businessType:businessType,
            businessList:[]})
    }


    // 绘制一个 HeaderView
    renderHeaderView = () => {
        return <View style={styles.adcontainer}>
            <Image source={require("../images/icon/logo.png")}
                style={{marginHorizontal:20,
                marginTop:20}}
            ></Image>
            <View style={{flexDirection:"row"}}>
                <Image source={require("../images/icon/wx.png")}
                    style={{marginHorizontal:20,
                    marginTop:20}}
                ></Image>
                <View>
                    <Text style={{marginTop:17, fontSize:20}}>温馨提示：</Text>
                    <Text style={{marginTop:11, fontSize:13}}>地址： 北京市朝阳区朝阳门南大街14号</Text>
                    <Text style={{marginTop:6, fontSize:13}}>电话： 86-10-85692930</Text>
                    <Text style={{marginTop:7, fontSize:13, color:"red"}} >前往大厅办理业务时请您携带您的身份证以及相关材料</Text>
                </View>
            </View>
        </View>
    }

    // 绘制返回按钮
    renderBackBtn = () => {
        return <View style={{flex:1, justifyContent:"flex-start", flexDirection:"row", marginVertical:25,}}>
            <View style={{ borderColor:"red", borderRadius:18, width:80, height:36, borderWidth:1 , marginHorizontal:25}}>
                <Button title="上一步" onPress={()=>{
                    this.setState({
                        businessType:0,
                        businessList:null
                    })
                }}
                color = "red"
                style = {{flex:1}}></Button>
            </View>
        </View>
    }

    // 绘制业务列表
    renderListView = (title) => {

        let cellStyles = StyleSheet.create({
            containerStyle:{
                flex:1,
                flexDirection:"row",
                justifyContent: "space-between",
                alignItems:"center",
                height:55,
                marginTop:0,
                marginLeft:25,
                marginRight:25,
                borderRadius:10,
                backgroundColor:"white"
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

        return <View style={{flex:1, justifyContent:"flex-start", flexDirection:"column",marginTop:0, marginBottom:10}}>
            <TouchableHighlight style={{flex:1}} onPress={()=>{
                alert("点击了" + title)

                let typeString = (this.state.businessType === 1) ? "入职业务" : (this.state.businessType === 2) ? "在职业务" : "离职业务";

                Actions.push("appointComfirm",{
                    businessType:typeString,
                    businessName:title
                })
            }}>
                <View style={cellStyles.containerStyle}>
                    <Image source={require("../images/icon/1.png")} style={cellStyles.iconStyle}></Image>
                    <Text style={cellStyles.titleStyle}>{title}</Text>
                    <Image source={require("../images/icon/r.png")} style={cellStyles.arrawStyle}></Image>
                </View>
            </TouchableHighlight>
        </View>
    }

    // 绘制有业务列表的页面
    renderBusinessView() {

      // 这里要根据是第几个业务来看
      if(this.state.businessType === 1)
      {
        alert(this.state.data);
      }

      



        return<View style={{flex:1, backgroundColor:"#f6f6f6"}}>
        <SafeAreaView style={{flex:1}}>
            <ScrollView>
                {this.renderHeaderView()}
                {this.renderBackBtn()}

                {this.state.data.map((item, index)=>{
                    {this.renderListView(item.deptName)}
                })}
                
                {/* 这里放置对应数量的二级业务 */}
                {/* {this.renderListView("任务1")}
                {this.renderListView("任务2")}
                {this.renderListView("任务3")}
                {this.renderListView("任务4")}
                {this.renderListView("任务5")}
                {this.renderListView("任务6")}
                {this.renderListView("任务7")}
                {this.renderListView("任务8")} */}
            </ScrollView>
        </SafeAreaView>
        </View>
    }

    // 加装View
    renderLoadingView(message) {

      let realMessage = message?message:"正在加载中...";
      return (
        <View style={{ flex:1, flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: "#F5FCFF"}}>
          <Text>{realMessage}</Text>
        </View>
      );
    }

    render(){

        // 先看是否下载了，数据
        if (!this.state.loaded) {
          return this.renderLoadingView();
        }

        // 用户已近选择了一级业务类型,根据业务类型加载对应的
        if(this.state.businessType === 1){
          alert(this.state.businessList)
          return this.renderBusinessView()
        }

        if(this.state.businessType === 2){
            if(this.state.businessList){
                return<View>
                    <Text>这是在职业务的列表</Text>
                </View>
            }
        }

        if(this.state.businessType === 3){
            if(this.state.businessList){
                return<View>

                    <Button onPress={()=>{
                        // 用户点击返回
                        

                    }} title="返回"
                    style={{
                        marginTop:20,
                        marginBottom:20,
                        marginHorizontal:20
                    }}></Button>
                    <Text>这是离职业务的列表</Text>
                </View>
            }
        }



        // 显示默认页面
        return<View style={{flex:1, backgroundColor:"#f6f6f6"}}>
            <SafeAreaView style={{flex:1}}>
                <ScrollView>

                    {/* 顶部的一个广告位 */}
                    {this.renderHeaderView()}

                    {/* 一个功能块 */}
                    <View style={styles.funcContainer}>
                        <View style={{height:75, flex:1, flexDirection:"row", justifyContent:"space-around"}}>
                            <TouchableHighlight onPress={()=>{
                                this._entryBtnClick(1)
                            }} underlayColor="red" style={{flex:1}}>
                                <View style={styles.funcItemStyle}>
                                    {/* 左边一个icon */}
                                    <Image source={require("../images/icon/1.png")}></Image>
                                    {/* 右边文字和英文 */}
                                    <View>
                                        <Text>入职业务</Text>
                                        <Text>induction</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={()=>{
                                // alert("点击了在职任务")
                                this._entryBtnClick(2)
                            }} underlayColor="red" style={{flex:1}}>
                                <View style={styles.funcItemStyle}>
                                {/* 左边一个icon */}
                                <Image source={require("../images/icon/2.png")}></Image>
                                {/* 右边文字和英文 */}
                                <View>
                                    <Text>在职业务</Text>
                                    <Text>induction</Text>
                                </View>
                                </View>
                            </TouchableHighlight>
                        </View>

                        <View style={{height:75, flex:1, flexDirection:"row", justifyContent:"space-around"}}>
                            
                            <TouchableHighlight onPress={()=>{
                                // alert("点击了离职任务")
                                this._entryBtnClick(3)
                            }} underlayColor="red" style={{flex:1}}>
                                <View style={styles.funcItemStyle}>
                                    {/* 左边一个icon */}
                                    <Image source={require("../images/icon/3.png")}></Image>
                                    {/* 右边文字和英文 */}
                                    <View>
                                        <Text>离职业务</Text>
                                        <Text>induction</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>

                            <View style={styles.funcItemStyle}>
                                {/* 左边一个icon
                                <Image source={require("../images/icon/3.png")}></Image>
                                {/* 右边文字和英文 */}
                                {/* <View>
                                    <Text>离职业务</Text>
                                    <Text>induction</Text>
                                </View> */} 
                            </View>
                        </View>
                        
                    </View>

                </ScrollView>
            </SafeAreaView>
        </View>
    }

}

const styles = StyleSheet.create({
    adcontainer:{
        flex:1,
        backgroundColor:"white",
        height:160
    },

    funcContainer:{
        flex:1,
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"flex-start",
        backgroundColor:"#fff",
        marginTop:20,
        height:150,
        marginHorizontal:20,
        borderRadius:15
    },

    funcItemStyle:{
        height:75,
        backgroundColor:"#fff", 
        flex:1, 
        flexDirection:"row", 
        justifyContent:"center", 
        alignItems:"center",
        borderRadius:15
    }
})