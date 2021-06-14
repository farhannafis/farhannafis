import { useEffect, useState } from 'react';
import { Switch } from '@headlessui/react';
import useDarkMode from '../hooks/useDarkMode';

export default function DarkSwitch() {
  
  const [ enabled, setEnabled ] = useState(false);
  const [ colorTheme, setTheme ] = useDarkMode(false);

  useEffect(() => {
    setTheme(localStorage.theme || colorTheme);
    setEnabled(localStorage.theme === 'light' ? false : true);
  })

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
            className={`${
              enabled ? 'bg-primary-500' : 'bg-gray-200'
            } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`}
          >
            <span
              className={`${
                enabled ? 'translate-x-6' : 'translate-x-1'
              } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
            />
          </Switch>
        </div>
      </Switch.Group>
    </div>
  )
}