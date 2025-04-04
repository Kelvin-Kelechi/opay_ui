import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconSpacing: {
    marginLeft: 15,
  },
  balanceContainer: {
    backgroundColor: "#008000",
    borderRadius: 10,
    padding: 20,
    marginTop: 15,
  },
  balanceLabel: {
    color: "#fff",
    fontSize: 18,
  },
  balanceAmount: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  addMoneyButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  addMoneyText: {
    color: "#008000",
    textAlign: "center",
    fontWeight: "bold",
  },
  transactionCard: {
    marginTop: 15,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
  },
  transactionTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  transactionDate: {
    color: "gray",
  },
  transactionAmount: {
    color: "green",
    fontWeight: "bold",
    fontSize: 16,
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  actionButton: {
    alignItems: "center",
  },
  warningContainer: {
    marginTop: 15,
    backgroundColor: "#fff3cd",
    padding: 10,
    borderRadius: 10,
  },
  warningTitle: {
    fontWeight: "bold",
  },
  warningText: {
    color: "gray",
  },
  servicesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 15,
  },
  serviceItem: {
    alignItems: "center",
    width: "30%",
    marginTop: 10,
  },
});
