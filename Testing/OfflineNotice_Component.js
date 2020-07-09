import React, { PureComponent } from 'react';
import { View, Text, Dimensions, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import NetInfo from "@react-native-community/netinfo";

const { width } = Dimensions.get('window');

function MiniOfflineSign() {
  return (
    <View>
      <View style={styles.offlineContainer}>
        <Text style={styles.offlineText}>No Internet Connection</Text>
      </View>
      <View style={{ flexDirection: 'row', width: 500, height: 100, backgroundColor: 'powderblue', marginTop: 550 }}>
        <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 20, fontStyle: 'italic', marginTop: 20, marginLeft: 30 }}>
          No Internet Connection
</Text>
      </View>
    </View>
  );
}
class OfflineNotice extends PureComponent {
  state = {
    isWifiEnabled: '',
  };

  // componentDidMount() {
  //   NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  // }

  // componentWillUnmount() {
  //   NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  // }

  // handleConnectivityChange = isConnected => {
  //     this.setState({ isConnected });
  // };

  componentDidMount() {
    NetInfo.addEventListener(this.handleConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.removeEventListener(this.handleConnectivityChange);
  }

  handleConnectivityChange = test => {
    console.log('checking with pk', test);
    if (test.isWifiEnabled) {
      this.setState({ isWifiEnabled: test.isWifiEnabled });
    }
  };
  // if(test.isWifiEnabled){
  //   Alert.alert("Data Connected");
  // }
  // else{
  //   Alert.alert("Data Not Connected");
  // }
  render() {
    if (!this.state.isWifiEnabled) {
      Alert.alert('Data Not Connected');
      return <MiniOfflineSign />;
     
    }
    Alert.alert('Data Connected');
      return null;
  }
}

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#b52424',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
    top: 30
  },
  offlineText: { color: '#fff' }
});

export default OfflineNotice;
