export const Dropdown = {
  Menu: ({ children, overlay, ...props }) => {

    const [ open, setOpen ] = useState(false);

    const HandleClickOutsideDiv = (ref) => {
      useEffect(() => {
        function handleClickOutside(event) {
          if(ref.current && !ref.current.contains(event.target)) {
            setOpen(false)
          }
          else {
            setOpen(true)
          }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
        }
      }, [ref]);
    }

    const wrapperRef = useRef(null);
    HandleClickOutsideDiv(wrapperRef);

    return(
      <div className="relative flex items-center text-left" {...props} ref={wrapperRef}>
        {children}
        <Transition
          show={open}
          enter="transition ease-out duration-100"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div id="dropdown-menu" className="origin-top-right absolute right-0 mt-6 w-56 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-30" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-menu">
            {overlay}
          </div>
        </Transition>
      </div>
    )
  }
}