import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 50,
    alignItems: "center",
  },
  backButton: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  backText: {
    fontSize: 24,
  },
  logo: {
    width: 150,
    height: 40,
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
    fontWeight: "semibold",
    marginBottom: 20,
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#0AA83F",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
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
    marginTop: 180,
    paddingHorizontal: 60,
  },
  signupLink: {
    color: "#0AA83F",
    // fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 50,
  },
  footerImage: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginHorizontal: 5,
  },
  footerText: {
    fontSize: 12,
    color: "#555",
  },
});
