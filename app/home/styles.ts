import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconSpacing: {
    marginLeft: 16,
  },
  balanceContainer: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 10,
    marginBottom: 16,
  },
  balanceLabel: {
    fontSize: 16,
    color: "#888",
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 8,
  },
  addMoneyButton: {
    alignSelf: "flex-start",
    backgroundColor: "green",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  addMoneyText: {
    color: "#fff",
    fontWeight: "bold",
  },
  transactionCard: {
    backgroundColor: "#f9f9f9",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  transactionDate: {
    fontSize: 12,
    color: "#999",
    marginVertical: 4,
  },
  transactionAmount: {
    fontSize: 18,
    color: "green",
    fontWeight: "bold",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  actionButton: {
    alignItems: "center",
    flex: 1,
  },
  warningContainer: {
    backgroundColor: "#ffe5e5",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  warningTitle: {
    fontWeight: "bold",
    color: "red",
  },
  warningText: {
    color: "#333",
    marginTop: 4,
  },
  servicesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  serviceItem: {
    width: "30%",
    marginVertical: 10,
    alignItems: "center",
  },
});
