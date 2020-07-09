import React from 'react';
import {View,Text} from 'react-native';
import OfflineNotice_Component from './Testing/OfflineNotice_Component';
export default class App extends React.Component{
  render() {
    return (
      <View >
        <OfflineNotice_Component />
        <Text >Welcome to React Native!</Text>
        <Text >To get started, edit App.js</Text>
        <Text >praveen</Text>
      </View>
    );
  }
}

// import React from 'react';
// import { SafeAreaView, Text, Platform,View } from 'react-native';
// import NetInfo from "@react-native-community/netinfo";
// class App extends React.Component {
//   state = {
//     isWifiEnabled: false
//   };
//   componentDidMount() {
//     // NetInfo.fetch().then(test => {
//     NetInfo.addEventListener(test => {
//   this.setState({ isWifiEnabled: test.isWifiEnabled });
//       console.log("response of test", test);
//         });
//   }
//   render() {
//         if (this.state.isWifiEnabled) {
//       return null;
//     }
//    return (
//      <View>
//        <View>
//       <SafeAreaView style={{
//         backgroundColor: 'red',alignItems:'center'
//       }} >
//         <Text style={{ color: "white",
//          fontSize: Platform.OS === 'android' ? 20 : 20,
//           padding: 10 }}>No Internet Connection</Text>
//           </SafeAreaView>
//           </View>
//           <View style={{ flexDirection:'row' ,width:500,height:100,backgroundColor:'powderblue',marginTop:500}}>
//           <Text style={{color:'red',fontWeight:'bold',fontSize:20,fontStyle:'italic',marginTop:20,marginLeft:30}}>
//             No Internet Connection
//           </Text>
//               </View>
//               </View>
//         ); }}
// export default App;  