import React from 'react'
import { Card as AntCard, CardProps } from 'antd'
export interface ICardProps extends CardProps {
  label: string
}

export const Card = (props: ICardProps) => {
  return <AntCard {...props}>{props.label}</AntCard>
}

export default Card
