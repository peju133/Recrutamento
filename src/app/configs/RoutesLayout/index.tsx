import React, { useEffect, useState } from 'react';
import { Button, ImageComponent, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBarButtonProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import services from '../services';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PageLayout from '../../main/PageLayout';
import PropTypes from "prop-types";
import { heightPercentageToDP } from '../LayoutsUtils/StylesUtil';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


 function TabLayout() {

  const [ pages, setPages ] = useState<IPages[]>([]);
  
  useEffect(() => {
   getPages();
   
  }, []);

  const getPages = async() =>{
    const response = await services.getPages();
    response.map( d =>{ 
      d.content.map( async c => {
        const posts = await getPosts(c.properties.categories);
        c.posts = posts;
      })
    })
    setPages(response);
  }

  const getPosts = async( categories:string[] ) : Promise<IPost[]> =>{
    const response = await services.getPost(categories);
    return response;
  }

  if(!pages.length){
    return null;
  }
  

  return(
   
      <Tab.Navigator >
        {pages.map((item, index) => <Tab.Screen
          key={index} 
          options={{
            tabBarIcon:({ focused, color, size }) =><Icon name={item.icon} size={heightPercentageToDP('3')} color={focused ? color : "#000"} />
          }} 
          name={item.title} 
          children={( props )=><PageLayout {...item}/>}
          />
        )
        }
      </Tab.Navigator>
    
  )
  
}

const StackLayout=()=> {

  return (
    
    <NavigationContainer >
      <Stack.Navigator initialRouteName="main" screenOptions={{headerShown:false}}>
        <Stack.Screen name="main" component={TabLayout}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default StackLayout