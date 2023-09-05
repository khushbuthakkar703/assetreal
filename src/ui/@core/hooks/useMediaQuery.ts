import { useMemo } from 'react';
import { useTheme } from 'styled-components';

export const useMediaQuery = (breakpoint: number) => {
  const { viewport } = useTheme();
  const matches = useMemo(() => parseInt(viewport.width) <= breakpoint, [viewport.width, breakpoint]);

  return matches;
};
