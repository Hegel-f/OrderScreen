import React from 'react'
import { View } from 'react-native';

import { OrderScreenStyles } from '@/constants';
import { OrderLayoutProps } from '@/config';
import { PrimaryButton, PrimaryText } from '@/components';

const styles = OrderScreenStyles;

const OrderLayout = ( props : OrderLayoutProps) => {
  return (
    <View style = { styles.container }>
      <View style = { styles.header }>
        <PrimaryText
          text = 'MARKET'
          theme = { styles.headerText1 }
        />

        <PrimaryText
          text = 'PRICE'
          theme = { styles.headerText1 }
        />

        <PrimaryText
          text = 'SIZE'
          theme = { styles.headerText1 }
        />
      </View>
      
      <PrimaryText
        text = { props.title }
        theme = { props.titleTheme }
      />

      <PrimaryText
        text = { props.desc }
        theme = { props.descTheme }
      />

      <PrimaryButton
        text = { props.touchableText1 }
        theme = { props.touchableTheme1 }
        onPress = { props.onPress1 }
      />

      <PrimaryButton
        text = { props.touchableText2 }
        theme = { props.touchableTheme2 }
        onPress = { props.onPress2 }
      />

      { props.children }

    </View>
  )
}

export default OrderLayout;

