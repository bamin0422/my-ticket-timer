export const QUERY_KEY = "siteUrlTimeQuery";

export async function getSiteUrlTime(siteUrl: string): Promise<Date> {
  try {
    const response = await fetch(
      `/api/getSiteUrlTime?siteUrl=${encodeURIComponent(siteUrl)}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return new Date(data.date);
  } catch (e) {
    console.error(e);
    return new Date();
  }
}
