import { render } from '@testing-library/react'

import { OrderStatus, OrderStatusType } from './order-status'

interface StatusConfig {
  text: string
  colorClass: string
}

const statuses: { [key in OrderStatusType]: StatusConfig } = {
  pending: { text: 'Pendente', colorClass: 'bg-slate-400' },
  canceled: { text: 'Cancelado', colorClass: 'bg-rose-500' },
  processing: { text: 'Em preparo', colorClass: 'bg-amber-500' },
  delivering: { text: 'Em entrega', colorClass: 'bg-amber-500' },
  delivered: { text: 'Entregue', colorClass: 'bg-emerald-500' },
}

describe('Order status', () => {
  Object.keys(statuses).forEach((statusKey) => {
    const status = statusKey as OrderStatusType
    const { text, colorClass } = statuses[status]

    it(`should display the right text and color when status is ${status}`, () => {
      const wrapper = render(<OrderStatus status={status} />)

      const statusText = wrapper.getByText(text)
      const badgeElement = wrapper.getByTestId('badge')

      expect(statusText).toBeInTheDocument()
      expect(badgeElement).toHaveClass(colorClass)
    })
  })
})
