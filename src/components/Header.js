import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { fontSizes, spacing } from '../utils/sizes';
import { colors } from '../utils/color';

export const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.logo} source={require('../../assets/pomadinha.png')}></Image>
      </View>
      <Text style={styles.text}>Pomadinha</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.md,
  },
  logo: {
    height: 70,
    width: 70,
  },
  text: {
    marginLeft: spacing.md,
    color: colors.white,
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
