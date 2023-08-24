import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const OriginalPathname = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.wRXfsURO}></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  wRXfsURO: {
    height: 616,
    width: 140,
    backgroundColor: "#b90f0f",
    borderRadius: 0,
    color: "#777777",
    flexDirection: "row",
    flex: 1
  }
});
export default OriginalPathname;