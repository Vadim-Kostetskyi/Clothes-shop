import { PersonalDataItemId } from 'types/types';

type PersonalDataInput =
  | { id: PersonalDataItemId; placeholder: string; type: string }
  | { id: PersonalDataItemId; placeholder: string; type?: undefined };

type PersonalDataItem = {
  title: string;
  inputs: PersonalDataInput[];
};

export const personalDataItems: PersonalDataItem[] = [
  {
    title: 'PERSONAL DATA',
    inputs: [
      {
        id: PersonalDataItemId.FirstName,
        placeholder: 'First Name *',
        type: 'text',
      },
      {
        id: PersonalDataItemId.LastName,
        placeholder: 'Last Name *',
        type: 'text',
      },
      {
        id: PersonalDataItemId.Prefix,
        placeholder: 'Prefix *\n+380',
        type: 'text',
      },
      {
        id: PersonalDataItemId.Number,
        placeholder: 'Cell number *',
        type: 'number',
      },
      { id: PersonalDataItemId.Email, placeholder: 'Email *', type: 'email' },
    ],
  },
  {
    title: 'DELIVERY DETAILS',
    inputs: [
      {
        id: PersonalDataItemId.Address,
        placeholder: 'Address *',
        type: 'text',
      },
      {
        id: PersonalDataItemId.Information,
        placeholder: 'More information (Optional)',
        type: 'text',
      },
      {
        id: PersonalDataItemId.ZipCode,
        placeholder: 'Zip code *',
        type: 'number',
      },
      { id: PersonalDataItemId.City, placeholder: 'City *', type: 'text' },
      { id: PersonalDataItemId.State, placeholder: 'State *', type: 'text' },
    ],
  },
];
