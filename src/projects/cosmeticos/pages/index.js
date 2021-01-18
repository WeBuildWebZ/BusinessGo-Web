import '../assets/styles/styles.module.scss';
import Banner from '../componentss/banner';
import Testimonial from '../componentss/testimonial';
import Examples from '../componentss/examples';
import Frase from '../componentss/frase';
import TresCards from '../componentss/trescards';
import Empresa from '../componentss/empresa';
import Copyright from '../componentss/copyrigth';

const index = () => {
    return (
        <main>
            <Banner />
            <Testimonial />
            <Examples />
            <Frase />
            <TresCards />
            <Empresa />
            <Copyright />
        </main>
    )
}

export default index

