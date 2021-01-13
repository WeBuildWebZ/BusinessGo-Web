import Head from 'next/head';
import { useRouter } from 'next/router';

import Header from '../components/Header';

const NotFound = ({ children, title = 'Blanquería Wow' }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="app-main">
      <Head>
        <title>Page not found &mdash; {title}</title>
      </Head>

      <Header isErrorPage />

      <main className={pathname !== '/' ? 'main-page' : ''}>{children}</main>
    </div>
  );
};

export default NotFound;
