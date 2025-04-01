import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import ScreenWrapper from "@/components/ScreenWrapper";
import { styles } from "./styles";
import AnimatedSplashScreen from "../components/SplashScreen";
import { useRouter } from "expo-router";
const FaceIDLogin = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const navigate = useRouter();
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
  useEffect(() => {
    async function prepareApp() {
      await new Promise((resolve) => setTimeout(resolve, 3500));
      setAppIsReady(true);
    }
    prepareApp();
  }, []);

  if (!appIsReady) {
    return <AnimatedSplashScreen />;
  }
  const navigateToLogin = () => {
    navigate.push("/login");
  };
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
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
          <Text style={styles.switchText} onPress={navigateToLogin}>
            Switch Account
          </Text>
          <Text style={styles.divider}>|</Text>
          <Text style={styles.loginText} onPress={navigateToLogin}>
            Log in with Password
          </Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default FaceIDLogin;
