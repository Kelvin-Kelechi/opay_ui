import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
