import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ScreenWrapper from "@/components/ScreenWrapper";

const FaceIDLogin = () => {
  const handleFaceID = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();

    if (!hasHardware || !isEnrolled) {
      alert("Face ID not available");
      return;
    }

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate with Face ID",
      fallbackLabel: "Use Passcode",
    });

    if (result.success) {
      alert("Authentication Successful");
    } else {
      alert("Authentication Failed");
    }
  };

  return (
    <ScreenWrapper>
      {" "}
      <View style={styles.container}>
        <View style={styles.header}>
          {" "}
          <Image
            source={require("../assets/images/opay_logo.jpg")}
            style={styles.logo}
          />
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
            style={styles.profileImage}
          />
          <Text style={styles.username}>KELECHI(9015***117)</Text>
        </View>
        <TouchableOpacity onPress={handleFaceID}>
          <Image
            source={require("../assets/images/face-id.png")}
            style={styles.faceIcon}
          />
        </TouchableOpacity>

        <Text style={styles.faceText}>Click to log in with Face</Text>
        <TouchableOpacity style={styles.verifyButton} onPress={handleFaceID}>
          <Text style={styles.verifyText}>Verify Face</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text style={styles.switchText}>Switch Account</Text>
          <Text style={styles.divider}>|</Text>
          <Text style={styles.loginText}>Log in with Password</Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  time: {
    position: "absolute",
    top: 50,
    left: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  logo: {
    width: 150,
    height: 40,
    marginBottom: 30,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  faceIcon: {
    width: 50,
    height: 50,
    marginBottom: 30,
  },
  faceText: {
    color: "gray",
    marginBottom: 20,
  },
  verifyButton: {
    backgroundColor: "#1dce9f",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  verifyText: {
    color: "white",
    fontWeight: "bold",
  },
  header: {
    flex: 1,
    alignItems: "center",

    position: "absolute",
    top: 30,
  },
  footer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 30,
  },
  switchText: {
    color: "#1dce9f",
  },
  divider: {
    marginHorizontal: 10,
    color: "gray",
  },
  loginText: {
    color: "#1dce9f",
  },
});

export default FaceIDLogin;
