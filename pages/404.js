import { useEffect } from 'react';
import { Footer } from '../components/Footer';
import useDarkMode from '../hooks/useDarkMode';

export default function NotFound() {

  const [ colorTheme, setTheme ] = useDarkMode(false);

  useEffect(() => {
    setTheme(localStorage.theme || colorTheme);
  })

  return(
    <main className="flex items-center flex-auto max-w-7xl mx-auto bg-gray-50 dark:bg-coolGray-900">
      <div className="flex flex-col items-center space-y-6 text-white text-center max-w-sm sm:max-w-lg mx-auto">
        <h1 className="text-5xl sm:text-6xl sm:leading-none font-extrabold tracking-tight text-primary-600 dark:text-primary-500">404</h1>
        <div className="flex flex-col space-y-6 text-gray-900 dark:text-white">
          <h2 className="text-3xl font-bold">Sorry, page not found</h2>
          <p className="leading-relaxed">It seems like the link you clicked may be broken or the page have been removed. You can go back to homepage by clicking <a href="/" className="text-primary-600 dark:text-primary-500 hover:text-primary-700 dark:hover:text-primary-600 font-medium border-b border-dotted border-primary-600 dark:border-primary-500 hover:border-primary-700 dark:hover:border-primary-600">here</a>.</p>
        </div>
        <Footer />
      </div>
    </main>
  )
}