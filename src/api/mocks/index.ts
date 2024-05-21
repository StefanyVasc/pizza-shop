import { setupWorker } from 'msw/browser'

import { env } from '@/env'

export const worker = setupWorker()

export async function enableMSW() {
  // interceptando as requisições para usar o msw no ambiente de teste
  if (env.MODE !== 'test') return
  await worker.start()
}
