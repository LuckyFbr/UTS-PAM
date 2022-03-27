import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Pembatalan = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
        }}>
        Tidak Ada Pembatalan
      </Text>
    </View>
  );
};

export default Pembatalan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
