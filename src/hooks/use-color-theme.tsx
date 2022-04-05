import { useEffect, useMemo, useRef, useState } from "react";
import merge from 'lodash.merge'
import get from 'lodash.get'
import neutrinoTheme from '../primitives/themes'

const COLOR_SCHEMES: Array<ColorThemeOption> = ['no-preference', 'dark', 'light'];
const DEFAULT_TARGET_COLOR_SCHEME = 'light';

export type ColorThemeOption = 'no-preference' | 'dark' | 'light';
type ColorTheme = { 
  name: string
  query: MediaQueryList
  theme: ColorThemeOption
}

function resolveTargetColorTheme(theme?: ColorThemeOption) {
  if (!( !theme ||
    COLOR_SCHEMES.includes(theme) ||
    theme === 'no-preference'
  )) theme = DEFAULT_TARGET_COLOR_SCHEME;

  return theme;
}

export const getTheme = (theme: ColorThemeOption) =>
  merge({}, neutrinoTheme, {
    colors: get(neutrinoTheme.colors.modes, theme, neutrinoTheme.colors),
  })

const defaultColorTheme = { name: 'light', query: matchMedia(`(prefers-color-theme: no-preference)`), theme: getTheme('light') }

function getCurrentColorTheme() {
  const QUERIES = {};

  return (() => {
    for (const theme of COLOR_SCHEMES) {
      const query = QUERIES.hasOwnProperty(theme)
        ? QUERIES[theme]
        : (QUERIES[theme] = matchMedia(`(prefers-color-scheme: ${theme})`));
      if (query.matches){
       return { name: theme, query, theme: getTheme(theme) };
      }  
    }
    return defaultColorTheme;
  })();
}

interface UseColorThemeProps {
  targetColorTheme?: ColorThemeOption
  syncWithSystem?: boolean
}


export default function useColorTheme({targetColorTheme, syncWithSystem}: UseColorThemeProps): ColorTheme | undefined {
  const isMounted = useRef<boolean>(false);
  
  const targetTheme = useMemo(
    () => resolveTargetColorTheme(targetColorTheme),
    [targetColorTheme]
  );

  const [theme, setTheme] = useState(getCurrentColorTheme());

  useEffect(() => {
    const query = theme.query;

    query?.addEventListener('change', themeChangeHandler);
    isMounted.current = true;

    function themeChangeHandler(evt) {
      console.log('THEME CHANGED')
      if (!evt.matches) {
        query?.removeEventListener('change', themeChangeHandler);
        isMounted.current && setTheme(getCurrentColorTheme());
        query?.addEventListener('change', themeChangeHandler);
      }
    }

    return () => {
      const query = theme.query;
      query?.removeEventListener('change', themeChangeHandler);
      isMounted.current = false;
    };
  }, [theme]);

  return theme
}
