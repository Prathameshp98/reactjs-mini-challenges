import React, { Suspense } from 'react'

const Header = React.lazy(() => import('../Includes/Header'))

const Challenge: React.FC = () => {

    const slug = window.location.pathname.trim().split('/')[2]

    return (
        <div>
            <Suspense fallback={<div></div>}>
                <Header />
            </Suspense>
        </div>
    )
}

export default Challenge