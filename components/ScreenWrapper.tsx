import React, { ReactNode } from "react";
import { View, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ScreenWrapperProps {
  children: ReactNode;
  bg?: string;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ children, bg }) => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, backgroundColor: bg || "transparent" }}>
      <View
        style={{
          height: top,
          backgroundColor: "#fff",
        }}
      >
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#fff"
          translucent
        />
      </View>

      <View style={{ flex: 1, backgroundColor: bg || "transparent" }}>
        {children}
      </View>
    </View>
  );
};

export default ScreenWrapper;
