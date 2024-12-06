import { StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
 
import { theme } from '../../global/styles/theme';

// Estilos
export const styles = StyleSheet.create({
  safe: {
    flex: 1, 
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cartIcon: {
    width: 24,
    height: 24,
  },
  bannerImage: {
    width: '100%',
    height: 150,
  },
  sectionContainer: {
    marginVertical: 16,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    color: theme.colors.text,
    fontFamily: theme.fonts.title500,
    fontSize: 20,
  },
  viewAllText: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.text400,
    fontSize: 12,
  },
  productCard: {
    width: 150,
    marginRight: 16,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  productName: {
    color: theme.colors.text,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    marginTop: 8,
  },
  productStore: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.text400,
    fontSize: 12,
    margin: 2,
  },
  productPrice: {
    color: theme.colors.secondary100,
    fontFamily: theme.fonts.text500,
    fontSize: 16,
    fontWeight: 'bold',
  },
});