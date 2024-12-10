import { StyleSheet } from 'react-native';
import { TabsDemo } from '@/components/WordsTabs';

export default function TabTwoScreen() {
  return (
    <TabsDemo />
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
