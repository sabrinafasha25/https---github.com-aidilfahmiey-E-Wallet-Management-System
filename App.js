import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

// import React, { useState } from "react";
// import { RecyclerViewBackedScrollViewBase, View } from "react-native";

// import MyBalance from "./app/screens/MyBalance";
// import MonthlyStatement from "./app/screens/MonthlyStatement";
// import TransactionDetails from "./app/screens/TransactionDetails";
// import TopUp from "./app/screens/TopUp";
// import Payment from "./app/screens/Payment";

// export default function App() {
//   return <Payment />;
// }

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
