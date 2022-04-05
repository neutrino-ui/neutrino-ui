import { useEffect, useRef, useState } from "react";
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

export const getTheme = (theme: ColorThemeOption = 'light') =>
  merge({}, neutrinoTheme, {
    colors: get(neutrinoTheme.colors.modes, theme, neutrinoTheme.colors),
  })

function getCurrentColorTheme(targetColorTheme: ColorThemeOption = 'no-preference', syncWithSystem: boolean) {
  const QUERIES = {};

  return (() => {

    if (targetColorTheme && COLOR_SCHEMES.includes(targetColorTheme) && targetColorTheme !== 'no-preference') {
      return { name: targetColorTheme, query: matchMedia(`(prefers-color-scheme: ${targetColorTheme})`), theme: getTheme(targetColorTheme) };
    }

    if (syncWithSystem) {
      for (const theme of COLOR_SCHEMES) {
        const query = QUERIES.hasOwnProperty(theme)
          ? QUERIES[theme]
          : (QUERIES[theme] = matchMedia(`(prefers-color-scheme: ${theme})`));
        if (query.matches){
        return { name: theme, query, theme: getTheme(theme) };
        }  
      }
    }
    return { name: DEFAULT_TARGET_COLOR_SCHEME, query: matchMedia(`(prefers-color-scheme: no-preference)`), theme: getTheme() };
  })();
}

interface UseColorThemeProps {
  targetColorTheme?: ColorThemeOption
  syncWithSystem?: boolean
}


export default function useColorTheme({targetColorTheme, syncWithSystem = true}: UseColorThemeProps): ColorTheme | undefined {
  const isMounted = useRef<boolean>(false);

  const [theme, setTheme] = useState(getCurrentColorTheme(targetColorTheme, syncWithSystem));

  useEffect(() => {
    if(theme.name !== targetColorTheme) {
      setTheme(getCurrentColorTheme(targetColorTheme, syncWithSystem));
    }
  }, [syncWithSystem, targetColorTheme, theme.name])

  useEffect(() => {
    const query = theme.query;

    query?.addEventListener('change', themeChangeHandler);
    isMounted.current = true;

    function themeChangeHandler(evt) {
      console.log('THEME CHANGED')
      if (!evt.matches) {
        query?.removeEventListener('change', themeChangeHandler);
        isMounted.current && setTheme(getCurrentColorTheme(targetColorTheme, syncWithSystem));
        query?.addEventListener('change', themeChangeHandler);
      }
    }

    return () => {
      const query = theme.query;
      query?.removeEventListener('change', themeChangeHandler);
      isMounted.current = false;
    };
  }, [syncWithSystem, targetColorTheme, theme]);

  return theme
}
