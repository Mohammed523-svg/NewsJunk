import React from 'react'
import loading from './loading.gif'

// Spinner component: Renders a loading spinner image.
const Spinner = () => {
  return (
    // Center the spinner on the page.
    <div className='text-center'>
      {/* Display the loading GIF image with an alt text for accessibility. */}
      <img className='my-3' src={loading} alt='loading'/>
    </div>
  )
}

export default Spinner