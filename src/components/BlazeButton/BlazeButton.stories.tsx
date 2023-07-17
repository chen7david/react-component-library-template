import React from 'react'
import { PlusOutlined } from '@ant-design/icons'

import { BlazeButton, TBlazeButtonType } from './BlazeButton'
import { Space } from 'antd'
import { SizeType } from 'antd/lib/config-provider/SizeContext'

const blztypes: TBlazeButtonType[] = [
  'retail',
  'dispatch',
  'blazepay',
  'manufacturing',
  'grow',
  'distro',
  'danger',
  'black'
]

type IAntBtnTypes =
  | 'primary'
  | 'ghost'
  | 'dashed'
  | 'link'
  | 'text'
  | 'default'
  | undefined
const antBtnTypes: IAntBtnTypes[] = ['primary', 'ghost', 'link', 'default']

const antBtnSizes: SizeType[] = ['small', 'middle', 'large']

interface IBlazeButtonStoryProps {
  buttonType: 'link' | 'ghost' | 'default' | 'primary'
  disabled: boolean
  loading: boolean
  size: SizeType
  title: string
  widthBreakPoint: number
  blazeButtonType: TBlazeButtonType
  onClick: () => void
  showIcon: boolean
  showBreakPoint: boolean
}

const argTypes = {
  buttonProps: { table: { disable: true } },
  titleProps: { table: { disable: true } },
  onClick: { table: { disable: true } },
  buttonType: {
    name: 'buttonProps.type',
    description: 'Ant Design Button prop: **type**',
    table: {
      type: {
        summary: antBtnTypes.join('|')
      }
    },
    control: 'select',
    options: ['link', 'ghost', 'default', 'primary']
  },
  disabled: {
    name: 'buttonProps.disabled',
    description: 'Ant Design Button prop: **disabled**',
    table: {
      defaultValue: { summary: 'false' },
      type: {
        summary: 'true|false'
      }
    },
    control: 'boolean'
  },
  loading: {
    name: 'buttonProps.loading',
    description: 'Ant Design Button prop: **loading**',
    table: {
      defaultValue: { summary: 'false' },
      type: {
        summary: 'true|false'
      }
    },
    control: 'boolean'
  },
  size: {
    name: 'buttonProps.size',
    description: 'Ant Design Button prop: **size**',
    table: {
      defaultValue: { summary: 'middle' },
      type: {
        summary: antBtnSizes.join('|')
      }
    },
    control: 'radio',
    options: antBtnSizes
  },
  showIcon: {
    name: 'buttonProps.icon',
    description: 'Ant Design Button prop: **icon**',
    table: {
      type: {
        summary: 'ReactNode'
      }
    },
    control: 'boolean'
  },
  title: {
    name: 'titleProps.title',
    description: 'Button text',
    table: {
      type: {
        summary: 'string'
      }
    },
    control: 'text'
  },
  showBreakPoint: {
    name: 'titleProps.widthBreakPoint',
    description: 'Button width breakpoint',
    table: {
      type: {
        summary: 'number'
      }
    },
    control: 'boolean'
  }
}

const argDefault = {
  blazeButtonType: 'retail',
  buttonType: 'primary',
  disabled: false,
  loading: false,
  onClick: () => {
    alert('Blaze Button clicked')
  },
  showIcon: false,
  size: 'middle',
  title: 'Blaze button',
  showBreakPoint: false
}

const IconExample = <PlusOutlined />
const breakpointExample = 1400

export const BlazeButtonMeta = {
  name: 'Blaze Button',
  args: argDefault,
  argTypes: argTypes,
  render: (args: IBlazeButtonStoryProps) => (
    <BlazeButton
      buttonProps={{
        type: args.buttonType,
        disabled: args.disabled,
        loading: args.loading,
        size: args.size,
        onClick: args.onClick,
        icon: args.showIcon && IconExample
      }}
      titleProps={{
        title: args.title,
        widthBreakPoint: args.showBreakPoint ? breakpointExample : undefined
      }}
      blazeButtonType={args.blazeButtonType}
    />
  )
}

