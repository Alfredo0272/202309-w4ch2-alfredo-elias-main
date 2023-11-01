type Gender = 'Male' | 'Female' | 'Other' | 'Prefer not answer';

export type PersonalData = {
  name: string;
  lastName: string;
  birthdate: number;
  gender: Gender | null;
  email: string;
  newsletter: boolean;
};
