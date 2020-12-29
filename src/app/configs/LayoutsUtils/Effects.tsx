import React, {useRef, useEffect, useState } from 'react';
import {Animated, Text, View} from 'react-native';

  const Effects: React.FC = ({ children }) => {
    
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const fadeIn = () => {
            Animated.timing(fadeAnim, {toValue:1, duration:500, useNativeDriver:true}).start();
          };
        fadeIn();
    }, [])

    return (
      <Animated.View style={{opacity:fadeAnim, flex:1}}>
         { children }
      </Animated.View>
    );
  }
  
  export default Effects;