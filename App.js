import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigatorIOS, Text, TouchableHighlight, View} from 'react-native';

import BindThis from "./app/screens/BindThis"
import CMTList from "./app/screens/comment/cmtList"

import CallNumberBaseScreen from "./app/callNumber/CallNumberBaseScreen"



export default class App extends Component {


  render(){
    return <View style={{flex:1}}>
        {/* <CMTList></CMTList> */}
        <CallNumberBaseScreen></CallNumberBaseScreen>
      </View>
  }
}






// import React, { Component } from "react";
// import { Image, FlatList, StyleSheet, Text, View, SafeAreaView, SectionList, NavigatorIOS } from "react-native";
// import CallNumberBaseScreen from "./app/screens/CallNumberBaseScreen";

// export default class App extends Component{

//   constructor(props){
//     super(props);

//     this.state = {
//       data: ["你好", "tahao", "大家好"],
      
//     }
//   }

//   render(){

//     return (
//       <SafeAreaView style={styles.container}>

//         <NavigatorIOS.create({

//         });
//         <View style={styles.container}>
//           <SectionList
//             sections={[
//               {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
//               {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
//             ]}
//             renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
//             renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
//             keyExtractor={(item, index) => index}
//           />
//         </View>
//       </SafeAreaView>
//     );
//   }
// }


// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    paddingTop: 22
//   },
//   sectionHeader: {
//     paddingTop: 2,
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingBottom: 2,
//     fontSize: 14,
//     fontWeight: 'bold',
//     backgroundColor: 'rgba(247,247,247,1.0)',
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// });




// 电影列表的DEMO

// import React, { Component } from "react";

// import { Image, FlatList, StyleSheet, Text, View } from "react-native";

// const REQUEST_URL =
//   "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

// export default class SampleAppMovies extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//       loaded: false
//     };
//     // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
//     // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
//     this.fetchData = this.fetchData.bind(this);
//   }

//   componentDidMount() {
//     this.fetchData();
//   }

//   fetchData() {
//     fetch(REQUEST_URL)
//       .then(response => response.json())
//       .then(responseData => {
//         // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
//         this.setState({
//           data: this.state.data.concat(responseData.movies),
//           loaded: true
//         });
//       });
//   }

//   render() {
//     if (!this.state.loaded) {
//       return this.renderLoadingView();
//     }

//     return (
//       <FlatList
//         data={this.state.data}
//         renderItem={this.renderMovie}
//         style={styles.list}
//         keyExtractor={item => item.id}
//       />
//     );
//   }

//   renderLoadingView() {
//     return (
//       <View style={styles.container}>
//         <Text>Loading movies...</Text>
//       </View>
//     );
//   }

//   renderMovie({ item }) {
//     // { item }是一种“解构”写法，请阅读ES2015语法的相关文档
//     // item也是FlatList中固定的参数名，请阅读FlatList的相关文档
//     return (
//       <View style={styles.container}>
//         <Image
//           source={{ uri: item.posters.thumbnail }}
//           style={styles.thumbnail}
//         />
//         <View style={styles.rightContainer}>
//           <Text style={styles.title}>{item.title}</Text>
//           <Text style={styles.year}>{item.year}</Text>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF"
//   },
//   rightContainer: {
//     flex: 1
//   },
//   title: {
//     fontSize: 20,
//     marginBottom: 8,
//     textAlign: "center"
//   },
//   year: {
//     textAlign: "center"
//   },
//   thumbnail: {
//     width: 53,
//     height: 81
//   },
//   list: {
//     paddingTop: 20,
//     backgroundColor: "#F5FCFF"
//   }
// });



// SectionList

// import React, { Component } from 'react';
// import { SectionList, StyleSheet, Text, View, SafeAreaView } from 'react-native';

// export default class SectionListBasics extends Component {
//   render() {
//     return (
//       <SafeAreaView style={styles.container}>
//         <View style={styles.container}>
//           <SectionList
//             sections={[
//               {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
//               {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
//             ]}
//             renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
//             renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
//             keyExtractor={(item, index) => index}
//           />
//         </View>
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    paddingTop: 22
//   },
//   sectionHeader: {
//     paddingTop: 2,
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingBottom: 2,
//     fontSize: 14,
//     fontWeight: 'bold',
//     backgroundColor: 'rgba(247,247,247,1.0)',
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// })



// flatList

// import React, { Component } from 'react';
// import { FlatList, StyleSheet, Text, View } from 'react-native';

// export default class FlatListBasics extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={[
//             {key: 'Devin'},
//             {key: 'Dan'},
//             {key: 'Dominic'},
//             {key: 'Jackson'},
//             {key: 'James'},
//             {key: 'Joel'},
//             {key: 'John'},
//             {key: 'Jillian'},
//             {key: 'Jimmy'},
//             {key: 'Julie'},
//           ]}
//           renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    paddingTop: 22
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// })

// ScrollView

// import React, { Component } from 'react';
// import { ScrollView, Image, Text } from 'react-native';

// export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
//   render() {
//       return (
//         <ScrollView>
//           <Text style={{fontSize:96}}>Scroll me plz</Text>
//           <Image source={{uri: "https://www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&tn=SE_PclogoS_8whnvm25&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pcs", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 6, height: 6}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Text style={{fontSize:96}}>If you like</Text>
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Text style={{fontSize:96}}>Scrolling down</Text>
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Text style={{fontSize:96}}>What's the best</Text>
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Text style={{fontSize:96}}>Framework around?</Text>
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Text style={{fontSize:80}}>React Native</Text>
//         </ScrollView>
//     );
//   }
// }



// 按钮属性定制
// import React, { Component } from 'react';
// import { Alert, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

