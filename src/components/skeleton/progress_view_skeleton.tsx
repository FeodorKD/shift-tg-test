import React from 'react'
import Skeleton from 'react-loading-skeleton'

export const ProgressViewSkeleton = () => {
  return (
    <div className="w-full px-4 py-8">
      <div className="flex flex-col gap-3 w-full justify-center items-center">
        <Skeleton
          className="rounded-[8px]"
          containerClassName="h-[27px] max-w-[267px] w-[70%] opacity-30 rounded-[8px]"
          height="100%"
          baseColor="white"
          highlightColor="gray"
        />
        <Skeleton
          className="rounded-[8px]"
          containerClassName="h-[18px] max-w-[160px] w-[42%] opacity-30 rounded-[8px]"
          height="100%"
          baseColor="white"
          highlightColor="gray"
        />
        <div className="flex gap-2 max-w-[256] w-[65%] items-center mt-5 justify-center">
          {new Array(4).fill(0).map((_, i) => (
            <Skeleton
              className="rounded-[16px]"
              key={i}
              containerClassName="h-[32px] grow max-w-[57px] opacity-30 rounded-[16px]"
              height="100%"
              baseColor="white"
              highlightColor="gray"
            />
          ))}
        </div>
        <Skeleton
          className="rounded-[24px]"
          containerClassName="h-[140px] grow w-[90%] opacity-30 rounded-[24px] mt-6"
          height="100%"
          baseColor="white"
          highlightColor="gray"
        />
        <Skeleton
          className="rounded-[24px]"
          containerClassName="h-[15px] grow max-w-[160px] w-[40%] opacity-30 rounded-[24px] mt-3 mb-3"
          height="100%"
          baseColor="white"
          highlightColor="gray"
        />
        <Skeleton
          className="rounded-[24px]"
          containerClassName="h-[218px] grow w-[90%] opacity-30 rounded-[24px]"
          height="100%"
          baseColor="white"
          highlightColor="gray"
        />
        <Skeleton
          className="rounded-[24px]"
          containerClassName="h-[15px] grow max-w-[160px] w-[40%] opacity-30 rounded-[24px] mt-3 mb-3"
          height="100%"
          baseColor="white"
          highlightColor="gray"
        />
        <Skeleton
          className="rounded-[24px]"
          containerClassName="h-[80px] grow w-[90%] opacity-30 rounded-[24px]"
          height="100%"
          baseColor="white"
          highlightColor="gray"
        />
        <Skeleton
          className="rounded-[24px]"
          containerClassName="h-[80px] grow w-[90%] opacity-30 rounded-[24px]"
          height="100%"
          baseColor="white"
          highlightColor="gray"
        />
        <Skeleton
          className="rounded-[24px]"
          containerClassName="h-[80px] grow w-[90%] opacity-30 rounded-[24px]"
          height="100%"
          baseColor="white"
          highlightColor="gray"
        />
      </div>
    </div>
  )
}
