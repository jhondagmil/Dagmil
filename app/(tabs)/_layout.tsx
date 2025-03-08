import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {

            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="house" color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="info" color={color} />,
        }}
      />
       <Tabs.Screen
        name="services"
        options={{
          title: 'Services',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="room-service" color={color} />,
        }}
      />
      <Tabs.Screen
      name="settings"
      options={{
        title: 'Settings',
        tabBarIcon: ({ color }) => <MaterialIcons size={28} name="settings" color={color} />,
      }}
    />
    </Tabs>
  );
}
