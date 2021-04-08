import VCard from 'vcard-creator';

const useDownloadVCard = () => (name, surname, phone) => {
  const vCard = new VCard();
  vCard.addName(name, surname).addPhoneNumber(phone);
  const cardContent = window.btoa(vCard.toString());
  const fileName = `${name}${surname ? `_${surname}` : ''}`;
  const a = document.createElement('a');
  a.download = `${fileName}.vcf`;
  a.textContent = fileName;
  a.href = `data:text/vcard;base64,${cardContent}`;
  a.click();
};

export default useDownloadVCard;
