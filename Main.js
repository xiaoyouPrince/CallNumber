import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {View, Text} from 'react-native';

// 导入路由相关内容
// Router 就是根路由容器
// Stack 表示每个路由的分组，不是具体路由，专门用来给路由分组
// Scene 表示一个具体路由规则
import { Router, Stack, Scene } from 'react-native-router-flux';
import App from "./App.js"
import OnlineAppointPage from "./app/callNumber/OnlineAppointScreen"
import AppointRecordPage from "./app/callNumber/AppointRecordPage"
import OnlineChooseTimeScreen from "./app/callNumber/OnlineChooseTimeScreen"
import MetrailDetailScreen from "./app/callNumber/MetrailDetailScreen"
import CallNumberSceneScreen from './app/callNumber/CallNumberScenePage'
import QueueCheckScreen from "./app/callNumber/QueueCheckScreen"



export default class Main extends Component {


  render(){

    // 所有的路由规则都应该写在这里
    // 第一个scene就是默认要展示的首页
    // key 属性表示路由规则名称，后面会使用key来进行编程时导航，每一个路由都要提供一个唯一的key属性，不能重复
    // component 就是要展示的组件
    // title 即nav的title

    return <Router>
      <Stack key="root">
          {/* 默认首页的理由规则 */}
          <Scene key="app" component={App} title="我的App"></Scene>

          {/* 线上预约主页面 */}
          <Scene key="onlineApoint" component={OnlineAppointPage} title="线上预约"></Scene>

          {/* 预约记录列表页面 */}
          <Scene key="appointRecord" component={AppointRecordPage} title="预约记录"></Scene>

          {/* 预约记录选择时间页面 */}
          <Scene key="appointComfirm" component={OnlineChooseTimeScreen} title="在线预约"></Scene>
          
          {/* 材料详情页面 */}
          <Scene key="metrailDetail" component={MetrailDetailScreen} title="材料详情"></Scene>

          {/* 现场取号 */}
          <Scene key="callNumberScene" component={CallNumberSceneScreen} title="现场取号"></Scene>

          {/* 排队查询 */}
          <Scene key="queueCheck" component={QueueCheckScreen} title="排队查询"></Scene>

      </Stack>
    </Router>

  }
}

// // Login.js

// // navigate to 'home' as defined in your top-level router
// Actions.home(PARAMS);

// // go back (i.e. pop the current screen off the nav stack)
// Actions.pop();

// // refresh the current Scene with the specified props
// Actions.refresh({ param1: 'hello', param2: 'world' });
