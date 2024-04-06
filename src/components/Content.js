import React from 'react'
import Search from './Search'
import Brand from './Brand';
import { useContext } from 'react';
import MainContext from '../MainContext';

const Content = () => {

    const { brands, selectedBrands } = useContext(MainContext)

    return (
        <main className='content'>
            <header className='header'>
                <Search />
            </header>
            <section className="brands">
                {brands.map(brand => (
                    <Brand brand={brand} />
                ))}
            </section>
        </main>
    )
}

export default Content