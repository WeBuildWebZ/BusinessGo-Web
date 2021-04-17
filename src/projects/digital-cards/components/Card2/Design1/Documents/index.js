import { useSelector } from 'react-redux';
import { FileIcon } from 'react-file-icon';
import Link from 'next/link';

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
            <div className="icon">
              <FileIcon extension={file.name.substr(file.name.lastIndexOf('.') + 1)} color="skyblue" />
            </div>
            <Link href={file.url}>
              <a className="downloadLink" download={file.name} textContent={file.name} target="_blank">
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
            min-width: 20px;
            max-width: 20px;
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
