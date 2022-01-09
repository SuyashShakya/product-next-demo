import React from 'react';
import Link from 'next/link'

import classes from './Layout.module.css';

const Layout = ({children}) => {
    return (
        <div>
            <header className={classes.header}>
                <div className={classes.headerItem}>
                    <Link href='/'>All Products</Link>
                </div>
                <div className={classes.headerItem}>
                    <Link href='/new-product'>Add New Product</Link>
                </div>
            </header>
            <div>
                {children}
            </div>
        </div>
    )
    
}

export default Layout;