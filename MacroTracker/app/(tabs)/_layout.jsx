import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#f00",
        headerStyle: {
          backgroundColor: "#25292e",
        },
        headerShadowVisible: false,
        headerTintColor: "#FFF",
        tabBarStyle: {
          backgroundColor: "#25292e",
        },
      }}
    >
      <Tabs.Screen 
        name="dashboard" 
        options={{ 
          title: "Dashboard", 
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "home-sharp" : "home-outline"} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen 
        name="goals" 
        options={{ 
          title: "Goals",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "clipboard" : "clipboard-outline"} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen 
        name="measurements" 
        options={{ 
          title: "Measurements",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "body" : "body"} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen 
      name="addfood" 
      options={{ 
        title: "Add Food",
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? "pizza" : "pizza"} color={color} size={24} />
        ),
      }}
    />
    </Tabs>
  );
}