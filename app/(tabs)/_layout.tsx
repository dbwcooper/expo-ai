import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { NotepadText } from '@tamagui/lucide-icons';

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
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>

      <Tabs.Screen
        name="words"
        options={{
          title: 'Words',
          tabBarIcon: ({ color }) => <div>
            <NotepadText color={color} />
          </div>
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Study',
          tabBarIcon: ({ color }) => <div>
            <NotepadText color={color} />
          </div>
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Speak',
          tabBarIcon: ({ color }) => <div>
            <NotepadText color={color} />
          </div>
        }}
      />
      <Tabs.Screen
        name="exam"
        options={{
          title: 'Exam',
          tabBarIcon: ({ color }) => <div>
            <NotepadText color={color} />
          </div>
        }}
      />
    </Tabs>
  );
}
