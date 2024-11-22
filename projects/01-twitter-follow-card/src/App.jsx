import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard isFollowing userName='josmarV'>
                Josmar Veliz
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing={false} userName='KalleHallden'>
                kalle hallden
            </TwitterFollowCard>
        </section>
    )
}