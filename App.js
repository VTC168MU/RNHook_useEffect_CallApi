import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DmEffect from './Views/DmEffect';
import DmState from './Views/DmState';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <DmEffect></DmEffect>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
