import { Dimensions  } from "react-native";

const { width, height } = Dimensions.get("window");

export const OrderScreenStyles = {
  title: {
    color: '#36A7C7',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: height * 0.15,
  },

  desc: {
    color: '#36A7C7',
    fontSize: 19,
    marginVertical: 10,
    marginBottom: 40,
    textAlign: 'center',
  },

  touchable: {
    color: '#36A7E7',
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontSize: 17,
  },

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: '#36A7E7',
  },

  headerText1: {
    fontSize: 16,
    color: '#FFFFFF'
  },

  topTabs: {
    title: 'Orders',
      headerStyle: {
        backgroundColor: '#36A7E7',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },  
      headerTitleAlign: 'center',
  }
}