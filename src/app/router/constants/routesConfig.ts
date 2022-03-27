import { RouteProps } from 'react-router'
import { FC } from 'react'

import { RouteNames } from './routeNames'

export interface IRoute extends RouteProps {
  title: string
  path: RouteNames
  Component: FC
}

export const ROUTES_CONFIG: IRoute[] = []
