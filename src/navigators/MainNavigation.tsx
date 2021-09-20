import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabs } from "@/screens";
import { TopTabs } from "./MainTabNavigation";

const Tab = createBottomTabNavigator();
// const styles = OrderScreenStyles;

export default function MainNavigation() {
  return(
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen
        name = "Orders"
        component = { TopTabs }
        options = {{
          title: 'Orders',
          headerStyle: {
            backgroundColor: '#36A7E7',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },  
          headerTitleAlign: 'center',
       }} 
      />
      <Tab.Screen name = "Home" 
      component = { BottomTabs.Home } 
      />
      <Tab.Screen name = "Trade" 
      component = { BottomTabs.Trade } 
      />
      <Tab.Screen name = "Market" 
      component = { BottomTabs.Market } 
      />
      <Tab.Screen name = "Profile" 
      component = { BottomTabs.Profile } 
      />
    </Tab.Navigator>
  </NavigationContainer>
  )
}