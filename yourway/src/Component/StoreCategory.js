import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const StoreCategory = () => {
    const [Category, setCategory] = useState([])

    const fetchData = () => {
        fetch("http://localhost:8000/api/Category")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setCategory(data)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <h5 className='App my-2 py-2'>Choose The Category </h5>
            {Category.length > 0 && (
                <ul>
                    {Category.map(user => (
                        <li className='border m-2 p-2'><Link to={`Stores/${user.id}`}> {user.categoryName}</Link></li>
                    ))}
                </ul>
            )}
        </div>

    )
}

export default StoreCategory;