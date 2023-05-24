import React, { useEffect } from 'react'
import useUserStore from './userStore'
// import useAirlineState from './states/useAirlineState'
import { Link } from 'react-router-dom'

const Home = () => {
    const users = useUserStore(state => state.users)
    const fetchUsers = useUserStore(state => state.fetchUsers)
    const loading = useUserStore(state => state.loading)

    // const airlines = useAirlineState(state => state.airlines)
    // const fetchAirlines = useAirlineState(state => state.fecthAirlines)
    // const loading = useAirlineState(state => state.loading)

    useEffect(() => {
        fetchUsers()
        // fetchAirlines({ jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZnVsbG5hbWUiOiJmYWhtaSBoYWRpIiwiZW1haWwiOiJmYWhtaUBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2ODQ5MTEzMzMsImV4cCI6MTY4NDk5NzczM30.S_bx55aLzjdT4yfwDUHMUrglUbs08wg2Np1O95T03gA' })
    }, [])
    // console.log(users);

    if (loading) {
        return (
            <p className='flex items-center justify-center w-screen h-screen'>Loading....</p>
        )
    }

    return (
        <div className="">
            {/* Navbar */}
            <div className="flex gap-3 px-10 py-5 text-xl text-white bg-blue-500">
                <Link to={'/'} className='hover:cursor-pointer hover:text-orange-500'>Home</Link>
                <Link to={'/form'} className='hover:cursor-pointer hover:text-orange-500'>Form</Link>
            </div>

            {/* List Item */}
            <div className="flex items-center justify-center h-screen px-10">
                <div className='flex flex-wrap gap-3'>
                    {
                        users.map((item, index) => (
                            <div
                                key={index}
                                className='item-card hover:-translate-y-3'
                            >
                                <p className='font-semibold'>{item.name}</p>
                                <p>{item.email}</p>
                            </div>
                        ))
                    }
                    {/* {
                        airlines.map((item, index) => (
                            <>
                                <div
                                    key={index}
                                    className='item-card hover:-translate-y-3'
                                >
                                    <p className='font-semibold'>{item.name}</p>
                                    <div className="">
                                        <img src={item.image} alt="gambar" />
                                    </div>
                                </div>
                            </>

                        ))
                    } */}
                </div>
            </div>
        </div>
    )
}

export default Home