export const BlazeButtonTypes = {
  args: { ...argDefault, title: '' },
  argTypes: { ...argTypes, blazeButtonType: { table: { disable: true } } },
  render: (args: IBlazeButtonStoryProps) => (
    <Space style={{ display: 'flex', flexWrap: 'wrap' }}>
      {blztypes.map((blztype, index) => {
        return (
          <BlazeButton
            key={index}
            buttonProps={{
              type: args.buttonType,
              disabled: args.disabled,
              loading: args.loading,
              size: args.size,
              onClick: args.onClick,
              icon: args.showIcon && IconExample
            }}
            blazeButtonType={blztype}
            titleProps={{
              title: args.title !== '' ? args.title : `Blaze ${blztype} Button`,
              widthBreakPoint: args.showBreakPoint
                ? breakpointExample
                : undefined
            }}
          />
        )
      })}
    </Space>
  )
}
export const ButtonTypes = {
  args: argDefault,
  argTypes: { ...argTypes, buttonType: { table: { disable: true } } },
  render: (args: IBlazeButtonStoryProps) => (
    <Space style={{ display: 'flex', flexWrap: 'wrap' }}>
      {antBtnTypes.map((btnType, index) => {
        return (
          <BlazeButton
            key={index}
            buttonProps={{
              type: btnType,
              disabled: args.disabled,
              loading: args.loading,
              size: args.size,
              onClick: args.onClick,
              icon: args.showIcon && IconExample
            }}
            blazeButtonType={args.blazeButtonType}
            titleProps={{
              title: `${btnType} Button`,
              widthBreakPoint: args.showBreakPoint
                ? breakpointExample
                : undefined
            }}
          />
        )
      })}
    </Space>
  )
}

export const Size = {
  args: argDefault,
  argTypes: { ...argTypes, size: { table: { disable: true } } },
  render: (args: IBlazeButtonStoryProps) => (
    <Space style={{ display: 'flex', flexWrap: 'wrap' }}>
      {antBtnSizes.map((btnSize, index) => {
        return (
          <BlazeButton
            key={index}
            buttonProps={{
              type: args.buttonType,
              disabled: args.disabled,
              loading: args.loading,
              size: btnSize,
              onClick: args.onClick,
              icon: args.showIcon && IconExample
            }}
            blazeButtonType={args.blazeButtonType}
            titleProps={{
              title: `${btnSize} Button`,
              widthBreakPoint: args.showBreakPoint
                ? breakpointExample
                : undefined
            }}
          />
        )
      })}
    </Space>
  )
}

export const Loading = {
  args: { ...argDefault, loading: true },
  argTypes: { ...argTypes, loading: { table: { disable: true } } },
  render: (args: IBlazeButtonStoryProps) => (
    <BlazeButton
      buttonProps={{
        type: args.buttonType,
        disabled: args.disabled,
        loading: args.loading,
        size: args.size,
        onClick: args.onClick,
        icon: args.showIcon && IconExample
      }}
      blazeButtonType={args.blazeButtonType}
      titleProps={{
        title: args.title,
        widthBreakPoint: args.showBreakPoint ? breakpointExample : undefined
      }}
    />
  )
}
export const Disabled = {
  args: { ...argDefault, disabled: true },
  argTypes: { ...argTypes, disabled: { table: { disable: true } } },
  render: (args: IBlazeButtonStoryProps) => (
    <BlazeButton
      buttonProps={{
        type: args.buttonType,
        disabled: args.disabled,
        loading: args.loading,
        size: args.size,
        onClick: args.onClick,
        icon: args.showIcon && IconExample
      }}
      blazeButtonType={args.blazeButtonType}
      titleProps={{
        title: args.title,
        widthBreakPoint: args.showBreakPoint ? breakpointExample : undefined
      }}
    />
  )
}

export const ButtonWithIcon = {
  args: { ...argDefault, showIcon: true },
  argTypes: { ...argTypes, showIcon: { table: { disable: true } } },
  render: (args: IBlazeButtonStoryProps) => (
    <BlazeButton
      buttonProps={{
        type: args.buttonType,
        disabled: args.disabled,
        loading: args.loading,
        size: args.size,
        onClick: args.onClick,
        icon: args.showIcon && IconExample
      }}
      blazeButtonType={args.blazeButtonType}
      titleProps={{
        title: args.title,
        widthBreakPoint: args.showBreakPoint ? breakpointExample : undefined
      }}
    />
  )
}

export const ButtonWithBreakPoint = {
  args: { ...argDefault, showIcon: true, showBreakPoint: true },
  argTypes: { ...argTypes, showBreakPoint: { table: { disable: true } } },
  render: (args: IBlazeButtonStoryProps) => (
    <BlazeButton
      buttonProps={{
        type: args.buttonType,
        disabled: args.disabled,
        loading: args.loading,
        size: args.size,
        onClick: args.onClick,
        icon: args.showIcon && IconExample
      }}
      blazeButtonType={args.blazeButtonType}
      titleProps={{
        title: args.title,
        widthBreakPoint: args.showBreakPoint ? breakpointExample : undefined
      }}
    />
  )
}

export default {
  title: 'Blaze/Blaze Button',
  component: BlazeButton,
  tags: ['autodocs'],
  parameters: { controls: { sort: 'requiredFirst' } }
}
