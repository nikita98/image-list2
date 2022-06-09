import React, { FC } from 'react';
import { Link } from 'react-router-dom'

const PageHeader: FC =
    () => {
        return (
            <header className='header'>
                <div className="header__inner">
                    <div className="container">
                        <nav className="header__links">
                            <Link to="/" className='header__link'>Лента</Link>
                            <Link to='/:favorite' className='header__link'>Избранное</Link>
                        </nav>
                    </div>
                </div>
            </header>
        );
    };

export default PageHeader;