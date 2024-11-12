import React, { useContext } from 'react';
import { View, StyleSheet, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';
import Header from '../common/Header';
import { PreferencesContext } from '../context/PreferencesContext';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get("window");

const Fee = ({ navigation }) => {
  const { theme } = useContext(PreferencesContext);

  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../images/back.png')}
        title="Fees Details"
        onClickLeftIcon={() => navigation.goBack()}
      />

      <View style={[styles.roundedContainer, { backgroundColor: theme.colors.background }]}>
        <Image source={require('../images/money.jpg')} style={styles.image} />

        {/* Paid and Due Containers */}
        <View style={styles.rowContainer}>
          <View style={styles.paidfee}>
            <View style={styles.iconWrapper}>
              <FontAwesome name="money" size={26} color="#fff" />
            </View>
            <Text style={styles.textStyle}>Paid Fee</Text>
          </View>
          <View style={styles.due}>
            <View style={styles.iconWrapper}>
              <FontAwesome name="money" size={26} color="#fff" />
            </View>
            <Text style={styles.textStyle}>Due Fee</Text>
          </View>
        </View>

        {/* Potli Container */}
        <View style={styles.potliContainer}>
          <Image source={require('../images/potli.jpg')} style={styles.imagepotli} />
        </View>

        {/* Total Container */}
        <View style={styles.total}>
          <View style={styles.iconWrapper1}>
            <FontAwesome name="money" size={26} color="#fff" />
          </View>
          <Text style={styles.textStyle}>Total Fee</Text>
        </View>

        {/* Pay Button */}
        <TouchableOpacity style={styles.payButton} onPress={() => {/* Handle Pay Action Here */}}>
          <Text style={styles.payButtonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.coloruse,
  },
  roundedContainer: {
    flex: 1,
    marginTop: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
    elevation: 5,
  },
  image: {
    width: '100%', // Full width of the container
    height: 200,
    resizeMode: 'contain',
    borderRadius: 10,
    marginBottom: 15,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  paidfee: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderColor: colors.coloruse,
    borderWidth: 1,
    backgroundColor: colors.backgroundlight,
    padding: 15,
    height: 190,
    marginRight: 7.5,
    alignItems: 'center',
  },
  due: {
    flex: 1,
    borderTopRightRadius: 20,
    borderColor: colors.red,
    borderWidth: 1,
    backgroundColor: colors.redlight,
    padding: 15,
    height: 190,
    marginLeft: 7.5,
    alignItems: 'center',
  },
  total: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: colors.bluedark,
    borderWidth: 1,
    backgroundColor: colors.bluelight,
    padding: 15,
    marginTop: 15,
    height: 190,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textStyle: {
    fontFamily: "Roboto",
    fontSize: 13,
    color: colors.placeholder,
  },
  potliContainer: {
    position: 'absolute',
    top: 350, // Adjust to overlap in the desired location
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 1.8,
    borderColor: colors.brown,
    backgroundColor: colors.backgroundlight,
    alignSelf: "center",
    zIndex: 1,
    overflow: 'hidden', // Ensure circular cropping of the image
  },
  imagepotli: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.coloruse, // Background color for the icon
    width: 50, // Size of the circle
    height: 50, // Size of the circle
    borderRadius: 10,
    marginBottom: 10, // Space between icon and label
  },
  iconWrapper1: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.coloruse,
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10, // Space between icon and label (for total fee)
  },
  payButton: {
    backgroundColor: colors.coloruse, // Background color for the button
    paddingVertical: 15,
    paddingHorizontal: 150,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Fee;
