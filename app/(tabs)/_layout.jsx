import { View, Text } from 'react-native'
import React from 'react'

export default function TabLayout() {
  return (
    <Tabs>
        <Tabs.screen name="mytrip"/>
        <Tabs.screen name="discover"/>
        <Tabs.screen name="profile"/>

    </Tabs>
  )
}