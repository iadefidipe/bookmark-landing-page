import theme from '../data/theme';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Cta from '../components/Cta';
import Download from '../components/Download';
import FAQ from '../components/FAQ';
import Features from '../components/Features';

const Home = () => {
    return (
        <>
            <Header theme={theme} />
            <Hero theme = {theme}/>
            <Features theme={theme} />
            <Download theme = {theme} />
            <FAQ theme ={theme}/>
            <Cta theme={theme} />
            <Footer theme = {theme} />
        </>
    )
}

export default Home
