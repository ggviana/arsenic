import { Link }   from 'react-router'
import HomeHeader from 'home/HomeHeader'
import HomeFooter from 'home/HomeFooter'
import style      from 'home/Home.styl'

export default ({ children }) => (
  <main className={style.container}>
    
    <HomeHeader />

    <section className={style.hero}>
      <h1>With Arsenic, you can create chat rooms quickly</h1>
      <h2>And chat with the person near you</h2>
    </section>

    <Link to="/lobby">Start now</Link>
    
    <HomeFooter />

  </main>
)