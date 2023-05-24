import { xml2js } from 'xml-js';

export const parseXML = (xmlData) => {
  const result = xml2js(xmlData, { compact: true, ignoreComment: true });
  const rates = result.DataSet.Body.Cube.Rate;

  const data = rates.map((rate) => {
    const currency = rate._attributes.currency;
    const value = parseFloat(rate._text);

    return {
      currency,
      value,
    };
  });

  return data;
};