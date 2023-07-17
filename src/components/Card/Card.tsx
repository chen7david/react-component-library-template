import React from 'react'

interface ICardProps {
  label: string
}

const Card = (props: ICardProps) => {
  return <button>{props.label}</button>
}

export default Card
