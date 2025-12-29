import React from 'react'
import Project from './Project'

function Projects() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>

      
      <Project link="https://search-your-favourites.vercel.app/" title=" Favorite Movies" src="moviefinder.png" target="_blank" />

      <Project link="https://car-website-react-js.netlify.app/" title="Car-Website" src="car.png" target="_blank" />

      <Project link="https://github.com/SharanKarchella/git-prof-finder" title="git-profile-finder" src="git.png" target="_blank" />

    </div>
  )
}

export default Projects