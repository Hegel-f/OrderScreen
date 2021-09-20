import OpenOrdersScreen from "./OrderScreen/OpenOrdersScreen";
import ClosedOrdersScreen from "./OrderScreen/ClosedOrdersScreen";
import MarketScreen from "./MarketScreen";
import ProfileScreen from "./ProfileScreen";
import HomeScreen from "./HomeScreen";
import TradeScreen from "./TradeScreen";

const BottomTabs = { 
  Market: MarketScreen, 
  Profile: ProfileScreen, 
  Home: HomeScreen, 
  Trade: TradeScreen
}

export {
  OpenOrdersScreen,
  ClosedOrdersScreen,
  BottomTabs
}