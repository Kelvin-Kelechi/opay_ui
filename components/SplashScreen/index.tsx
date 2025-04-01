import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import TypeWriter from "react-native-typewriter";
import styles from "./styles";

export default function AnimatedSplashScreen() {
  const opacity = new Animated.Value(0);
  const [textVisible, setTextVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      setTextVisible(true);
      setTimeout(() => {
        setSubtitleVisible(true);
      }, 1500);
    }, 1000);
  }, []);

  return (
    <LinearGradient colors={["#009463", "#009463"]} style={styles.container}>
      <Animated.View style={[styles.logoContainer, { opacity }]}>
        <Image
          source={require("../../assets/images/opay-logo.png")}
          style={styles.logo}
        />
        <View style={styles.textContainer}>
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "#191970" }}>
            We are Beyond Banking
          </Text>
        </View>
        <View style={[styles.textContainer, { top: 50 }]}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../../assets/images/cbn-logo.png")}
              style={{ width: 30, height: 30, marginRight: 5 }}
            />
            <Text style={{ fontSize: 16, color: "#191970", marginRight: 5  }}>
              We are Beyond Banking
            </Text>
            <Image
              source={require("../../assets/images/ndic.webp")}
              style={styles.image}
            />
          </View>
        </View>
      
      </Animated.View>
    </LinearGradient>
  );
}
