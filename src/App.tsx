import { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink, useRoutes } from 'react-router-dom'

import routes from './router'

interface IProps {
  children?: ReactNode
}

const App: FC<IProps> = () => {
  return (
    <div>
      App
      <NavLink to="/home">首页</NavLink>
      <NavLink to="/category">分类</NavLink>
      <div className="nav">
        <Suspense fallback={<h2>Loading...</h2>}>{useRoutes(routes)}</Suspense>
      </div>
    </div>
  )
}

export default memo(App)
