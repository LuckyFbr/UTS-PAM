import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InputText from '../../components/InputText';
import Tombol from '../../components/Button';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: 'blue',
          fontSize: 20,
          fontWeight: 'bold',
          paddingVertical: 20,
          textAlign: 'center',
        }}>
        Kapalzy
      </Text>
      <InputText />
      <Tombol />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});
