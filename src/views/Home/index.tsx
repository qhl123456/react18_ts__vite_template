import { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'

import { NavLink, Outlet } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  return (
    <div>
      Home
      <NavLink to="/home/count">去技术</NavLink>
      <NavLink to="/home/message">去信息</NavLink>
      <Suspense fallback={<h2>loading...</h2>}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Home)
