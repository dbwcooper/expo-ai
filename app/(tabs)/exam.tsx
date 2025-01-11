import { StyleSheet } from 'react-native';
import { TabsDemo } from '@/components/WordsTabs';
import DashboardScreen from '@/components/demos/DashboardScreen';

export default function TabTwoScreen() {
  return (
    <>
    <TabsDemo />
    <DashboardScreen />
    </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },

});
