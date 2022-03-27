import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  IconHome,
  IconHomeActive,
  IconPesanan,
  IconPesananActive,
  IconPembatalan,
  IconPembatalanActive,
  IconLainnya,
  IconLainnyaActive,
} from '../../assets';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Beranda')
      return isFocused ? <IconHomeActive /> : <IconHome />;
    if (label === 'Pesanan')
      return isFocused ? <IconPesananActive /> : <IconPesanan />;
    if (label === 'Pembatalan')
      return isFocused ? <IconPembatalanActive /> : <IconPembatalan />;
    if (label === 'Lainnya')
      return isFocused ? <IconLainnyaActive /> : <IconLainnya />;
    return <IconHome />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: isFocused => ({
    fontSize: 13,
    color: isFocused ? '#3874FF' : '#000',
    marginTop: 8,
  }),
});
