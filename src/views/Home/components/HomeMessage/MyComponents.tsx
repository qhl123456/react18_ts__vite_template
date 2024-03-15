import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Button } from 'antd'

interface IProps {
  children?: ReactNode
  onClick: () => void
}

const MyComponents: FC<IProps> = (props) => {
  console.log('子组件刷新')

  return (
    <div>
      MyComponents
      <Button onClick={props.onClick}>测试父组件</Button>
    </div>
  )
}

export default memo(MyComponents)
