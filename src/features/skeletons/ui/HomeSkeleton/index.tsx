import React from 'react'
import Skeleton from 'react-loading-skeleton'

export const HomeScreenSkeleton = () => {
  return (
    <div className="flex flex-col opacity-50 mt-4 p-4 items-center w-full">
      <Skeleton
        circle
        containerClassName="h-[48px] w-[48px] opacity-30 mb-[24px]"
        height="100%"
        baseColor="white"
        highlightColor="gray"
      />
      <Skeleton
        containerClassName="h-[34px] w-[70%] opacity-30 rounded-[8px] mb-3"
        height="100%"
        baseColor="white"
        highlightColor="gray"
      />
      <Skeleton
        containerClassName="h-[17px] w-[45%] opacity-30 rounded-[8px] mb-4"
        height="100%"
        baseColor="white"
        highlightColor="gray"
      />
      <Skeleton
        containerClassName="h-[32px] w-[25%] opacity-30 rounded-[18px]"
        height="100%"
        baseColor="white"
        highlightColor="gray"
      />
      <Skeleton
        containerClassName="h-[140px] w-[92%] opacity-30 rounded-[24px] mt-auto"
        height="100%"
        baseColor="white"
        highlightColor="gray"
      />
    </div>
  )
}
