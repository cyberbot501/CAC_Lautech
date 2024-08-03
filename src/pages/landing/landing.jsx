import React from 'react'
import NAV from '../../layout/nav/nav'
import HERO from '../../components/landingpage/hero'
import WELCOME from '../../components/landingpage/welcome'
import REASON from '../../components/landingpage/reason'
import LATEST from '../../components/landingpage/latest'

export default function landing() {
  return (
    <div>
        <NAV />
        <HERO />
        <WELCOME />
        <REASON />
        <LATEST />
    </div>
  )
}
