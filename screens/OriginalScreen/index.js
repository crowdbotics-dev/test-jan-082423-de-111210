import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const OriginalScreen = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.PhKdGDHB}></View><View style={styles.PGTDNzDC}></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  PhKdGDHB: {
    height: 60,
    width: 140,
    backgroundColor: "#f20f0f",
    borderRadius: 0,
    color: "#777777"
  },
  PGTDNzDC: {
    height: 60,
    width: 140,
    backgroundColor: "#2c3fcd",
    borderRadius: 0,
    color: "#777777"
  }
});
export default OriginalScreen;