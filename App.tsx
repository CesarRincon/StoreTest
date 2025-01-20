import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import store from './src/redux/store';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import Header from './src/components/Header/Header';
import { Provider } from 'react-redux';
import ScreenManager from './src/components/ScreenManager/ScreenManager';
import SplashScreen from './src/components/SplashScreen/SplashScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [isSplashDone, setIsSplashDone] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  };

  const handleSplashScreen = () => {
    setIsSplashDone(true);
  };

  return (
    isSplashDone ?
      <Provider store={store}>
        <SafeAreaView style={{ backgroundColor: "#fff" }}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <View
            style={{
              height: "100%",
              backgroundColor: "#fff",
              width: "100%",
              justifyContent: "center",
              alignItems: "center"
            }}>
            <Header />
            <ScreenManager />
          </View>
        </SafeAreaView>
      </Provider>
      :
      <SplashScreen onFinish={handleSplashScreen} />
  );
}

export default App;
