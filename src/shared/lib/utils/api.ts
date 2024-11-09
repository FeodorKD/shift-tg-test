import { ApiRouteType } from '@/shared/types'

export function getAPIUrl(route: ApiRouteType) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://0.0.0.0:8000'
  return `${API_URL}/${route}`
}
