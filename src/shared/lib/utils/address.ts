export const truncateAddress = (address?: string) => {
  if (!address) return ''
  return address
    .slice(0, 4)
    .concat('...')
    .concat(address.slice(-4, address.length))
}
