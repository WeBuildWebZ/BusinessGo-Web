import VCard from 'vcard-creator';

export const downloadVCard = ({
  name,
  surname,
  company,
  job_title,
  email,
  phone_numbers,
  url,
  address = []
} = {}) => {
  const vCard = new VCard();
  if (company) vCard.addCompany(company);
  if (job_title) vCard.addJobtitle(job_title);
  if (email) vCard.addEmail(email);
  if (phone_numbers) phone_numbers.forEach(phone_number => vCard.addPhoneNumber(phone_number));
  if (url) vCard.addURL(url);

  vCard.addAddress(...address);

  const cardContent = window.btoa(vCard.toString());
  const fileName = `${name}${surname ? `-${surname}` : ''}`;
  const a = document.createElement('a');
  a.download = `${fileName}.vcf`;
  a.textContent = fileName;
  a.href = `data:text/vcard;base64,${cardContent}`;
  a.click();
  console.log('a.click', a.click);
};
