import React from 'react'
import Skeleton from 'react-loading-skeleton'

export const ZoneViewSkeleton = () => {
  return (
    <div className="flex flex-col opacity-50 mt-4 p-4 items-center w-full">
      <div className="w-full px-10 mb-[24px] flex items-center">
        <Skeleton
          className="rounded-[8px]"
          containerClassName="h-[27px] w-[48px] opacity-30 w-full"
          height="100%"
          baseColor="white"
          highlightColor="gray"
        />
      </div>
      <div className="flex justify-between items-end px-4 w-full">
        <div className="flex flex-col items-center">
          <Skeleton
            circle
            containerClassName="h-[48px] w-[48px] opacity-30 mb-[24px] mb-3"
            height="100%"
            baseColor="white"
            highlightColor="gray"
          />
          <Skeleton
            className="rounded-[8px]"
            containerClassName="h-[14px] w-[58px] opacity-30 mb-[24px] mb-[6px]"
            height="100%"
            baseColor="white"
            highlightColor="gray"
          />
          <Skeleton
            className="rounded-[8px]"
            containerClassName="h-[14px] w-[43px] opacity-30 mb-[24px]"
            height="100%"
            baseColor="white"
            highlightColor="gray"
          />
        </div>

        <div className="flex flex-col items-center">
          <Skeleton
            circle
            containerClassName="h-[80px] w-[80px] opacity-30 mb-[24px] mb-3"
            height="100%"
            baseColor="white"
            highlightColor="gray"
          />
          <Skeleton
            className="rounded-[8px]"
            containerClassName="h-[14px] w-[58px] opacity-30 mb-[24px] mb-[6px]"
            height="100%"
            baseColor="white"
            highlightColor="gray"
          />
          <Skeleton
            className="rounded-[8px]"
            containerClassName="h-[14px] w-[43px] opacity-30 mb-[24px]"
            height="100%"
            baseColor="white"
            highlightColor="gray"
          />
        </div>

        <div className="flex flex-col items-center">
          <Skeleton
            circle
            containerClassName="h-[48px] w-[48px] opacity-30 mb-[24px] mb-3"
            height="100%"
            baseColor="white"
            highlightColor="gray"
          />
          <Skeleton
            className="rounded-[8px]"
            containerClassName="h-[14px] w-[58px] opacity-30 mb-[24px] mb-[6px]"
            height="100%"
            baseColor="white"
            highlightColor="gray"
          />
          <Skeleton
            className="rounded-[8px]"
            containerClassName="h-[14px] w-[43px] opacity-30 mb-[24px]"
            height="100%"
            baseColor="white"
            highlightColor="gray"
          />
        </div>
      </div>
      <div className="py-3 w-full h-[150px]">
        <Skeleton
          className="rounded-[24px]"
          containerClassName="h-[150px] w-full opacity-30"
          height="100%"
          baseColor="white"
          highlightColor="gray"
        />
      </div>
      <div className="py-3 w-[22%] h-[15px]">
        <Skeleton
          className="rounded-[8px]"
          containerClassName="h-[15px] w-full opacity-30"
          baseColor="white"
          highlightColor="gray"
        />
      </div>
      <div className="py-3 w-full flex flex-col gap-8 mt-8">
        {new Array(4).fill('').map((_i, idx) => (
          <div className="w-full flex justify-between" key={idx}>
            <div className="flex gap-4 items-center">
              <Skeleton
                circle
                containerClassName="h-[40px] w-[40px] opacity-30"
                baseColor="white"
                height="100%"
                highlightColor="gray"
              />
              <div className="flex flex-col gap-[6px]">
                <Skeleton
                  className="rounded-[8px]"
                  containerClassName="h-[14px] w-[86px] opacity-30"
                  baseColor="white"
                  highlightColor="gray"
                />
                <Skeleton
                  className="rounded-[8px]"
                  containerClassName="h-[14px] w-[135px] opacity-30"
                  baseColor="white"
                  highlightColor="gray"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
