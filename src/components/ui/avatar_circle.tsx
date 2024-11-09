import React, { useEffect, useState } from 'react'
import { UserSessionDataType } from '@/types/user'
import { cn } from '@/lib/utils'

type AvatarCircleProps = {
  user: UserSessionDataType
  bg?: string
  width?: string
  height?: string
}

export const AvatarCircle = ({
  user,
  bg = '#4063FF',
  height = '80px',
  width = '80px',
}: AvatarCircleProps) => {
  const [avatarColor, setAvatarColor] = useState<string>('')

  useEffect(() => {
    setAvatarColor(bg)
  }, [])

  const initials = `${user.first_name[0]}${user.last_name[0]}`
  return (
    <div
      style={{ height, width, backgroundColor: avatarColor }}
      className={cn('rounded-full grid place-items-center font-bold')}
    >
      <p>{initials}</p>
    </div>
  )
}
