/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Main} from './main'
export {default as UserHome} from './user-home'
export {Login, Signup} from './auth-form'
export {default as HumanTotal} from './human-total'
export {default as RatTotal} from './rat-total'
export {default as Rats} from './rats'
export {default as Humans} from './humans'
export {default as SingleUser} from './single-user'
export {default as NotFound} from './not-found'
export {default as FirstBite} from './first-bite'
export {default as Leaderboard} from './leaderboard'
export {default as About} from './about'