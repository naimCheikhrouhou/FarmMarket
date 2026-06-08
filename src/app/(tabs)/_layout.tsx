import { colors } from '@/styles/global';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{       // of the tab container
        headerShown: false,
        tabBarStyle: {
            height: 70,
            paddingTop: 4,
            backgroundColor: colors.header,
        },
        tabBarLabelStyle: {
            fontSize: 14,
            marginTop: 5,
        },

        tabBarActiveTintColor: colors.lightyellow,
        tabBarInactiveTintColor: colors.white,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{     // of each icon 
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={32} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='ProductMarketplace'
        options={{
          title: 'Products',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="storefront" size={32} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='ServiceMarketplace'
        options={{
          title: 'Services',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="construct" size={32} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='LandMarketplace'
        options={{
          title: 'Land Market',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map" size={32} color={color} />
          ),
        }}
      />


    </Tabs>
  );
}
