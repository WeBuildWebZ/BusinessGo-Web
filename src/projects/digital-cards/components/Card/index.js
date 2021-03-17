import Link from 'next/link';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import VCard from 'vcard-creator';

import Spinner from '../../../../components/Spinner';
import { showClientDocument } from '../../../../services/api/clientDocument';

import SocialNetworks from './SocialNetworks';
import { getLanguage } from './lang';

const Card = props => {
  const language = getLanguage(useSelector(store => store.language));
  const [card, setCard] = useState(props.card);

  const getClassName = name => `${name} ${card.template_code}`;

  const handleDownloadVCard = () => {
    const vCard = new VCard();
    vCard.addName(card.form_data.surname, card.form_data.name).addPhoneNumber(card.form_data.whatsapp_number);
    const cardContent = window.btoa(vCard.toString());
    const fileName = `${card.form_data.name}${card.form_data.surname ? `_${card.form_data.surname}` : ''}`;
    const a = document.createElement('a');
    a.download = `${fileName}.vcf`;
    a.textContent = fileName;
    a.href = `data:text/vcard;base64,${cardContent}`;
    a.click();
  };

  useEffect(() => {
    if (card) return;
    showClientDocument(props.id).then(({ data: givenCard }) => {
      setCard(givenCard);
    });
  }, []);

  if (!card) return <Spinner />;

  const hasName = !!(card.form_data.name || card.form_data.surname);
  const hasJobTitle = !!card.form_data.job_title;

  return (
    <div className={getClassName('_card')}>
      {/* ======================================================================================================================= */}
      {/* ===============================ARRIBA---FOTO-PERFIL===================================================================== */}

      <div className={getClassName('top')} />
      <div className={getClassName('personalData')}>
        {hasName && (
          <div className={getClassName('text name')}>
            {`${card.form_data.name} ${card.form_data.surname}`}
          </div>
        )}
        {hasJobTitle && <div className={getClassName('text job_title')}>{card.form_data.job_title}</div>}
      </div>
      {/* ====================================================================================================================== */}
      {/* ================================PUESTO LABORAL Y NOMBRE=============================================================== */}
      {hasJobTitle && (
        <div className={getClassName('text job_title outer_job_title')}>
          <h3>{card.form_data.job_title}</h3>
        </div>
      )}

      {hasName && (
        <div className={getClassName('text name outer_name')}>
          {card.form_data.name} {card.form_data.surname}
        </div>
      )}
      {/* ====================================================================================================================== */}
      {/* =========================================REDES SOCIALES=============================================================== */}

      <div className="mid">
        <SocialNetworks card={card} getClassName={getClassName} />
      </div>
      {/* ====================================================================================================================== */}
      {/* ========================================ABAJO DE TODO=============================================================== */}

      <div className={getClassName('bottom')}>
        {card.form_data.whatsapp_number && (
          <div className="add" onClick={handleDownloadVCard}>
            {language.addToContacts}
          </div>
        )}
        <div className="country">{card.form_data.country}</div>
        <div className="state">
          {card.form_data.state}
          {card.form_data.municipality && `, ${card.form_data.municipality}`}
        </div>
        {card.form_data.personal_email && (
          <Link href={`mailto:${card.form_data.personal_email}`} className="email">
            <a target="blank">
              <div className={getClassName('email')}>{card.form_data.personal_email}</div>
            </a>
          </Link>
        )}
      </div>

      <style jsx>
        {`
          ._card {
            width: 100%;
            min-height: 100vh;
            display: flex;
            flex-flow: column;
            background: white;
          }
          .text.free4 {
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);
          }

          // ======================================================================

          .top {
            flex: 7;
            width: 100%;
            height: 100%;
            background-image: url(${card.form_data.profile_photo});
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
          }
          .top.free2 {
            flex-direction: row-reverse;
            justify-content: space-between;
          }
          .top.free4 {
            background-color: whitesmoke;
            border-bottom-left-radius: 40%;
            border-bottom-right-radius: 40%;
          }

          // ===============================================
          .profile_photo {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            fit-content: cover;
          }
          // ================================================
          .personalData {
            display: flex;
            flex-direction: column;
            margin: 14px 0 0 14px;
            color: whitesmoke;
          }
          .personalData.free1 {
            display: none;
          }
          .name {
            font-size: 20px;
          }
          .outer_name {
            display: none;
          }

          .name.free2 {
            font-size: 32px;
          }
          .outer_job_title {
            display: none;
          }
          // ============================================================
          .job_title.free1 {
            display: flex;
            justify-content: center;
            position: relative;
          }
          .job_title.free1 h3 {
            position: absolute;
            top: -0.7em;
            font-size: 2em;
            padding: 7px 1em;
            border: 3px solid white;
            border-radius: 0.7em;
            background: #28527a;
            color: white;
          }
          .outer_name.free1 {
            display: block;
            margin-top: 1.2em;
          }

          .job_title.free2 {
            font-size: 20px;
          }
          // ==============================================
          .name.free1 {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            padding: 7px;
            border-radius: 7px;
            font-size: 20px;
            font-weight: bold;
          }

          // =============================================
          .mid {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            flex-flow: column;
            background: #ebebeb;
          }
          // ==============================================

          .bottom {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            color: white;
            background: #1c1c1c;
          }
          .add,
          .country,
          .state,
          .email {
            margin: 0 5px;
            background: black;
            height: 50px;
            border-radius: 5px;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  card: PropTypes.any
};

Card.defaultProps = {
  id: null,
  card: null
};

export default Card;
