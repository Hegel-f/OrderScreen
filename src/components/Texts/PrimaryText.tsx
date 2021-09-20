import React from 'react';
import { Text, View } from 'react-native';

interface TextValues {
  text: string;
  theme: any;
}

export default function PrimaryText( props: TextValues )
{
  return (
    <View>
      <Text style = { props.theme }>{ props.text }</Text>
    </View>
  )
};
