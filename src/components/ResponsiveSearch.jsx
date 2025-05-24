import React from 'react'

const ResponsiveSearch = () => {
  return (

    <div className = "responsive-search-background flex items-center justify-start px-3 md:hidden">

            <svg  className = "w-[20px] h-[20px] absolute left-5 "  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>

        
            <input className ="input-field pl-8 flex-centered  text-fikka-white text-sm outline-none border-1 rounded-sm " type ="text" name="text"  placeholder="Search Anime" autoComplete="off"/>

          


    </div>

  )
}

export default ResponsiveSearch