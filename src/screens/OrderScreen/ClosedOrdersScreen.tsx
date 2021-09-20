import React from 'react'
import { OrderScreenStyles } from '@/constants';
import OrderLayout from './OrderLayout';

const styles = OrderScreenStyles;

const OpenOrdersScreen = (navigation: any) => {
  return (
    <OrderLayout
      title = 'Sign in to your account'
      titleTheme = { styles.title }
      desc = 'Sign in to see your Open orders.'
      descTheme = { styles.desc }
      touchableText1 = 'Sign in to Complex'
      touchableTheme1 = { styles.touchable }
      touchableText2 = 'Create Account'
      touchableTheme2 = { styles.touchable }
      onPress1 = { () => alert('clicked')}
      onPress2 = { () => alert('clicked')}
    >
      
    </OrderLayout>
  )
}

export default OpenOrdersScreen
