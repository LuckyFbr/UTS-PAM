import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

const Tombol = () => (
  <Button
    title="Buat Pesanan"
    onPress={() => Alert.alert('Pesanan anda telah dibuat')}
  />
);

export default Tombol;
