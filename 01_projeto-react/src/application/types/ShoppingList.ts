export type ShoppingItem = {
  name: string
  amount: number
  amountType: 'kg' | 'unity' | 'dozen' | 'L'
  inCart?: boolean
}