// export default class Touchables extends Component {
//   _onPressButton() {
//     Alert.alert('You tapped the button!')
//   }

//   _onLongPressButton() {
//     Alert.alert('You long-pressed the button!')
//   }


//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableHighlight</Text>
//           </View>
//         </TouchableHighlight>
//         <TouchableOpacity onPress={this._onPressButton}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableOpacity</Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableNativeFeedback
//             onPress={this._onPressButton}
//             background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
//           </View>
//         </TouchableNativeFeedback>
//         <TouchableWithoutFeedback
//             onPress={this._onPressButton}
//             >
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
//           </View>
//         </TouchableWithoutFeedback>
//         <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>Touchable with Long Press</Text>
//           </View>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 60,
//     alignItems: 'center'
//   },
//   button: {
//     marginBottom: 30,
//     width: 260,
//     alignItems: 'center',
//     backgroundColor: '#2196F3'
//   },
//   buttonText: {
//     textAlign: 'center',
//     padding: 20,
//     color: 'white'
//   }
// })


// 按钮

// import React, { Component } from 'react';
// import { Alert, Button, StyleSheet, View } from 'react-native';

// export default class ButtonBasics extends Component {
//   _onPressButton() {
//     Alert.alert('You tapped the button!')
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me"
//           />
//         </View>
//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me"
//             color="#841584"
//           />
//         </View>
//         <View style={styles.alternativeLayoutButtonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="This looks great!"
//           />
//           <Button
//             onPress={this._onPressButton}
//             title="OK!"
//             color="#841584"
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    justifyContent: 'center',
//   },
//   buttonContainer: {
//     margin: 20
//   },
//   alternativeLayoutButtonContainer: {
//     margin: 20,
//     flexDirection: 'row',
//     justifyContent: 'center'
//   }
// })


//  设置宽高  - 布局，使用flexBox

// import React, { Component } from 'react';
// import { View, StyleSheet } from 'react-native';

// export default class FlexDimensionsBasics extends Component {
//   render() {
//     return (


//       // // 最简单的是使用指定固定宽高
//       // <View style={{marginTop:100}}>
//       //   <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//       //   <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
//       //   <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
//       // </View>


//       // 以下是使用弹性宽高设置

//       // 试试去掉父View中的`flex: 1`。
//       // 则父View不再具有尺寸，因此子组件也无法再撑开。
//       // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
//       // <View style={{flex:1, marginTop:50, backgroundColor:'red'}}>
//       //   <View style={{flex: 1, backgroundColor: 'powderblue'}} />
//       //   <View style={{flex: 2, backgroundColor: 'skyblue'}} />
//       //   <View style={{flex: 3, backgroundColor: 'steelblue'}} />
//       // </View>


//       // 使用 flexbox 布局
//       // 尝试把`flexDirection`改为`column`看看
//       <View style={styles.containerStyle}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   containerStyle:{
//     flex: 1,
//     flexDirection: 'column', // column
//     alignItems: 'center',
//     marginTop: 50
//   }
// })




// 样式

// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class LotsOfStyles extends Component {
//   render() {
//     return (
//       <View style={{marginTop:100, alignItems:"center", backgroundColor:'red'}}>
//         <Text style={styles.red}>just red</Text>
//         <Text style={styles.bigBlue}>just bigBlue</Text>
//         <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
//         <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   bigBlue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   red: {
//     color: 'green',
//   },
// });


// 一个跑秒计数器组件

// import React, { Component } from 'react';
// import { Text, View } from 'react-native';

// class Timer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { seconds: 0 };
//   }

//   tick() {
//     this.setState(state => ({
//       seconds: state.seconds + 1
//     }));
//   }

//   componentDidMount() {
//     this.interval = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   render() {
//     return (
//       <Text>
//         Seconds: {this.state.seconds}
//       </Text>
//     );
//   }
// }

// export default class BlinkApp extends Component {
//   render() {
//     return (
//       <View style={{marginTop:50}}>
//         <Timer/>
//       </View>
//     );
//   }
// }


/// 闪光组件

// import React, { Component } from 'react';
// import { Text, View } from 'react-native';

// class Blink extends Component {
//   // 声明state对象
//   state = { isShowingText: true };
  
//   componentDidMount() {
//     // 每1000毫秒对showText状态做一次取反操作
//     setInterval(() => {
//       this.setState({
//         isShowingText: !this.state.isShowingText
//       });
//     }, 1000);
//   }

//   render() {
//     // 根据当前showText的值决定是否显示text内容
//     if (!this.state.isShowingText) {
//       return null;
//     }

//     return (
//       <Text>{this.props.text}</Text>
//     );
//   }
// }

// export default class BlinkApp extends Component {
//   render() {
//     return (
//       <View style={{marginTop:50}}>
//         <Blink text='I love to blink' />
//         <Blink text='Yes blinking is so great' />
//         <Blink text='Why did they ever take this out of HTML' />
//         <Blink text='Look at me look at me look at me' />
//       </View>
//     );
//   }
// }



// 简单自定义小组件 

// import React, { Component } from 'react';
// import { Text, View } from 'react-native';

// class Greeting extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center', marginTop: 50}}>
        
//         <Text>Hello {this.props.name}!</Text>

//         <Text>Where are you going {this.props.name}!</Text>

//       </View>
//     );
//   }
// }

// export default class LotsOfGreetings extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center'}}>
//         <Greeting name='Rexxar' />
//         <Greeting name='Jaina' />
//         <Greeting name='Valeera' />
//       </View>
//     );
//   }
// }


// 一张图片测试

// import React, { Component } from 'react';
// import { Image } from 'react-native';

// export default class Bananas extends Component {
//   render() {
//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };
//     return (
//       <Image source={pic} style={{width: 193, height: 110}} />
//     );
//   }
// }