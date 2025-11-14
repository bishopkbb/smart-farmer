import React from 'react';

// Skeleton for Crop Cards
export const SkeletonCropCard = () => (
  <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg animate-pulse">
    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded-full mb-2 sm:mb-3"></div>
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
    <div className="h-3 bg-gray-200 rounded w-1/2 mb-3"></div>
    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
  </div>
);

// Skeleton for Weather Card
export const SkeletonWeather = () => (
  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-4 sm:p-6 animate-pulse">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
      <div className="w-full sm:w-auto">
        <div className="h-3 bg-white/20 rounded w-24 mb-2"></div>
        <div className="h-10 bg-white/20 rounded w-20 mb-2"></div>
        <div className="h-3 bg-white/20 rounded w-32"></div>
      </div>
      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full"></div>
    </div>
    <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
      <div className="h-4 bg-white/20 rounded"></div>
      <div className="h-4 bg-white/20 rounded"></div>
    </div>
  </div>
);

// Skeleton for Quick Action Buttons
export const SkeletonAction = () => (
  <div className="p-4 sm:p-6 rounded-2xl shadow-xl animate-pulse bg-gray-200">
    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-300 rounded-full mb-2 sm:mb-3"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
  </div>
);

// Skeleton for Farm Log List
export const SkeletonFarmLog = () => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-2xl animate-pulse gap-3 sm:gap-0">
    <div className="flex items-center space-x-3 w-full sm:w-auto">
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
      <div className="flex-1">
        <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-16"></div>
      </div>
    </div>
    <div className="w-full sm:w-auto">
      <div className="h-4 bg-gray-200 rounded w-16 mb-1"></div>
      <div className="h-3 bg-gray-200 rounded w-20"></div>
    </div>
  </div>
);

// Skeleton for Calendar Month Cards
export const SkeletonMonthCard = () => (
  <div className="bg-white p-5 rounded-2xl shadow-lg animate-pulse">
    <div className="h-5 bg-gray-200 rounded w-20 mb-2"></div>
    <div className="flex flex-wrap gap-1">
      <div className="w-6 h-6 bg-gray-200 rounded"></div>
      <div className="w-6 h-6 bg-gray-200 rounded"></div>
      <div className="w-6 h-6 bg-gray-200 rounded"></div>
    </div>
  </div>
);

// Skeleton List Wrapper
export const SkeletonList = ({ count = 3, Component = SkeletonFarmLog }) => (
  <>
    {Array(count).fill(0).map((_, i) => (
      <Component key={i} />
    ))}
  </>
);

// Skeleton Grid Wrapper
export const SkeletonGrid = ({ count = 6, Component = SkeletonCropCard, columns = 2 }) => {
  const gridClass = columns === 2 ? 'grid-cols-2' : 
                    columns === 3 ? 'grid-cols-2 md:grid-cols-3' :
                    'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4';
  
  return (
    <div className={`grid ${gridClass} gap-3 sm:gap-4`}>
      {Array(count).fill(0).map((_, i) => (
        <Component key={i} />
      ))}
    </div>
  );
};

// Full Page Skeleton (for initial app load)
export const SkeletonPage = () => (
  <div className="pt-24 pb-32 md:pb-8 px-4 max-w-7xl mx-auto">
    <div className="space-y-6 animate-fadeIn">
      <SkeletonWeather />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <SkeletonAction />
        <SkeletonAction />
        <SkeletonAction />
        <SkeletonAction />
      </div>
      <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl">
        <div className="h-6 bg-gray-200 rounded w-32 mb-4"></div>
        <SkeletonList count={2} />
      </div>
    </div>
  </div>
);

export default {
  CropCard: SkeletonCropCard,
  Weather: SkeletonWeather,
  Action: SkeletonAction,
  FarmLog: SkeletonFarmLog,
  MonthCard: SkeletonMonthCard,
  List: SkeletonList,
  Grid: SkeletonGrid,
  Page: SkeletonPage,
};