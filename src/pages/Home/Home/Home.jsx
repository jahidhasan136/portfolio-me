import About from "../About/About";
import Banner from "../Banner/Banner";
import ClientSay from "../ClientSay/ClientSay";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <>
           <Banner></Banner> 
           <About></About>
           <Skills></Skills>
           <Services></Services>
           <ClientSay></ClientSay>
           <Contact></Contact>
        </>
    );
};

export default Home;