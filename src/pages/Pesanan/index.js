import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Pesanan = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
        }}>
        Tidak Ada Pesanan
      </Text>
    </View>
  );
};

export default Pesanan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
