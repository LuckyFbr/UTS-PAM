import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Lainnya = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
        }}>
        Fitur Lainnya Belum Tersedia
      </Text>
    </View>
  );
};

export default Lainnya;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
