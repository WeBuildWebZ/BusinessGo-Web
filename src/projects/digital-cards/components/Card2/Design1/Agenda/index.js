import { useSelector } from 'react-redux';

import TextInput from '../../../TextInput';
import * as constants from '../../constants';
import { getLanguage } from '../../lang';

const Agenda = props => {
  const { card } = props;
  const language = getLanguage(useSelector(store => store.language));
  const inputStyle = { marginBottom: 50 };

  return (
    <div className="agenda" id="agenda">
      <div className="border" style={{ backgroundColor: card.border_color }}>
        {language.agenda}
      </div>
      <TextInput name={language.completeName} color={card.border_color} style={inputStyle} />
      <TextInput name={language.email} color={card.border_color} style={inputStyle} />
      <TextInput name={language.phone} color={card.border_color} style={inputStyle} />
      <style jsx>
        {`
          * {
            color: whitesmoke;
          }
          .border {
            display: flex;
            transform: translate(-${constants.sideMargin}px);
            justify-content: center;
            align-items: center;
            width: calc(100% + ${constants.sideMargin * 2}px);
            height: 100px;
            margin-bottom: 20px;
            font-size: 24px;
            border-bottom-left-radius: 14px;
            border-bottom-right-radius: 14px;
          }
        `}
      </style>
    </div>
  );
};

Agenda.propTypes = constants.cardPropTypes;

export default Agenda;
