import React, { useState } from 'react'
import { CharacterBox, ItemsList, Button } from '@hs/shared'
import {
  itemBlockStyle,
  skillsList,
  statsList,
  abilityList,
  item,
  itemsList,
} from './mocks'
import './HomePage.scss'

export const HomePage = () => {
  const [itemDetails, setItemDetails] = useState<any>({})

  const handleClick = () => {
    setItemDetails({
      style: itemBlockStyle,
      skills: skillsList,
      ability: abilityList,
      stats: statsList,
      item,
    })
  }

  return (
    <>
      Home page
      <Button name="Test" />
      <div className="list-of-items">
        <ItemsList items={itemsList} handleClick={() => handleClick()} />
        {itemDetails.style ? <CharacterBox {...itemDetails} /> : ''}
      </div>
    </>
  )
}
