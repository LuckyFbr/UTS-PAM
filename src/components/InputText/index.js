import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Alert,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;
const InputText = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <View>
        <Text>Pelabuhan Awal : </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={String}
          placeholder="Pilih Pelabuhan Awal"
          keyboardType="default"
        />
      </View>
      <View>
        <Text>Pelabuhan Tujuan : </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={String}
          placeholder="Pilih Pelabuhan Tujuan"
          keyboardType="default"
        />
      </View>
      <View>
        <Text>Pilih Layanan : </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={String}
          placeholder="Pilih Layanan"
          keyboardType="default"
        />
      </View>
      <View>
        <Text>Pilih Tanggal Masuk : </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={String}
          placeholder="Pilih Tanggal Masuk"
          keyboardType="default"
        />
      </View>
      <View>
        <Text>Pelabuhan Jam Masuk : </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={String}
          placeholder="Pilih Jam Masuk"
          keyboardType="default"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 280,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default InputText;
