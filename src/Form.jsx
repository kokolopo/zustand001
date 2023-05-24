import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useUserStore from './userStore'

const Form = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [userId, setUserId] = useState(null)

    const postData = useUserStore(state => state.postData)

    const handleSubmitForm = (e) => {
        e.preventDefault()
        postData({ title, body, userId })
        console.log({ title, body, userId });
    }

    return (
        <div className="">
            {/* Navbar */}
            <div className="flex gap-3 px-10 py-5 text-xl text-white bg-blue-500">
                <Link to={'/'} className='hover:cursor-pointer hover:text-orange-500'>Home</Link>
                <Link to={'/form'} className='hover:cursor-pointer hover:text-orange-500'>Form</Link>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmitForm} className='flex gap-2 px-10 py-10'>
                <input type="text" placeholder='title' onChange={(e) => setTitle(e.target.value)} />
                <input type="text" placeholder='body' onChange={(e) => setBody(e.target.value)} />
                <input type="numver" placeholder='userId' onChange={(e) => setUserId(e.target.value)} />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Form