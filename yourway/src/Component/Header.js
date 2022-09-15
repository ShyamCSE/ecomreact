import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    const [SearchField, setSearchField] = useState("");
    const [Searchdata, setSearchdata] = useState('');
    useEffect(() => {
        fetch('http://localhost:8000/api/Search/' + SearchField)
            .then((Response) => Response.json())
            .then((data) => {
                setSearchdata(data)
            }).catch((err) => {
                console.log(err.message)
            })
    }, [SearchField])


    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/"><span className="navbar-brand mb-0 h1">YourWay</span></Link>
                    <div className='form-group'>
                        <div className='row'><input type="Search" onChange={(e) => setSearchField(e.target.value)} placeholder=' Seach here ...' className='form-control' /></div>
                    </div>
                    <span type="button" class="btn btn-primary"><i className="fa-solid fa-cart-plus"></i> <sup className='bg-danger p-2 text-white rounded'>2</sup></span>
                </div>
            </nav>
            <div>

                <div>

                </div>

            </div>

        </>
    )
}

export default Header;