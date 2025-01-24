import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Feather } from "@expo/vector-icons";
import { Platform } from "react-native";

export default function Layout() {
  return (
    <GestureHandlerRootView>
      <Drawer screenOptions={{ 
        headerShown: false,
        drawerActiveBackgroundColor: "transparent",
        drawerInactiveBackgroundColor: "transparent",
        overlayColor: "transparent",
        drawerStyle: {
            backgroundColor: "#1D1F25",
            paddingTop: Platform.OS === "android" ? 32 : 0,
            width: "50%"
        },
        sceneStyle: {
            backgroundColor: "#1D1F25"
        },
        drawerInactiveTintColor: "#727E9B",
        drawerActiveTintColor: "#FFFFFF",
        drawerHideStatusBarOnOpen: true,
        }}>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            drawerIcon: ({ color }) => (
              <Feather name="home" size={20} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="notifications"
          options={{
            drawerLabel: "Notificações",
            drawerIcon: ({ color }) => (
              <Feather name="bell" size={20} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
