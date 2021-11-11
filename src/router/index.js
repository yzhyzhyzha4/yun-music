import React from 'react'
import { Redirect } from 'react-router-dom'

// import Friend from '../pages/friend'
// import Mine from '../pages/mine'
// import Discover from '../pages/discover'
// import Recommend from '../pages/discover/cpages/recommend'
// import Anchor from '../pages/discover/cpages/Anchor-station'
// import Newplate from '../pages/discover/cpages/New-plate'
// import Ranking from '../pages/discover/cpages/ranking'
// import Songer from '../pages/discover/cpages/songer'
// import Songs from '../pages/discover/cpages/songs'
// import PlayerPage from '../pages/musicplayer/playerpanel';

const Friend = React.lazy(_ => import("../pages/friend"));
const Mine = React.lazy(_ => import("../pages/mine"));
const Discover = React.lazy(_ => import("../pages/discover"));
const Recommend = React.lazy(_ => import("../pages/discover/cpages/recommend"));
const Ranking = React.lazy(_ => import("../pages/discover/cpages/ranking"));
const Songs = React.lazy(_ => import("../pages/discover/cpages/songs"));
const Anchor = React.lazy(_ => import("../pages/discover/cpages/Anchor-station"));
const Songer = React.lazy(_ => import("../pages/discover/cpages/songer"));
const Newplate = React.lazy(_ => import("../pages/discover/cpages/New-plate"));
const PlayerPage = React.lazy(_ => import("../pages/musicplayer/playerpanel"));


const router = [{
    path: '/',
    exact: true,
    render: () => (
        <Redirect to={'/discover'} />
    )
}, {
    path: '/discover',
    component: Discover,
    routes: [
        {
            path: '/discover',
            exact: true,
            render: () => (
                <Redirect to={'/discover/recommend'} />
            )
        },
        {
            path: '/discover/recommend',
            component: Recommend
        },
        {
            path: '/discover/ranking',
            component: Ranking
        },
        {
            path: '/discover/songs',
            component: Songs
        },
        {
            path: '/discover/anchorstation',
            component: Anchor
        },
        {
            path: '/discover/songer',
            component: Songer
        },
        {
            path: '/discover/newplate',
            component: Newplate
        },
        {
            path: "/discover/playerpage",
            component: PlayerPage
        }
    ]
},
{
    path: '/mine',
    component: Mine
},
{
    path: '/friend',
    component: Friend
}
]
export default router;