import * as dotenv from 'dotenv';

dotenv.config();

export const GNEWS_V4_URL = 'https://gnews.io/api/v4';
export const GNEWS_TOKEN = process.env.GNEWS_TOKEN;
export const LANG = 'en';
export const COUNTRY = 'us';

export const GNEWS_URLS = {
  breaking: `${GNEWS_V4_URL}/top-headlines?token=${GNEWS_TOKEN}&topic=breaking-news&lang=${LANG}&country=${COUNTRY}`,
}