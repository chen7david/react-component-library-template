import * as React from 'react'
import Button, { ButtonProps } from 'antd/lib/button'
import { Tooltip } from 'antd'
import './BlazeButton.scss'

export type TBlazeButtonType =
  | 'retail'
  | 'dispatch'
  | 'blazepay'
  | 'manufacturing'
  | 'grow'
  | 'distro'
  | 'danger'
  | 'black'

export interface Props {
  blazeButtonType?: TBlazeButtonType
  buttonProps: ButtonProps
  titleProps?: {
    title: string | JSX.Element
    widthBreakPoint?: number
  }
}

export const BlazeButton = ({
  buttonProps,
  titleProps,
  blazeButtonType = 'retail'
}: Props) => {
  const addBlzButtonTypeClassName = (blazeButtonType?: TBlazeButtonType) => {
    let buttonClassName = `blz-btn-${blazeButtonType} ${
      buttonProps.className || ''
    }`

    if (buttonProps.type === 'ghost') {
      buttonClassName += ` ant-btn-background-ghost`
    }

    return buttonClassName.trim()
  }

  const [width, setWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))

    return function cleanup() {
      window.removeEventListener('resize', () => setWidth(window.innerWidth))
    }
  }, [])

  const renderButtonWithBreakPoint = (
    title: string | JSX.Element,
    widthBreakPoint: number
  ): JSX.Element => {
    return width <= widthBreakPoint ? (
      <Tooltip title={title} placement="bottom">
        <Button
          {...buttonProps}
          className={addBlzButtonTypeClassName(blazeButtonType)}
        />
      </Tooltip>
    ) : (
      <Button
        {...buttonProps}
        className={addBlzButtonTypeClassName(blazeButtonType)}
      >
        {title}
      </Button>
    )
  }

  return (
    <>
      {titleProps && titleProps.widthBreakPoint ? (
        renderButtonWithBreakPoint(titleProps.title, titleProps.widthBreakPoint)
      ) : (
        <Button
          {...buttonProps}
          className={addBlzButtonTypeClassName(blazeButtonType)}
        >
          {titleProps && titleProps.title}
        </Button>
      )}
    </>
  )
}

export default BlazeButton
