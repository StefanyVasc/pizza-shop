import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { signInMock } from './sign-in-mock'

export const worker = setupWorker(signInMock)

export async function enableMSW() {
  // interceptando as requisições para usar o msw no ambiente de teste
  if (env.MODE !== 'test') return
  await worker.start()
}
