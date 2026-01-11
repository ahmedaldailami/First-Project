import Particles from "./components/Particles"
import PillNav from "./components/PillNav"




function App() {
  return (
    <>
      {/*            Background            */}
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />




      <header className="flex justify-center">

        <PillNav
          logo={"logo.svg"}
          logoAlt="Company Logo"
          items={[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Services', href: '/services' },
            { label: 'Contact', href: '/contact' }
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
        />
      </header>




      {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem officia iusto sunt aliquid ex doloremque molestiae, vero esse saepe? Ab quia adipisci eligendi nulla. Unde illo provident earum modi suscipit.</p> */}
    </>
  )
}






export default App
