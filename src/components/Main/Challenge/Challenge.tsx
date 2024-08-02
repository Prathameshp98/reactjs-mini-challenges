import React, { Suspense, useEffect, useState } from 'react'

const Header = React.lazy(() => import('../../common/Header'));

const Counter = React.lazy(() => import('../../Challenges/Counter/Counter'))
const Accordion = React.lazy(() => import('../../Challenges/Accordion/Accordion'))
const StarRating = React.lazy(() => import('../../Challenges/Star Rating/StarRating'))
const Stopwatch = React.lazy(() => import('../../Challenges/Stopwatch/Stopwatch'))
const LightDarkTheme = React.lazy(() => import ('../../Challenges/Light Dark Theme/LightDarkTheme'))

const Challenge: React.FC = () => {

    const[slug, setSlug] = useState<string>('')

    useEffect(() => {
        const slug = window.location.pathname.trim().split('/')[2]
        setSlug(slug)
    }, [])

    return (
        <div>
            <Suspense fallback={<div></div>}>
                <Header />
                {slug === 'counter' && <Counter />}
                {slug === 'accordion' && <Accordion />}
                {slug === 'star-rating' && <StarRating />}
                {slug === 'stopwatch' && <Stopwatch />}
                {slug === 'light-dark-theme' && <LightDarkTheme/> }
            </Suspense>
        </div>
    )
}

export default Challenge