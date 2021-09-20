import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { OpenOrdersScreen, ClosedOrdersScreen} from '@/screens';

const Tab = createMaterialTopTabNavigator();

export function TopTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#ffffff',
        inactiveTintColor: '#36A7E7',
        showIcon: true,
        pressColor: '#9BC9E2',
        scrollEnabled: false,
        tabStyle: {
            borderRadius: 10,
            margin: -1,
            justifyContent: 'center',
            alignContent: 'center'
        },
        indicatorStyle: {
            backgroundColor: '#36A7E7',
            height: '60%',
            borderRadius: 15,
            marginBottom: 9,
            marginLeft: 10,
            width: '45%'
        },
        style: {
            backgroundColor: '#ffffff',
            borderRadius: 20,
            marginHorizontal: '2.5%',
            marginVertical: 10,
            height: 47,
            width: '95%'
        },
        labelStyle: { fontSize: 15 },
      }}
    >
      <Tab.Screen 
        name="Open Orders" 
        component={ OpenOrdersScreen } 
      />
      <Tab.Screen 
        name="Closed Orders" 
        component={ ClosedOrdersScreen } 
      />
    </Tab.Navigator>
  );
}