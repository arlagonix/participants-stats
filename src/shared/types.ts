export type SurveyMetaDataType = {
  /** Title for the stats section */
  name: string;
  /** The corresponding description */
  description: string;
  /** Data that must be displayed in the section */
  data: [string, number][];
  /** HTML id used to quickly navigate between stats sections */
  id: string;
}[];

export interface IDistribution {
  [key: string]: number;
}

export type IMockDataObject = {
  [key: string]: string | number;
};
