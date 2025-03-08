import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>About Fashion Hub</Text>
      <Text style={styles.description}>
        Fashion Hub is your go-to destination for the latest styles and trends. 
        We bring you high-quality fashion at affordable prices, ensuring you 
        stay stylish and confident wherever you go.
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.text}>
          To empower individuals with trendy and comfortable fashion while promoting 
          sustainability and ethical sourcing.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Why Choose Us?</Text>
        <Text style={styles.text}>
          ✅ Latest fashion trends{'\n'}
          ✅ Affordable prices{'\n'}
          ✅ Sustainable & ethical sourcing{'\n'}
          ✅ Customer satisfaction guaranteed
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.text}>
          📍 123 Fashion Street, New York, NY{'\n'}
          📧 support@fashionhub.com{'\n'}
          📞 +1 234 567 890
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
