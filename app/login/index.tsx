import ScreenWrapper from "@/components/ScreenWrapper";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { styles } from "./styles";

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const isButtonEnabled = email.trim().length > 0 && password.trim().length > 0;

  return (
    <ScreenWrapper>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/opay_logo.jpg")}
          style={styles.logo}
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your Mobile No./Email"
            placeholderTextColor="#B0B0B0"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter 6-digit Password"
            placeholderTextColor="#B0B0B0"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity style={styles.forgotText}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.loginButton,
            !isButtonEnabled && styles.disabledButton,
          ]}
          disabled={!isButtonEnabled}
          onPress={() => {
            if (isButtonEnabled) {
              router.push("/home");
            }
          }}
        >
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>

        <Text style={styles.signupText}>
          Don't have an OPay Account yet?{" "}
          <Text style={styles.signupLink}>Click here to get one</Text>
        </Text>

        <View style={styles.footer}>
          <Image
            source={require("../../assets/images/cbn-logo.png")}
            style={styles.footerImage}
          />
          <Text style={styles.footerText}>
            Licensed by the <Text style={{ fontWeight: "bold" }}>CBN</Text> and
            insured by the
          </Text>
          <Image
            source={require("../../assets/images/ndic.webp")}
            style={[styles.footerImage, { width: 45, height: 50 }]}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default LoginScreen;
