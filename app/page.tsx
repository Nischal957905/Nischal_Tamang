import HomePage from '@components/HomePage'
import AboutPage from '@components/AboutPage'
import DevelopPage from '@components/DevelopPage'
import DesignPage from '@components/DesignPage'
import ContactPage from '@components/ContactPage'

const Home = () => {
  return (
    <div>
      <HomePage />
      <AboutPage />
      <DevelopPage />
      <DesignPage />
      <ContactPage />
    </div>
  )
}

export default Home