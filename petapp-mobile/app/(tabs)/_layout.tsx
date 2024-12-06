import { Tabs } from "expo-router";
import {
  Foundation,
  FontAwesome5,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
          fontFamily: "mon-sb",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Гледане на домашни любимци",
          tabBarIcon: ({ size, color }) => (
            <Foundation name="paw" size={size * 1.1} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="adopt"
        options={{
          title: "Намери дом",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="dog" size={size * 0.9} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="find"
        options={{
          title: "Търси се/Намерено",
          tabBarIcon: ({ size, color }) => (
            <Foundation name="target-two" size={size * 0.9} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="love"
        options={{
          title: "Намери партньор",
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="heart" size={size * 0.8} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Профил",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-circle" size={size * 0.9} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
