import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ServicesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Our Services</Text>
      <Text style={styles.description}>
        At Fashion Hub, we offer a range of services to keep you stylish and 
        satisfied. From personalized styling to express delivery, we ensure a seamless experience.
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🛍 Personalized Styling</Text>
        <Text style={styles.text}>
          Get expert advice from our fashion stylists to help you pick the perfect outfit for any occasion.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🚚 Fast & Free Delivery</Text>
        <Text style={styles.text}>
          Enjoy express shipping on all orders. Free delivery on purchases above $50!
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🔄 Easy Returns & Exchanges</Text>
        <Text style={styles.text}>
          Hassle-free returns and exchanges within 30 days of purchase.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🎁 Exclusive Membership</Text>
        <Text style={styles.text}>
          Join our VIP program for special discounts, early access to sales, and exclusive offers.
        </Text>
      </View>

      <Text style={styles.footer}>© 2025 Fashion Hub. All Rights Reserved.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: '#f8f8f8' },
  header: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 15 },
  description: { fontSize: 16, textAlign: 'center', color: '#666', marginBottom: 20 },
  section: { marginBottom: 20, padding: 15, backgroundColor: '#fff', borderRadius: 10, elevation: 3 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 5 },
  text: { fontSize: 16, color: '#555', lineHeight: 22 },
  footer: { textAlign: 'center', fontSize: 14, color: '#888', marginTop: 20 },
});
