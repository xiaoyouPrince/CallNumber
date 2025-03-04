import React from "react"
import { View,Alert, SafeAreaView, ScrollView, StyleSheet, Text, Image, TouchableHighlight, Button, ActivityIndicator } from "react-native"
import { color } from "react-native-reanimated"
import { Actions, StackProps } from "react-native-router-flux"

// const REQUEST_URL = "http://localhost/json";
const REQUEST_URL = "http://127.0.0.1/json";


export default class OnlineAppointScreen extends React.Component{

    constructor(props){
        super(props)

        this.state={

            
            businessType:props.businessType, // 默认是0表示未选择，1，2，3 分别代表三个业务
            hasChoosen:false, // 是否已经选择了业务
            chooseBusiName:"", // 用户选中的二级业务名称
            businessList:[],
            data: [], // 请求到的列表数据源
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
            data: this.state.data.concat(responseData.data),
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
                // alert("点击了" + title)

                // let typeString = (this.state.businessType === 1) ? "入职业务" : (this.state.businessType === 2) ? "在职业务" : "离职业务";

                // Actions.push("appointComfirm",{
                //     businessType:typeString,
                //     businessName:title
                // })

                // 选择完成业务 - 进行展示
                this.setState({
                  hasChoosen:true,
                  chooseBusiName:title
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
    renderBusinessView = () => {

      // console.warn(JSON.stringify(this.state.data, null, '  '))
      return<View style={{flex:1, backgroundColor:"#f6f6f6"}}>
      <SafeAreaView style={{flex:1}}>
          <ScrollView>
              {this.renderHeaderView()}
              {this.renderBackBtn()}

              {this.state.data.map((item, index)=>{

                  // 业务类型为第一个 入职业务
                  if(this.state.businessType === 1){
                    if(index === 0){
                      return item.bussinessData.map((businessItem)=>{
                        return this.renderListView(businessItem.busName)
                      })
                    }
                  }
                  else if(this.state.businessType === 2)
                  {  // 业务类型为第二个在职业务
                    if(index === 1){
                      return item.bussinessData.map((businessItem)=>{
                        return this.renderListView(businessItem.busName)
                      })
                    }
                  }else {
                    // 业务类型为第三个离职业务
                    if(index === 2){
                      return item.bussinessData.map((businessItem)=>{
                        return this.renderListView(businessItem.busName)
                      })
                    }
                  }
              })}

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

        // 显示默认页面
        if(this.state.hasChoosen){

            let firstName = ""
            if(this.state.businessType === 1){
              firstName = "入职业务"
            }
            if(this.state.businessType === 2){
              firstName = "在职业务"
            }
            if(this.state.businessType === 3){
              firstName = "离职业务"
            }
            let finalName = firstName + "-" + this.state.chooseBusiName;

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


                      {/* 底部选择好的东西 */}
                      <View style = {{height:100, backgroundColor:"#fff", marginHorizontal:20, marginTop:15, borderRadius:15 , flexDirection:"row", justifyContent:"space-between",}}>
                        <View style = {{marginTop:15, marginHorizontal:15}}>
                            <Text style = {{fontSize:20, fontWeight:"bold"}}>您已选择要办理的业务是：</Text>
                            <Text style = {{marginTop:15}}>{finalName}</Text>
                        </View>
                        {/* 重新选择 */}
                        <TouchableHighlight onPress = {()=>{

                          // 重新选择
                          this.setState({
                            hasChoosen:false,
                            businessType:0
                          })


                          }}
                          underlayColor="white">
                          <View style={{height:40, 
                              width:50,
                              marginVertical:10, 
                              marginHorizontal:15, 
                              backgroundColor:"red",
                              borderRadius:20,
                              justifyContent:"center",
                              alignItems:"center"}}>
                              <Text style = {{color:"white", fontSize:15}}>重选</Text>
                          </View>

                          </TouchableHighlight>
                      </View>
                      

                  </ScrollView>
                      {/* 底部按钮 */}
                      <TouchableHighlight onPress = {()=>{

                        Alert.alert("提示", "取号成功，请前往大厅排队拿号", [
                            // {text:"我知道了", style:"cancel"},
                            {text:"我知道了", style:"default", onPress:()=>{


                              // alert("用户点击预约");

                                // // 回退
                                Actions.pop()
                                // // 重新加载页面
                                // Actions.reset("onlineApoint",{businessType:0});
                            }}
                        ])


                        }}
                        underlayColor="white">
                        <View style={{height:40, 
                            marginVertical:10, 
                            marginHorizontal:15, 
                            backgroundColor:"red",
                            borderRadius:20,
                            justifyContent:"center",
                            alignItems:"center"}}>
                            <Text style = {{color:"white", fontSize:15}}>取号</Text>
                        </View>

                        </TouchableHighlight>
              </SafeAreaView>
            </View>

        }else
        {

          // 用户已近选择了一级业务类型,根据业务类型加载对应的
          if(this.state.businessType === 1){
            return this.renderBusinessView()
          }

          if(this.state.businessType === 2){
              return this.renderBusinessView()
          }
          

          if(this.state.businessType === 3){
              return this.renderBusinessView()
          }

          // 最初进入页面
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