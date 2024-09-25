// import Hero from '../components/Hero/Hero';

import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
// import Header from './Header/Header';
import Hero from './Hero/Hero';
import Portfolio from './Portfolio/Portfolio';
import Skills from './Skills/Skills';
import Testimonials from './Testimonials/Testimonials';

export default function Home () {
    return (
        <>
            {/* Home Sections */}
            <Hero />
            {/* <Header /> */}
            <Hero />
            <Skills />
            <About />            
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}



