import HomeHeader        from 'home/HomeHeader'
import HomeLandingPage   from 'home/HomeLandingPage'

export default function ({ children }) {
  return (
    <section>
      <HomeHeader />
      {(() => {
        if (children) 
          return children

        return <HomeLandingPage />
      })()}
    </section>
  )
}