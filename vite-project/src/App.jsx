import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard userName='josmarV'>
                Josmar Veliz
            </TwitterFollowCard>
            <TwitterFollowCard userName='KalleHallden'>
                kalle hallden
            </TwitterFollowCard>
        </section>
    )
}