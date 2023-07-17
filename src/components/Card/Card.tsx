import React from 'react'
import { Card as AntCard } from 'antd'
export interface ICardProps {
  label: string
}

export const Card = (props: ICardProps) => {
  return <AntCard>{props.label}</AntCard>
}

export default Card
