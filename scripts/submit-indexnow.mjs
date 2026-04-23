const siteUrl = "https://da-bat.com";
const key = "CC786A9B-0AF6-4DF1-80BF-A9FAA953E82F";
const sitemapUrl = `${siteUrl}/sitemap.xml`;
const keyLocation = `${siteUrl}/${key}.txt`;

const sitemapResponse = await fetch(sitemapUrl);

if (!sitemapResponse.ok) {
  throw new Error(`Sitemap fetch failed (${sitemapResponse.status}) for ${sitemapUrl}`);
}

const sitemapXml = await sitemapResponse.text();
const urlList = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1].trim());

if (urlList.length === 0) {
  throw new Error(`No URLs found in ${sitemapUrl}`);
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  },
  body: JSON.stringify({
    host: new URL(siteUrl).host,
    key,
    keyLocation,
    urlList
  })
});

const responseText = await response.text();

if (!response.ok) {
  throw new Error(`IndexNow submit failed (${response.status}): ${responseText || "unknown error"}`);
}

console.log(`Submitted ${urlList.length} URL(s) for ${siteUrl} to IndexNow.`);
