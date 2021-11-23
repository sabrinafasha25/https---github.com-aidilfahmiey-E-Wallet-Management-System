import React from "react";
import {
  ScrollView,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import AppTextInput from "../components/AppTextInput";
import { TouchableOpacity } from "react-native-gesture-handler";
import BalanceDeduction from "../components/BalanceDeduction";
import BalanceDeduction2 from "../components/BalanceDeduction2";
function Payment(props) {
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.lightPurple,
        flex: 1,
      }}
    >
      <BalanceDeduction />

      {/* <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
        <Text style={styles.balanceTitle}>CURRENT BALANCE:</Text>
        <Text style={styles.about}>ITEM</Text>
        <AppTextInput
          placeholder="Item Description"
          placeholderTextColor={colors.grey}
          width="100%"
          //value={this.state.word}
          //onChangeText={(word) => this.setState({ word })}
        />

        <Text style={styles.about}>TOTAL PAYMENT</Text>
        <AppTextInput
          placeholder="Price"
          placeholderTextColor={colors.grey}
          width="50%"
          keyboardType="numbers-and-punctuation"
          maxLength={8}

          //value={this.state.word}
          //onChangeText={(word) => this.setState({ word })}
        />

        <View
          style={{
            marginVertical: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() =>
              Alert.alert("Payment Successful!", "Check your balance")
            }
            style={{
              backgroundColor: colors.darkGrey,
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
              padding: 15,
              width: "100%",
              marginVertical: 10,
            }}
          >
            <View>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 18,
                  textTransform: "uppercase",
                  //fontWeight: "bold",
                }}
              >
                CONFIRM PAYMENT
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  balanceTitle: {
    color: colors.grey,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginVertical: 10,
    justifyContent: "center",
    //textAlign: "justify",
    lineHeight: 19,
  },
  about: {
    color: colors.grey,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginVertical: 10,
    justifyContent: "flex-start",
    // textAlign: "justify",
    lineHeight: 19,
  },
});
export default Payment;
