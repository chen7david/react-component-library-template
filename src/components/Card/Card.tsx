import React from 'react'

export interface ICardProps {
  label: string
}

export const Card = (props: ICardProps) => {
  return <button>{props.label}</button>
}

export default Card
