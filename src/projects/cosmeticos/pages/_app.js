import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/globals.css';

import getApp from '../../../shared/pages/_app';
import * as constants from '../constants';

const AppendHead = () => (
  <Head>
    <title>Cosméticos</title>

    {/* etiquetas og facebook */}
    {/* <meta property="og:type" content="website" />
    <meta property="og:title" content="Globy Taxi App" />
    <meta
      property="og:description"
      content="Somos una app mexicana de taxis que opera con autos concesionados."
    /> */}
    {/* <meta
      property="og:image"
      content="https://firebasestorage.googleapis.com/v0/b/sql-demos-3f601.appspot.com/o/globy.jpg?alt=media&token=55c1445f-de46-4b59-b47f-f39dd89899e2"
    /> */}
    {/* <meta property="og:image:width" content="828" />
    <meta property="og:image:height" content="450" />
    <meta property="og:url" content="https://globy-design.vercel.app/" />
    <meta property="og:site_name" content="Globy" />
    <meta property="fb:app_id" content="928977633900253" />
    {/* aditional */}
    {/* <meta name="author" content="Globy Mexico" /> */}
    {/* <meta name="copyright" content="Globy Mexico" /> */}
    {/* <meta name="Description" content="Globy, la App para taxistas." /> */} */}



    <div id="disqus_thread"></div>
<script>
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://projct1.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
  </script>
  <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
  </Head>
);

export default getApp({}, constants, AppendHead);
