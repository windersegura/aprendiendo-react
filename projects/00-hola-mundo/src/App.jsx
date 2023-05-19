import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

  const formatUserName = (userName) => `@${userName}`;

  return (
    <section className='App'>
      <TwitterFollowCard formatUserName={formatUserName} userName="Midudev" name="Miguel Angel" isFollow={true} />
      <TwitterFollowCard formatUserName={formatUserName} userName="Midudev" name="Miguel Angel" isFollow={true} />
      <TwitterFollowCard formatUserName={formatUserName} userName="Midudev" name="Miguel Angel" isFollow={true} />
    </section>
  )
}