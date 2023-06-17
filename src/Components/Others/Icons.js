import React from 'react'
import './Icons.scss'

const Icons = props => {
    const others = {
        linkedin: 'https://www.linkedin.com/in/behzodkhoja-nigmatkhojayev-b2a022252',
        facebook: 'https://www.facebook.com/behzodxoja.nigmatxojayev?mibextid=ZbWKwL',
        telegram: 'https://t.me/Behzodkhoja',
        github: 'https://github.com/Behzodkhoja',
    }

    return (
        <div id='icons'>
            <div>
                <p
                    className={`p-medium fs-xl-14 text-uppercase ${
                        props.contact ? 'color-body font-secondary' : 'color-lightn font-primary'
                    }`}
                >
                    find me with &nbsp;. . .
                </p>
            </div>
            <div className={`d-flex ${props.contact ? 'mb-1' : 'mb-4'}`}>
                <div className='m-10-12 me-2'>
                    <a href={others?.facebook}>
                        <div
                            className={`${
                                props.sidebar ? 'w-h-51' : 'w-h-60 box-shadow'
                            } bg-color-1 text-center ${props.sidebar ? 'pt-3' : 'pt-xl-20'}`}
                        >
                            <span className={`${props.sidebar ? 'icon-size' : ''} icon facebook`} />
                        </div>
                    </a>
                </div>
                <div className='m-10-12 mx-2'>
                    <a href={others?.github}>
                        <div
                            className={`${
                                props.sidebar ? 'w-h-51' : 'w-h-60 box-shadow'
                            } bg-color-1 text-center ${props.sidebar ? 'pt-3' : 'pt-xl-20'}`}
                        >
                            <span
                                className={`${props.sidebar ? 'icon-size' : ''} icon github`}
                            />
                        </div>
                    </a>
                </div>
                <div className='m-10-12 mx-2'>
                    <a href={others?.telegram}>
                        <div
                            className={`${
                                props.sidebar ? 'w-h-51' : 'w-h-60 box-shadow'
                            } bg-color-1 text-center ${props.sidebar ? 'pt-3' : 'pt-xl-20'}`}
                        >
                            <span className={`${props.sidebar ? 'icon-size' : ''} icon telegram`} />
                        </div>
                    </a>
                </div>
                <div className='m-10-12 ms-2'>
                    <a href={others?.linkedin}>
                        <div
                            className={`${
                                props.sidebar ? 'w-h-51' : 'w-h-60 box-shadow'
                            } bg-color-1 text-center ${props.sidebar ? 'pt-3' : 'pt-xl-20'}`}
                        >
                            <span className={`${props.sidebar ? 'icon-size' : ''} icon linkedin`} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Icons
