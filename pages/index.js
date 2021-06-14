import Header from '../components/Header';

export default function Home() {
  return (
    <main className="flex-auto max-w-7xl mx-auto bg-gray-50 dark:bg-coolGray-900">
      <Header/>
      <div className="overflow-hidden text-gray-300 -mt-32 pt-32">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 pt-14 lg:pt-16 pb-16">
          <div className="sm:mb-24 xl:mb-32 lg:flex">
            <div className="flex-none relative z-10 flex flex-col items-start lg:pt-10 max-w-screen-sm mx-auto lg:max-w-2xl lg:mx-0 lg:pr-20 mb-12 sm:mb-16 lg:mb-0">
              <h1 className="order-1 text-3xl sm:text-5xl sm:leading-none font-extrabold tracking-tight text-coolGray-900 dark:text-white mb-4">I'm<span className="text-primary-600 dark:text-primary-500"> Farhan Nafis</span>, a software engineer and occasional indie maker.</h1>
              <p className="text-sm font-semibold tracking-wide text-gray-900 dark:text-gray-300">Hi there! 👋</p>
              <p className="order-1 leading-relaxed mb-8 text-gray-900 dark:text-gray-300">
                I'm currently working at <a href="https://maevi.my" target="_blank" className="text-primary-600 dark:text-primary-500 hover:text-primary-700 dark:hover:text-primary-600 font-medium border-b border-dotted border-primary-600 dark:border-primary-500 hover:border-primary-700 dark:hover:border-primary-600">Maevi</a> in Kuala Lumpur, Malaysia. I specialized in frontend and backend development for complex scalable web apps.
                I wrote my code mostly in NodeJS and React. I've also developed numerous applications with AWS cloud platform - <span className="italic">huge fan!</span>
              </p>
              <p className="order-2 leading-relaxed mb-8 text-gray-900 dark:text-gray-300">
                Let's get in touch!
              </p>
              <dl className="order-3 flex items-center text-xs font-semibold uppercase tracking-wide mb-4">
                <dt className="sr-only">Social media</dt>
                <dd className="flex items-center">
                  <a href="https://twitter.com/farhannafis" target="_blank">
                    <svg className="flex-none mr-2 text-gray-500 hover:text-primary-600 w-6 h-6" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                    <span className="sr-only">Twitter</span>
                  </a>
                </dd>
                <dd className="flex items-center ml-4">
                  <a href="https://github.com/farhannafis" target="_blank">
                    <svg className="flex-none mr-2 text-gray-500 hover:text-primary-600 w-6 h-6" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    <span className="sr-only">Github</span>
                  </a>
                </dd>
                <dd className="flex items-center ml-4">
                  <a href="https://www.linkedin.com/in/farhannafis" target="_blank">
                    <svg className="flex-none mr-2 text-gray-500 hover:text-primary-600 w-6 h-6" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    <span className="sr-only">Linkedin</span>
                  </a>
                </dd>
                <dd className="flex items-center ml-4">
                  <a href="mailto:farhannafis.azmali@gmail.com" target="_blank">
                    <svg className="flex-none mr-2 text-gray-500 hover:text-primary-600 w-6 h-6" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
                    <span className="sr-only">Gmail</span>
                  </a>
                </dd>
              </dl>
              <p className="order-4 mt-4 text-xs font-semibold tracking-wide text-gray-600">© { new Date().getFullYear() } | Farhan Nafis Azmali</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
