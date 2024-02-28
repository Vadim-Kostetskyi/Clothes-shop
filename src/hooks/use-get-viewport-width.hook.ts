import { useEffect } from 'react';
import { useAppDispatch } from './use-app-dispatch.hook';
import { actions as viewportWidthActions } from 'redux/slices/viewport-width/viewport-width';

export const useGetViewportWidth = () => {
  const dispatch = useAppDispatch();

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
};
