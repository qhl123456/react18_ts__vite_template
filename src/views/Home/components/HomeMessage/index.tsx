import { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { MessageWrapper } from './style'

import { useMemoizedFn } from 'ahooks'

import { Button } from 'antd'
import MyComponents from './MyComponents'

interface IProps {
  children?: ReactNode
}

const HomeMessage: FC<IProps> = () => {
  console.log('父组件刷新')

  const [message, setMessage] = useState<string>('Hello World')

  const changeMessage = useMemoizedFn(() => {
    setMessage('Hello' + Math.random())
  })

  const memoTestFn = useMemoizedFn(() => {
    console.log(123)
  })

  return (
    <MessageWrapper>
      当前message-{message}
      <Button onClick={(e) => changeMessage()}>修改message</Button>
      <MyComponents onClick={memoTestFn} />
    </MessageWrapper>
  )
}

export default memo(HomeMessage)
