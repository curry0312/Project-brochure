import React from 'react'

function Contact() {
  return (
    <div className='bg-black pt-[120px] h-screen'>
        <form className='p-10 space-y-4'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='email' className='text-white font-Sigmar'>Email:</label>
            <input id='email' type="gmail" className='p-1 rounded-sm'/>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='text' className='text-white font-Sigmar'>What you want to say:</label>
            <textarea id='text' rows="10" cols="50" className='p-1 rounded-sm'/>
          </div>
          <div className='flex justify-center items-center'>
            <button className='bg-green-500 font-Sigmar text-white px-8 py-2 rounded-md hover:bg-green-400'>SUBMIT</button>
          </div>
        </form>
    </div>
  )
}

export default Contact
