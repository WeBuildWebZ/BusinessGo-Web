import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '../assets/styles/globals.css';

import getApp from '../../../shared/pages/_app';
import { setDashboardProject } from '../actions/dashboardProject';
import * as constants from '../constants';
import reducers from '../reducers';
import { showProject } from '../../../services/api/project';

const AppendHead = () => {
  const user = useSelector(store => store.user);
  const dashboardProject = useSelector(store => store.dashboardProject);
  const dispatch = useDispatch();
  const { query } = useRouter();

  useEffect(() => {
    if (!user || !query.project_code) return;
    if (!user.project_codes.includes(query.project_code)) window.location.href = '/';
    showProject(query.project_code, true).then(({ data: givenProject }) => {
      dispatch(setDashboardProject(givenProject));
    });
  }, [user, query.project_code]);

  return (
    <>
      <NextSeo
        title="WeBuildWebZ"
        description="Aquí podrás administrar el contenido de tu web."
        canonical={constants.URL}
        openGraph={{
          url: constants.URL,
          title: 'WeBuildWebZ',
          description: 'Aquí podrás administrar el contenido de tu web.',
          site_name: 'WeBuildWebZ',
          images: [
            {
              url:
                'https://firebasestorage.googleapis.com/v0/b/zanle-group.appspot.com/o/banner-webuildwebz.jpg?alt=media&token=cca05d1d-42e8-445e-a346-21c6d4686bfc',
              width: 1366,
              height: 635,
              alt: 'Imagen 1'
            },
            {
              url: `${constants.URL}/favicon.png`,
              width: 96,
              height: 96,
              alt: 'Imagen 2'
            }
          ]
        }}
        twitter={{ handle: '@handle', site: '@site', cardType: 'summary_large_image' }}
      />
      <Head>
        <link rel="icon" href="/favicon.png" />
        {process.browser &&
          !window.location.pathname.startsWith('/admin') &&
          !window.location.pathname.startsWith('/dashboard') && (
            <script
              src="https://www.widgets.webuildwebz.com/include.js"
              data-webuildwebz-project-token="5729AADFA12F43A4B556C74BD9631C81D5318A5B"
            />
          )}
      </Head>
    </>
  );
};

export default getApp(reducers, constants, AppendHead);
