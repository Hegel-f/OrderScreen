import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface ButtonValues {
  text: string;
  onPress: () => void;
  theme: any;
};

export default function PrimaryButton(  props  : ButtonValues)
{
  return (
    <TouchableOpacity onPress = { props.onPress}>
        <Text style = { props.theme }>{ props.text }</Text>
    </TouchableOpacity>
  );
};
