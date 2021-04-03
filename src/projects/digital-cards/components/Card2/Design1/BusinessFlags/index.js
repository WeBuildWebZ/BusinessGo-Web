import Link from 'next/link';
import { useSelector } from 'react-redux';

import { cardPropTypes } from '../../constants';
import { getLanguage } from '../../lang';

const BusinessFlags = props => {
  const { card } = props;
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div className="businessFlags">
      {Object.keys(language.businessFlags).map(flag => (
        <div className="flag" key={flag}>
          <div className="flagSymbol">✓</div> {language.businessFlags[flag]}
        </div>
      ))}
      <style jsx>
        {`
          * {
            color: #686464;
          }
          .businessFlags {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
          }
          .flag {
            font-size: 11px;
            margin: 4px;
          }
          .flagSymbol {
            display: inline-block;
            font-weight: bold;
          }
        `}
      </style>
    </div>
  );
};

BusinessFlags.propTypes = cardPropTypes;

export default BusinessFlags;
