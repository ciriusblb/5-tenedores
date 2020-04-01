import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import {MaterialCommunityIcons} from 'react-native-vector-icons'

import RestaurantsScreen from '../screens/Restaurants/Restaurants' // la importacion es correcta por el index añadido en la carpeta restaurants
import RestaurantScreen from '../screens/Restaurants/Restaurant'
import AddRestaurantScreen from '../screens/Restaurants/AddRestaurant'
import AddReviewRestaurantScreen from '../screens/Restaurants/AddReviewRestaurant'

import TopRestaurantsScreen from '../screens/TopRestaurants'

import FavoritesScreen from '../screens/Favorites'

import SearchScreen from '../screens/Search'

import MyAccountScreen from '../screens/Account/MyAccount'
import LoginScreen from '../screens/Account/Login'
import RegisterScreen from '../screens/Account/Register'


const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function RestaurantsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Restaurantes" component={RestaurantsScreen}/>
            <Stack.Screen name="Nuevo Restaurante" component={AddRestaurantScreen}/>
            <Stack.Screen name="Restaurante" component={RestaurantScreen} options={({ route }) => ({ title: route.params.restaurant.name })}/>
            <Stack.Screen name="Nuevo Comentario" component={AddReviewRestaurantScreen}/>

        </Stack.Navigator>
    )
}
function TopRestaurantsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Top 5" component={TopRestaurantsScreen}/>
        </Stack.Navigator>
    )
}
function FavoritesStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Favoritos" component={FavoritesScreen} />
        </Stack.Navigator>
    )
}
function SearchStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Buscar" component={SearchScreen}/>
        </Stack.Navigator>
    )
}
function MyAccountStack() {
    return (
        <Stack.Navigator initialRouteName="Mi cuenta">
            <Stack.Screen name="Mi cuenta" component={MyAccountScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>

        </Stack.Navigator>
    )
}

export default function Navigation(){
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Restaurantes"
                    component = {RestaurantsStack}
                    options={{
                        tabBarIcon:({color, size}) => (
                          <MaterialCommunityIcons name="home" color={color} size={size} />  
                        )
                    }}
                />
                <Tab.Screen
                    name="Top 5"
                    component = {TopRestaurantsStack}
                    options={{
                        tabBarIcon:({color, size}) => (
                          <MaterialCommunityIcons name="star-outline" color={color} size={size} />  
                        )
                    }}
                />
                <Tab.Screen
                    name="Favoritos"
                    component = {FavoritesStack}
                    options={{
                        tabBarIcon:({color, size}) => (
                            <MaterialCommunityIcons name="heart-outline" color={color} size={size} />
                        )
                    }}
                />

                <Tab.Screen
                    name="Buscar"
                    component = {SearchStack}
                    options={{
                        tabBarIcon:({color, size}) => (
                          <MaterialCommunityIcons name="rocket" color={color} size={size} />  
                        )
                    }}
                />
                <Tab.Screen
                    name="Mi cuenta"
                    component = {MyAccountStack}
                    options={{
                        tabBarIcon:({color, size}) => (
                          <MaterialCommunityIcons name="account" color={color} size={size} />  
                        )
                    }}
                />
                
            </Tab.Navigator>
        </NavigationContainer>
    )
}