import { useEffect, useState } from 'react';
import { Switch } from '@headlessui/react';
import useDarkMode from '../hooks/useDarkMode';

export default function DarkSwitch() {
  
  const [ enabled, setEnabled ] = useState(false);
  const [ colorTheme, setTheme ] = useDarkMode(false);

  useEffect(() => {
    setTheme(localStorage.theme || colorTheme);
    setEnabled(localStorage.theme === 'light' ? false : true);
  }, []);

  const handleToggle = () => {
    setEnabled(!enabled);
    setTheme(colorTheme);
    localStorage.theme = colorTheme;
  }

  return (
    <div>
      <Switch.Group>
        <div className="flex items-center">
          <Switch
            checked={enabled}
            onChange={() => handleToggle()}
            className="bg-gray-200 dark:bg-coolGray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-500 dark:text-primary-500 focus:outline-none focus:ring-inset focus:ring-0"
          >
            {
              enabled
              ? <svg class="w-6 h-6 text-gray-500 dark:text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path></svg>
              : <svg class="w-6 h-6 text-gray-500 dark:text-primary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
            }
          </Switch>
        </div>
      </Switch.Group>
    </div>
  )
}