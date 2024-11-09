import React from 'react'
import Skeleton from 'react-loading-skeleton'

export const EarnViewSkeleton = () => {
  return (
    <div className="flex flex-col opacity-50 mt-4 p-4 items-center w-full">
      <Skeleton
        circle
        containerClassName="h-[100px] w-[100px] opacity-30 mb-[40px]"
        height="100%"
        baseColor="white"
        highlightColor="gray"
      />
      <Skeleton
        className="rounded-[8px]"
        containerClassName="h-[27px] w-[72%] opacity-30 mb-3"
        height="100%"
        baseColor="white"
        highlightColor="gray"
      />
      <Skeleton
        className="rounded-[8px]"
        containerClassName="h-[15px] w-[150px] opacity-30 mb-8"
        height="100%"
        baseColor="white"
        highlightColor="gray"
      />

      <div className="w-full flex flex-col items-center gap-6">
        <Skeleton
          className="rounded-[24px]"
          containerClassName="h-[165px] w-full opacity-30"
          height="100%"
          baseColor="white"
          highlightColor="gray"
        />
        <Skeleton
          className="rounded-[8px]"
          containerClassName="h-[18px] w-[45%] opacity-30"
          height="100%"
          baseColor="white"
          highlightColor="gray"
        />
        <Skeleton
          className="rounded-[24px]"
          containerClassName="h-[126px] w-full opacity-30"
          height="100%"
          baseColor="white"
          highlightColor="gray"
        />
        <Skeleton
          className="rounded-[8px]"
          containerClassName="h-[18px] w-[28%] opacity-30"
          height="100%"
          baseColor="white"
          highlightColor="gray"
        />
        <Skeleton
          className="rounded-[24px]"
          containerClassName="h-[76px] w-full opacity-30"
          height="100%"
          baseColor="white"
          highlightColor="gray"
        />
      </div>
    </div>
  )
}
