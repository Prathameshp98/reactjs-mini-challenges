import React from 'react'

const Button = React.lazy(() => import('./Button'))

const Content: React.FC = () => {
    return (
        <>
            <Button />
        </>
    )
}

export default Content