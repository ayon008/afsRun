import Banner from '../Components/Banner';
import { Helmet } from 'react-helmet';
import logo from '../assets/logo.svg'

const Home = () => {
    return (
        <div className='relative'>
            <Helmet>
                <meta charSet="utf-8" />
                <link rel="icon" type="image/x-icon" href={logo} />
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;