This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

# Coverage Test

------------------------------------------|---------|----------|---------|---------|----------------------------------------------
File | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s  
-------------------------------------------|---------|----------|---------|---------|----------------------------------------------
All files | 74.72 | 40.68 | 66.3 | 74.04 |  
 components/Banner | 100 | 100 | 100 | 100 |  
 Banner.tsx | 100 | 100 | 100 | 100 |  
 BannerStyles.ts | 100 | 100 | 100 | 100 |  
 components/ButtonAddToCart | 81.25 | 50 | 80 | 92.3 |  
 ButtonAddToCart.tsx | 80 | 50 | 80 | 91.66 | 18  
 ButtonAddToCartStyles.ts | 100 | 100 | 100 | 100 |  
 components/Dropdown | 100 | 92.85 | 100 | 100 |  
 Dropdown.tsx | 100 | 92.85 | 100 | 100 | 4  
 components/Header | 72.72 | 37.5 | 40 | 70 |  
 Header.tsx | 70 | 37.5 | 40 | 66.66 | 18-38,66  
 HeaderStyles.ts | 100 | 100 | 100 | 100 |  
 components/OrderPlaced | 100 | 100 | 100 | 100 |  
 OrderPlaced.tsx | 100 | 100 | 100 | 100 |  
 OrderPlacedStyles.ts | 100 | 100 | 100 | 100 |  
 components/Payment | 38.88 | 16.9 | 20 | 38.02 |  
 Payment.tsx | 38.02 | 16.9 | 20 | 37.14 | 38-43,47-62,66-69,80-116,121,123,133,160-412
PaymentStyles.ts | 100 | 100 | 100 | 100 |  
 components/ProductCard | 100 | 100 | 100 | 100 |  
 ProductCard.tsx | 100 | 100 | 100 | 100 |  
 components/ProductCard/Modes/CartMode | 100 | 100 | 100 | 100 |  
 CartMode.tsx | 100 | 100 | 100 | 100 |  
 CartModeStyles.ts | 100 | 100 | 100 | 100 |  
 components/ProductCard/Modes/ShowCaseMode | 100 | 100 | 100 | 100 |  
 ShowCaseMode.tsx | 100 | 100 | 100 | 100 |  
 ShowCaseModeStyles.ts | 100 | 100 | 100 | 100 |  
 components/ProductShowCase | 87.5 | 100 | 60 | 87.5 |  
 ProductShowCase.tsx | 86.66 | 100 | 60 | 86.66 | 44-48  
 ProductShowCaseStyles.ts | 100 | 100 | 100 | 100 |  
 components/QuantitySelector | 85.71 | 100 | 75 | 85.71 |  
 QuantitySelector.tsx | 83.33 | 100 | 75 | 83.33 | 43  
 QuantitySelectorStyles.ts | 100 | 100 | 100 | 100 |  
 components/ScreenManager | 100 | 100 | 100 | 100 |  
 ScreenManager.tsx | 100 | 100 | 100 | 100 |  
 components/Search | 100 | 100 | 100 | 100 |  
 Search.tsx | 100 | 100 | 100 | 100 |  
 SearchStyles.ts | 100 | 100 | 100 | 100 |  
 components/ShippingModal | 87.5 | 100 | 66.66 | 85.71 |  
 ShippingModal.tsx | 85.71 | 100 | 66.66 | 83.33 | 27  
 ShippingModalStyles.ts | 100 | 100 | 100 | 100 |  
 components/ShippingModal/AddressMode | 60.86 | 50 | 42.85 | 60.86 |  
 AddressMode.tsx | 59.09 | 50 | 42.85 | 59.09 | 27-39,45-46,66-85  
 AddressModeStyles.ts | 100 | 100 | 100 | 100 |  
 components/ShippingModal/EmailMode | 64.28 | 25 | 40 | 61.53 |  
 EmailMode.tsx | 61.53 | 25 | 40 | 58.33 | 13-19,35-46  
 EmailModeStyles.ts | 100 | 100 | 100 | 100 |  
 components/SplashScreen | 100 | 100 | 100 | 100 |  
 SplasScreenStyles.ts | 100 | 100 | 100 | 100 |  
 SplashScreen.tsx | 100 | 100 | 100 | 100 |  
 components/Toast | 100 | 83.33 | 100 | 100 |  
 Toast.tsx | 100 | 83.33 | 100 | 100 | 54  
 ToastStyles.ts | 100 | 100 | 100 | 100 |  
 components/Totalizer | 100 | 100 | 100 | 100 |  
 Totalizer.tsx | 100 | 100 | 100 | 100 |  
 TotalizerStyles.ts | 100 | 100 | 100 | 100 |  
 screens/Cart | 100 | 100 | 100 | 100 |  
 Cart.tsx | 100 | 100 | 100 | 100 |  
 CartStyles.ts | 100 | 100 | 100 | 100 |  
 screens/Checkout | 83.33 | 0 | 100 | 80 |  
 Checkout.tsx | 80 | 0 | 100 | 75 | 15  
 CheckoutStyles.ts | 100 | 100 | 100 | 100 |  
 screens/Home | 83.33 | 100 | 100 | 80 |  
 Home.tsx | 80 | 100 | 100 | 75 | 15  
 HomeStyles.ts | 100 | 100 | 100 | 100 |  
 types | 0 | 0 | 0 | 0 |  
 types.ts | 0 | 0 | 0 | 0 |  
-------------------------------------------|---------|----------|---------|---------|----------------------------------------------

### Test Suites:

7 failed, 14 passed, 21 total

### Tests:

12 failed, 28 passed, 40 total

### Snapshots:

0 total

### Time:

9.809 s, estimated 11 s

# Instrucciones para correr los tests

1. **Instalar dependencias**  
   Antes de ejecutar los tests, asegúrate de instalar todas las dependencias ejecutando:

   ```bash
   npm install
   ```

2. **Ejecutar todos los tests**
   ```
   npm test
   ```
3. **Ejecutar un test en especifico**
   ```
   npm test Archivo.test.tsx
   ```
