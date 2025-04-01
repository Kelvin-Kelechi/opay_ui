import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1dce9f",
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    marginLeft: 10,
    fontFamily: "Berlin Sans FB",
  },

  textContainer: {
    alignItems: "flex-start",
    top: 20,
  },
  layer: {
    flexDirection: "row",
    alignItems: "center",

    height: 60,
  },
  image: {
    width: 100,
    height: 30,
  },
  text1: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
});
export default styles;
