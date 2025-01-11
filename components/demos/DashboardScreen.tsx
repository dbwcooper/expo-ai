import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function DashboardScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.statsContainer}>
        <Text>Learning Progress: 75%</Text>
        <Text>Recent Uploads: 5 images</Text>
        <Text>Latest Score: 8.5/10</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Upload')}
      >
        <Text style={styles.buttonText}>Upload New Image</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Gallery')}
      >
        <Text style={styles.buttonText}>View Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Progress')}
      >
        <Text style={styles.buttonText}>View Progress</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  statsContainer: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

