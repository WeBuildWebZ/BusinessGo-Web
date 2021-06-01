import PrivacyPolicy from '../../components/PrivacyPolicy';
import Layout from '../layout';
import * as constants from '../../constants';

export default function Home() {
  return (
    <>
      <iframe
        className="document"
        title="Privacy policy"
        src={`https://docs.google.com/gview?url=${encodeURIComponent(
          `${constants.URL}/privacy_policy.docx`
        )}&embedded=true`}
      />
      <style jsx global>
        {`
          html,
          body {
            overflow: hidden;
          }
        `}
      </style>
      <style jsx>
        {`
          .document {
            width: 100vw;
            height: 100%;
            outline: none;
            border: none;
          }
        `}
      </style>
    </>
  );
}
