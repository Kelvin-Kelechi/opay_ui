// import React from "react";
// import { View, Text, TouchableOpacity, ScrollView } from "react-native";
// import { MaterialIcons, Ionicons, FontAwesome } from "@expo/vector-icons";
// import styles from "./styles";
// import ScreenWrapper from "@/components/ScreenWrapper";

// const HomeScreen = () => {
//   return (
//     <ScreenWrapper>
//       <ScrollView style={styles.container}>
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerText}>Hi, KELECHI</Text>
//           <View style={styles.headerIcons}>
//             <MaterialIcons name="headset-mic" size={24} color="gray" />
//             <Ionicons
//               name="scan-outline"
//               size={24}
//               color="gray"
//               style={styles.iconSpacing}
//             />
//             <FontAwesome
//               name="bell"
//               size={24}
//               color="red"
//               style={styles.iconSpacing}
//             />
//           </View>
//         </View>

//         {/* Balance Section */}
//         <View style={styles.balanceContainer}>
//           <View
//             style={{ flexDirection: "row", justifyContent: "space-between" }}
//           >
//             <Text style={styles.balanceLabel}>Available Balance</Text>
//             <Text style={styles.balanceLabel}>Available Balance</Text>
//           </View>
//           <View
//             style={{ flexDirection: "row", justifyContent: "space-between" }}
//           >
//             <Text style={styles.balanceAmount}>₦14.73</Text>
//             <TouchableOpacity style={styles.addMoneyButton}>
//               <Text style={styles.addMoneyText}>+ Add Money</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Transaction */}
//         <View style={styles.transactionCard}>
//           <Text style={styles.transactionTitle}>OWealth Interest Earned</Text>
//           <Text style={styles.transactionDate}>Apr 4th, 02:50:23</Text>
//           <Text style={styles.transactionAmount}>+₦0.09</Text>
//         </View>

//         {/* Action Buttons */}
//         <View style={styles.actionButtons}>
//           {[
//             { name: "To OPay", icon: "send" },
//             { name: "To Bank", icon: "cash" },
//             { name: "Withdraw", icon: "wallet" },
//           ].map((item, i) => (
//             <TouchableOpacity key={i} style={styles.actionButton}>
//               <Ionicons name={item.icon} size={30} color="green" />
//               <Text>{item.name}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Warning */}
//         <View style={styles.warningContainer}>
//           <Text style={styles.warningTitle}>
//             Your BVN and NIN info do not match
//           </Text>
//           <Text style={styles.warningText}>Click to view more details</Text>
//         </View>

//         {/* Services */}
//         <View style={styles.servicesContainer}>
//           {[
//             { name: "Airtime", icon: "phone" },
//             { name: "Data", icon: "wifi" },
//             { name: "Betting", icon: "casino" },
//             { name: "TV", icon: "tv" },
//             { name: "Safebox", icon: "lock" },
//             { name: "Loan", icon: "attach-money" },
//             { name: "Invitation", icon: "group" },
//           ].map((item, i) => (
//             <TouchableOpacity key={i} style={styles.serviceItem}>
//               <MaterialIcons name={item.icon} size={30} color="green" />
//               <Text>{item.name}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </ScrollView>
//     </ScreenWrapper>
//   );
// };

// export default HomeScreen;
