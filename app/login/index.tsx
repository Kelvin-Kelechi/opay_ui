import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isButtonEnabled = email.trim().length > 0 && password.trim().length > 0;

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      {/* OPay Logo */}
      <Image
        // source={require("../assets/images/opay_logo.png")}
        style={styles.logo}
      />

      {/* Input Fields */}
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

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button (Disabled until fields are filled) */}
      <TouchableOpacity
        style={[styles.loginButton, !isButtonEnabled && styles.disabledButton]}
        disabled={!isButtonEnabled}
      >
        <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>

      {/* Sign Up Link */}
      <Text style={styles.signupText}>
        Don't have an OPay Account yet?{" "}
        <Text style={styles.signupLink}>Click here to get one</Text>
      </Text>

      {/* Footer Logos */}
      <View style={styles.footer}>
        <Image
        //   source={require("../assets/images/cbn-logo.png")}
          style={styles.footerImage}
        />
        <Text style={styles.footerText}>
          Licensed by the <Text style={{ fontWeight: "bold" }}>CBN</Text> and
          insured by the
        </Text>
        <Image
        //   source={require("../assets/images/ndic-logo.png")}
          style={styles.footerImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  backText: {
    fontSize: 24,
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: "contain",
    marginBottom: 30,
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  forgotText: {
    alignSelf: "flex-end",
    color: "#0AA83F",
    fontWeight: "bold",
    marginBottom: 20,
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#0AA83F",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  disabledButton: {
    backgroundColor: "#B4E4CC",
  },
  loginText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  signupText: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 10,
  },
  signupLink: {
    color: "#0AA83F",
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
  },
  footerImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginHorizontal: 5,
  },
  footerText: {
    fontSize: 12,
    color: "#555",
  },
});

export default LoginScreen;
