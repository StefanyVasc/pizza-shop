import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import {
  approveOrderMock,
  cancelOrderMock,
  deliverOrderMock,
  dispatchOrderMock,
} from './actions'
import {
  getDailyRevenueInPeriodMock,
  getDayOrdersAmountMock,
  getManagedRestaurantMock,
  getMonthCanceledOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthRevenueMock,
  getPopularProductsMock,
} from './dashboard'
import { getOrderDetailsMock, getOrdersMock } from './orders'
import { getProfileMock, updateProfileMock } from './profile'
import { registerRestaurantMock } from './restaurant'
import { signInMock } from './sign-in'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getManagedRestaurantMock,
  getProfileMock,
  updateProfileMock,
  getOrdersMock,
  getOrderDetailsMock,
  cancelOrderMock,
  approveOrderMock,
  deliverOrderMock,
  dispatchOrderMock,
)

export async function enableMSW() {
  // interceptando as requisições para usar o msw no ambiente de teste
  if (env.MODE !== 'test') return
  await worker.start()
}
