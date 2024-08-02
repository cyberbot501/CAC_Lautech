import React from 'react'
import NAV from '../../layout/nav/nav'
import HERO from '../../components/landingpage/hero'
import WELCOME from '../../components/landingpage/welcome'
import REASON from '../../components/landingpage/reason'

export default function landing() {
  return (
    <div>
        <NAV />
        <HERO />
        <WELCOME />
        <REASON />
    </div>
  )
}
