import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Store = () => {
    const CategoryId = useParams().id;
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/api/CategoryId/' + CategoryId)
            .then((response) => response.json())
            .then((data) => {

                setPosts(data)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div>
            <h4 className='App'>Store Name</h4>
            {posts.length > 0 && (
                <ul className='App my-4 py-4'>
                    {posts.map(item => (
                        <li className=' border text-green m-2 p-2'> <Link to={`/Products/${item.id}`}>{item.StoreName}</Link></li>
                    ))}
                </ul>
            )}

        </div>
    )
}

export default Store;