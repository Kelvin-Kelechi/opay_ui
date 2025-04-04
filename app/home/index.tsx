import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import styles from "./styles"; // Import styles

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Hi, KELECHI</Text>
        <View style={styles.headerIcons}>
          <MaterialIcons name="headset-mic" size={24} color="gray" />
          <Ionicons
            name="scan-outline"
            size={24}
            color="gray"
            style={styles.iconSpacing}
          />
          <FontAwesome
            name="bell"
            size={24}
            color="red"
            style={styles.iconSpacing}
          />
        </View>
      </View>

      {/* Balance Section */}
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Available Balance</Text>
        <Text style={styles.balanceAmount}>₦14.73</Text>
        <TouchableOpacity style={styles.addMoneyButton}>
          <Text style={styles.addMoneyText}>+ Add Money</Text>
        </TouchableOpacity>
      </View>

      {/* Transactions */}
      <View style={styles.transactionCard}>
        <Text style={styles.transactionTitle}>OWealth Interest Earned</Text>
        <Text style={styles.transactionDate}>Apr 4th, 02:50:23</Text>
        <Text style={styles.transactionAmount}>+₦0.09</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        {[
          { name: "To OPay", icon: "send" },
          { name: "To Bank", icon: "bank" },
          { name: "Withdraw", icon: "wallet" },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.actionButton}>
            <Ionicons name={item.icon} size={30} color="green" />
            <Text>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* BVN Warning */}
      <View style={styles.warningContainer}>
        <Text style={styles.warningTitle}>
          Your BVN and NIN info do not match
        </Text>
        <Text style={styles.warningText}>Click to view more details</Text>
      </View>

      {/* Services */}
      <View style={styles.servicesContainer}>
        {[
          { name: "Airtime", icon: "phone" },
          { name: "Data", icon: "wifi" },
          { name: "Betting", icon: "casino" },
          { name: "TV", icon: "tv" },
          { name: "Safebox", icon: "lock" },
          { name: "Loan", icon: "attach-money" },
          { name: "Invitation", icon: "group" },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.serviceItem}>
            <MaterialIcons name={item.icon} size={30} color="green" />
            <Text>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

// Bottom Navigation
const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Rewards"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="gift" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Finance"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="wallet" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cards"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="card" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Me"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Root App Component
export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
