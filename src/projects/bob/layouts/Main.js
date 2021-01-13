import Head from 'next/head';
import { useRouter } from 'next/router';

import Header from '../components/Header';

const Main = ({ children, title = 'Construccion Piscinas Pilar' }) => {
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
  );
};

export default Main;
