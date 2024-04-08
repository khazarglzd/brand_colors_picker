import React from 'react'
import Search from './Search'
import Brand from './Brand';
import { useContext } from 'react';
import MainContext from '../MainContext';
import LazyLoad from "react-lazyload"
import Download from './Download';

const Content = () => {

    const { brands, selectedBrands } = useContext(MainContext)

    return (
        <main className='content'>
            <header className='header'>
                <Search />
                <Download />
            </header>
            <section className="brands">
                {brands.map(brand => (
                    <LazyLoad once={true} overflow={true} placeholder="Yukleniyor...">
                        <Brand brand={brand} />
                    </LazyLoad>
                ))}
            </section>
        </main >
    )
}

export default Content