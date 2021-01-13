import Head from 'next/head';
import { useRouter } from 'next/router';

import Header from '../components/Header';

<<<<<<< HEAD
const Main = ({ children, title = 'Construccion Piscinas Pilar' }) => {
=======
const Main = ({ children, title = 'Blanquería Wow' }) => {
>>>>>>> 999910e3687007923d988a10278e1affb36fe937
  const router = useRouter();
  const { pathname } = router;
  return (
    <div className="app-main">
    <Head>
      <title>{title}</title>
    </Head>

    <Header />

    <main className={pathname !== '/' ? 'main-page' : ''}>{children}</main>
  </div>
  )
}

export default Main



<<<<<<< HEAD
=======
      <main className={pathname !== '/' ? 'main-page' : ''}>{children}</main>
    </div>
  );
};

export default Main;
>>>>>>> 999910e3687007923d988a10278e1affb36fe937
