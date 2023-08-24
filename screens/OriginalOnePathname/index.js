import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const OriginalOnePathname = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.UjyXukvb}></View><View style={styles.qKHvlgGg}></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  UjyXukvb: {
    height: 60,
    width: 140,
    backgroundColor: "#d30000",
    borderRadius: 0,
    color: "#777777"
  },
  qKHvlgGg: {
    height: 60,
    width: 140,
    backgroundColor: "#0026ee",
    borderRadius: 0,
    color: "#777777"
  }
});
export default OriginalOnePathname;