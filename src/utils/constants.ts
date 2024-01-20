export const AVAILABLE_LANGUAGES: Array<string> = ['en', 'ua'];

export const MenuItem = {
  WOMEN: 'Women',
  MEN: 'Men',
  KIDS: 'Kids',
} as const;

export const PRODUCT_GRID_SIZE = 9;

export enum TimeConstants {
  SECOND = 1000,
  MINUTE = 60 * SECOND,
  HOUR = 60 * MINUTE,
  DAY = 24 * HOUR,
  TWO_DAYS = 2 * DAY,
}
