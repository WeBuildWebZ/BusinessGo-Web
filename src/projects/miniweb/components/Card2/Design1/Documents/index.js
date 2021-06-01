import { useSelector } from 'react-redux';
import Link from 'next/link';
import { getMaterialFileIcon } from 'file-extension-icon-js';

import * as constants from '../../constants';
import { getLanguage } from '../../lang';
import TitleSeparator from '../TitleSeparator';

const Documents = props => {
  const { card } = props;
  const language = getLanguage(useSelector(store => store.language));

  if (!card.files?.length) return <div />;

  return (
    <div className="documents" id="documents">
      <TitleSeparator title={language.documents} color={card.border_color} />
      {card.files.map((file, i) => (
        <div key={i}>
          <div className="line" style={{ backgroundColor: card.border_color }} />
          <div className="document">
            <img className="icon" src={`${getMaterialFileIcon(file.name)}`} />
            <Link href={file.url}>
              <a className="downloadLink" download={file.name} target="_blank">
                {file.name}
              </a>
            </Link>
          </div>
        </div>
      ))}
      <style jsx>
        {`
          .line {
            width: 100%;
            height: 3px;
            border-radius: 7px;
          }
          .document {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 7px;
          }
          .icon {
            min-width: 30px;
            max-width: 30px;
          }
          .downloadLink {
            margin-left: 7px;
          }
        `}
      </style>
    </div>
  );
};

Documents.propTypes = constants.cardPropTypes;

export default Documents;
