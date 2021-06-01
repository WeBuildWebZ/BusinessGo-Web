import { useSelector } from 'react-redux';

import TextInput from '../../../TextInput';
import SelectInput from '../../../SelectInput';
import TextAreaInput from '../../../TextAreaInput';
import Button from '../../../Button';
import TitleSeparator from '../TitleSeparator';
import * as constants from '../../constants';
import { getLanguage } from '../../lang';

import * as utils from './utils';

const Agenda = props => {
  const { card } = props;
  const language = getLanguage(useSelector(store => store.language));
  const inputStyle = { marginBottom: 50 };
  const selectInputStyle = { margin: 2 };
  const daysOptions = Object.keys(language.days).map(dayKey => ({
    text: language.days[dayKey],
    value: dayKey
  }));
  const hoursOptions = utils.getHourOptions();

  return (
    <div className="agenda" id="agenda">
      <TitleSeparator title={language.agenda} color={card.border_color} />
      <TextInput name={language.completeName} color={card.border_color} style={inputStyle} />
      <TextInput name={language.email} color={card.border_color} style={inputStyle} />
      <TextInput name={language.phone} color={card.border_color} style={inputStyle} />
      <div className="selectContainer">
        <SelectInput
          name={language.day}
          color={card.border_color}
          style={selectInputStyle}
          options={daysOptions}
        />
        <SelectInput
          name={language.hour}
          color={card.border_color}
          style={selectInputStyle}
          options={hoursOptions}
        />
      </div>
      <TextAreaInput name={language.message} color={card.border_color} style={inputStyle} />
      <div className="buttonContainer">
        <Button
          disabled={card.isDummie}
          text={language.schedule}
          style={{ backgroundColor: '#ff0404', color: 'whitesmoke' }}
        />
      </div>
      <style jsx>
        {`
          * {
            color: whitesmoke;
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
