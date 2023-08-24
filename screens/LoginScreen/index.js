import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const LoginScreen = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.UftEBsyg}></View><View style={styles.DcoCgBEz}></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  UftEBsyg: {
    height: 60,
    width: 140,
    backgroundColor: "#ff0000",
    borderRadius: 0,
    color: "#777777"
  },
  DcoCgBEz: {
    height: 60,
    width: 140,
    backgroundColor: "#0e38a3",
    borderRadius: 0,
    color: "#777777"
  }
});
export default LoginScreen;