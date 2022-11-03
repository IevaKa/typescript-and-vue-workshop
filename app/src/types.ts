import type { restaurantStatusList } from './constants'

type Status = typeof restaurantStatusList[number]

export type Restaurant = {
  id: string
  name: string
  address: string
  website: string
  status: Status
}

export type Dish = {
  id: string
  name: string
  status: Status
}
