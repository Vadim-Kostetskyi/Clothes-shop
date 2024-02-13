import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'libs/hooks/hooks';
import {
  selectViewportWidth,
  actions as viewportWidthActions,
} from 'redux/slices/viewport-width/viewport-width';

export const useGetViewportWidth = () => {
  const dispatch = useAppDispatch();
  const viewportWidth = useAppSelector(selectViewportWidth);

  useEffect(() => {
    const handleResize = () => {
      dispatch(
        viewportWidthActions.setViewportWidth({
          viewportWidth: window.innerWidth,
        }),
      );
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);

  return viewportWidth;
};
