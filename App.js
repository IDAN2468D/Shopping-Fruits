import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS } from './constants';
import DetailsTitle from './Components/DetailsTitle';
import OnBording from './Screens/OnBording';
import Details from './Screens/DetailsScreen';
import NavBar from './Navigation/NavBar';
import TabBar from './Navigation/TabBar';
import Settings from './Screens/Settings';
import SignIn from './Screens/Authentication/SignIn';
import SignUp from './Screens/Authentication/SignUp';
import ForgetPassword from './Screens/Authentication/ForgetPassword';
import ComputerDetails from './Screens/ComputerDetails';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="OnBording"
      >
        <Stack.Screen name="OnBording" component={OnBording} />
        <Stack.Screen name="Home" component={NavBar} />
        <Stack.Screen name="HomeScreen" component={TabBar} />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: COLORS.lightGreen,
              height: 60,
            },
            headerTitle: (props) => <DetailsTitle name="Details" {...props} />
          }}
        />
        <Stack.Screen
          name="ComputerDetails"
          component={ComputerDetails}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: COLORS.lightGreen,
              height: 60,
            },
            headerTitle: (props) => <DetailsTitle name="Details" {...props} />
          }}
        />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;