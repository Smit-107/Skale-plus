import { Avatar, Skeleton, Typography } from '@mui/material';
import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="tw-bg-[#fff] tw-flex tw-items-center tw-justify-between tw-gap-14">
      <div className="tw-w-[calc(100%-140px)] md:tw-w-[calc(100%-190px)]">
        <div className="tw-gap-[6px] tw-flex tw-items-center">
          <Skeleton variant="circular">
            <Avatar />
          </Skeleton>

          <Skeleton width="25%">
            <Typography>.</Typography>
          </Skeleton>
        </div>

        <Skeleton width="80%" className="!tw-mt-2">
          <Typography variant="h4">.</Typography>
        </Skeleton>

        <Skeleton width="50%" className="!tw-mt-[10px]">
          <Typography variant="h4">.</Typography>
        </Skeleton>
      </div>

      <Skeleton
        variant="rectangular"
        className="!tw-w-[140px] !tw-h-[100px] md:!tw-w-[190px] md:!tw-h-[130px]"
      />
    </div>
  );
};

export default LoadingSkeleton;
