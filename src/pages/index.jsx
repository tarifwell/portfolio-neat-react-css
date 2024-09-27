import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import Portfolio from './Portfolio/Portfolio';
import Skills from './Skills/Skills';
import Testimonials from './Testimonials/Testimonials';

export default function Home () {
    return (
        <>
            {/* Home Sections */}
            <Hero />
            <About />
            <Skills />            
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}



