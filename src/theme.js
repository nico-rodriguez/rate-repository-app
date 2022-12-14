import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#707070',
    textLight: '#eaeaea',
    placeholderText: '#b0b0b0',
    backgroundPrimary: '#24292e',
    backgroundSecondary: '#e1e4e8',
    primary: '#0366d6',
    error: '#d73a4a',
  },
  fontSizes: {
    small: 12,
    medium: 14,
    large: 16,
  },
  fonts: {
    main: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  padding: {
    main: 20,
  },
  border: {
    width: 1,
    radius: 5,
    color: '#b0b0b0',
  },
};

export default theme;
