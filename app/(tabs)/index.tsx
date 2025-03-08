import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Fashion Hub</Text>
      <Text style={styles.subHeader}>Stay Stylish, Stay Trendy</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>New Arrivals</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Shop Now</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Trending Styles</Text>
        <Text style={styles.description}>
          Discover the latest trends in fashion curated just for you.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Exclusive Offers</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Check Deals</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>© 2025 Fashion Hub. All Rights Reserved.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: '#f8f8f8' },
  header: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  subHeader: { fontSize: 18, textAlign: 'center', color: '#666', marginBottom: 20 },
  section: { marginBottom: 20, padding: 15, backgroundColor: '#fff', borderRadius: 10, elevation: 3 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 5 },
  description: { fontSize: 16, color: '#555' },
  button: { marginTop: 10, backgroundColor: '#333', padding: 10, borderRadius: 5, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  footer: { textAlign: 'center', fontSize: 14, color: '#888', marginTop: 20 },
});
