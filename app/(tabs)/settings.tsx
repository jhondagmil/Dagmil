import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView, TouchableOpacity } from 'react-native';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🔔 Notifications</Text>
        <View style={styles.optionRow}>
          <Text style={styles.text}>Enable Notifications</Text>
          <Switch value={notifications} onValueChange={setNotifications} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🌙 Appearance</Text>
        <View style={styles.optionRow}>
          <Text style={styles.text}>Dark Mode</Text>
          <Switch value={darkMode} onValueChange={setDarkMode} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>⚙️ Account</Text>
        <TouchableOpacity style={styles.optionRow}>
          <Text style={styles.text}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionRow}>
          <Text style={styles.text}>Manage Addresses</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🔐 Privacy & Security</Text>
        <TouchableOpacity style={styles.optionRow}>
          <Text style={styles.text}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionRow}>
          <Text style={styles.text}>Terms & Conditions</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>© 2025 Fashion Hub. All Rights Reserved.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: '#f8f8f8' },
  header: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 15 },
  section: { marginBottom: 20, padding: 15, backgroundColor: '#fff', borderRadius: 10, elevation: 3 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  optionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 },
  text: { fontSize: 16, color: '#555' },
  footer: { textAlign: 'center', fontSize: 14, color: '#888', marginTop: 20 },
});
