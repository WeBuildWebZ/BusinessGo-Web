import { useSelector } from 'react-redux';

import TextInput from '../../../TextInput';
import SelectInput from '../../../SelectInput';
import TexttAreaInput from '../../../TexttAreaInput';
import Button from '../../../Button';
import * as constants from '../../constants';
import { getLanguage } from '../../lang';

const Agenda = props => {
  const { card } = props;
  const language = getLanguage(useSelector(store => store.language));
  const inputStyle = { marginBottom: 50 };
  const selectInputStyle = { margin: 2 };

  return (
    <div className="agenda" id="agenda">
      <div className="border" style={{ backgroundColor: card.border_color }}>
        {language.agenda}
      </div>
      <TextInput name={language.completeName} color={card.border_color} style={inputStyle} />
      <TextInput name={language.email} color={card.border_color} style={inputStyle} />
      <TextInput name={language.phone} color={card.border_color} style={inputStyle} />
      <div className="selectContainer">
        <SelectInput name={language.day} color={card.border_color} style={selectInputStyle} />
        <SelectInput name={language.hour} color={card.border_color} style={selectInputStyle} />
      </div>
      <TexttAreaInput name={language.message} color={card.border_color} style={inputStyle} />
      <div className="buttonContainer">
        <Button text={language.schedule} style={{ backgroundColor: '#ff0404', color: 'whitesmoke' }} />
      </div>
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
          .selectContainer {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin-bottom: 28px;
          }
          .buttonContainer {
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
        `}
      </style>
    </div>
  );
};

Agenda.propTypes = constants.cardPropTypes;

export default Agenda;
