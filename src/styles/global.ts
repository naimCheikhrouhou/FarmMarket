import { StyleSheet } from 'react-native';

export const colors = {
  background: '#fffdec',
  header: '#449d48',
  surface: '#2a2a4a',
  lightyellow: '#eeff00',
  text: '#000000',
  textSecondary: '#828282',
  alert: '#ff5252',
  white: '#ffffff',
  black: '#1111'
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textSecondary,
    marginTop: 30,
    marginBottom: 16,
  },
  empty: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});