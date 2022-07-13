export type ShoppingItem = {
  name: string
  amount: number
  amountType: 'kg' | 'unity' | 'dozen'
  inCart?: boolean
}
