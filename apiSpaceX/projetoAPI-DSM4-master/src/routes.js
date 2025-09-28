import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./pages/main";
import Login from "./pages/login";
import User from "./pages/user";
import Cadastro from "./pages/cadastro";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#072336ff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#fff',
          },
          headerTitleAlign: 'center',
          cardStyle: {
            backgroundColor: '#0f0f0f',    
          },
        }}
      >
        <Stack.Screen name="login" component={Login} options={{ title: "LOGIN" }} />
        <Stack.Screen name="main" component={Main} options={{ title: "SpaceX VIEWER" }} />
        <Stack.Screen name="user" component={User} options={{ title: "Detalhes do Lançamento" }} />
        <Stack.Screen name="cadastro" component={Cadastro} options={{ title: "Cadastro de Usuários" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}