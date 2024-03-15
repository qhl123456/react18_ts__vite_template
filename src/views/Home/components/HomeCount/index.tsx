import { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { CountWrapper } from './style'

import { useAppRedux } from '@/hooks'
import { changeCount } from '@/store/features/count'

import { Button } from 'antd'

interface IProps {
  children?: ReactNode
}
const { useAppSelector, useAppDispatch, useAppShallowEqual } = useAppRedux

const HomeCount: FC<IProps> = () => {
  const { count } = useAppSelector(
    (state) => ({
      count: state.counter.count
    }),
    useAppShallowEqual
  )

  const dispatch = useAppDispatch()

  function handleChangeCount(count: number) {
    dispatch(changeCount(count))
  }

  return (
    <CountWrapper>
      当前计数:{count}
      <Button onClick={(e) => handleChangeCount(1)}>+1</Button>
      <Button onClick={(e) => handleChangeCount(-1)}>-1</Button>
      <div className="underline font-bold"> Tailwind CSS集成测试</div>
    </CountWrapper>
  )
}

export default memo(HomeCount)
