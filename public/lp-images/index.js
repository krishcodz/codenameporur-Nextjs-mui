const fs = require("fs");
const url = require("url");
const axios = require("axios");
const puppeteer = require("puppeteer");

const URLS = [
  "https://urbanriserevolutionone.com/lp-dsp/2bhk-3bhk-apartments-bang-on-omr-emi-v1",
  "https://urbanriserevolutionone.com/lp-dsp/2bhk-3bhk-apartments-bang-on-omr-emi-v14",
  "https://urbanriserevolutionone.com/lp-dsp/apartments-in-omr",
  "https://urbanriserevolutionone.com/lp-dsp/tamil", // text tamil
  "https://urbanriserevolutionone.com/lp-text/2bhk-3bhk-apartments-bang-on-omr",
  "https://urbanriserevolutionone.com/lp-text/2bhk-3bhk-apartments-bang-on-omr-emi",
  "https://urbanriserevolutionone.com/lp-text/2bhk-3bhk-apartments-bang-on-omr-navalur",
  "https://urbanriserevolutionone.com/lp-text/2bhk-3bhk-apartments-bang-on-omr-kelambakkam",
  "https://urbanriserevolutionone.com/taboola/emi",
  "https://urbanriserevolutionone.com/taboola/interior",
  "https://urbanriserevolutionone.com/taboola/interior-blue",
  "https://urbanriserevolutionone.com/taboola/livingroom",
  "https://urbanriserevolutionone.com/taboola/interior-red",
  "https://urbanriserevolutionone.com/taboola/interior-brown",
  "https://urbanriserevolutionone.com/taboola/interior-green",
  "https://urbanriserevolutionone.com/taboola/interior-tamil",
  "https://urbanriserevolutionone.com/taboola/premium-apartment",
  "https://urbanriserevolutionone.com/taboola/interior-v1",
  "https://urbanriserevolutionone.com/taboola/elevation-night",
  "https://urbanriserevolutionone.com/taboola/interior-sofa",
  "https://urbanriserevolutionone.com/taboola/new-lifestyle",
  "https://urbanriserevolutionone.com/taboola/working-spaces",
  "https://urbanriserevolutionone.com/taboola/designed-homes",
  "https://urbanriserevolutionone.com/taboola/green-parks",
  "https://urbanriserevolutionone.com/taboola/tamil-november",
  "https://urbanriserevolutionone.com/taboola/kanavu-illam",
  "https://urbanriserevolutionone.com/taboola/vadagai-kavalai",
  "https://urbanriserevolutionone.com/taboola/emi-burden",
  "https://urbanriserevolutionone.com/taboola/beautifully-designed-homes",
  "https://urbanriserevolutionone.com/taboola/live-in-harmony",
  "https://urbanriserevolutionone.com/taboola/vadagai-interior",
  "https://urbanriserevolutionone.com/taboola/vadagai-family",
  "https://urbanriserevolutionone.com/taboola/premium-apartments",
  "https://urbanriserevolutionone.com/taboola/premium-apartments-v1",
  "https://urbanriserevolutionone.com/taboola/nanga-ready-1",
  "https://urbanriserevolutionone.com/taboola/nanga-ready-2",
  "https://urbanriserevolutionone.com/taboola/final-stage-of-completion",
  "https://urbanriserevolutionone.com/colombia/emi",
  "https://urbanriserevolutionone.com/colombia/interior",
  "https://urbanriserevolutionone.com/colombia/interior-tamil",
  "https://urbanriserevolutionone.com/colombia/new-lifestyle",
  "https://urbanriserevolutionone.com/lp-izooto/2bhk-3bhk-apartments-bang-on-omr-emi-v01",
  "https://urbanriserevolutionone.com/lp-vdo/apartments-in-omr",
  "https://urbanriserevolutionone.com/lp-dsc/final-stage-of-completion",
  "https://urbanriserevolutionone.com/lp-dsc/Nanga-Ready",
  "https://urbanriserevolutionone.com/lp-inf/final-stage-of-completion", // color changed
  "https://urbanriserevolutionone.com/lp-dsc/2bhk-3bhk-apartments-tamil",
  "https://urbanriserevolutionone.com/lp-dsc/luxury-apartments",
  "https://urbanriserevolutionone.com/lp-dsc/apartments-in-chennai",
  // "https://urbanrisemanhattancondos.com/lp-text/t1-37lakhs-v2",
];

const getBgStyles = (page, selector) => {
  return page.$eval(selector, (el) => {
    const compStyles = window.getComputedStyle(el);
    const backgroundColor = compStyles.getPropertyValue("background-color");
    const backgroundImage = compStyles.getPropertyValue("background-image");
    return {
      backgroundColor,
      backgroundImage,
    };
  });
};

const downloadImages = async (page, imgPathD, imgPathM) => {
  const pageUrl = await page.url();

  const imgSrcD = await page
    .$eval(".main-container .hidden-sm", (img) => img.getAttribute("src"))
    .catch(() => "");

  if (imgSrcD && !fs.existsSync(imgPathD)) {
    console.log("Dowloading main banner image");

    const srcUrlD = `${pageUrl}${imgSrcD}`;

    console.log("Main Image URL: ", srcUrlD);
    const imgRespD = await axios.default.get(srcUrlD, {
      responseType: "stream",
    });
    imgRespD.data.pipe(fs.createWriteStream(imgPathD));
  } else {
    console.log("Skipping main banner image");
  }

  ///  Mobile Responsive Images  ///

  const imgSrcM = await page
    .$eval(".main-container .hidden-lg", (img) => img.getAttribute("src"))
    .catch(() => "");

  if (imgSrcM && !fs.existsSync(imgPathM)) {
    console.log("Dowloading mobile banner image");

    const srcUrlM = `${pageUrl}${imgSrcM}`;

    console.log("Mobile Image URL: ", srcUrlM);
    const imgRespM = await axios.default.get(srcUrlM, {
      responseType: "stream",
    });
    imgRespM.data.pipe(fs.createWriteStream(imgPathM));
  } else {
    console.log("Skipping mobile banner image");
  }
};

const extractPageProps = async (page, pagePropsPath) => {
  if (fs.existsSync(pagePropsPath)) {
    console.log(
      `Page props already exists at path: ${pagePropsPath}; Skipping`
    );
    return;
  }

  console.log("Extracting page props");

  const styleInfo = {};
  console.log("Getting sidebar color");
  try {
    const sidebar = await getBgStyles(page, ".sidebar");
    styleInfo.sidebar = sidebar;
  } catch (err) {
    console.log("Sidebar not found, skipping");
  }

  console.log("Getting sidebar form color");
  try {
    const sidebarForm = await getBgStyles(page, ".sidebar-form");
    styleInfo.sidebarForm = sidebarForm;
  } catch (err) {
    console.log("Sidebar Form not found, skipping");
  }

  console.log(styleInfo);

  const formExists = await page.$eval("form", () => true).catch(() => false);
  console.log(`No Form: ${!formExists}`);

  const pageProps = {
    styleInfo,
    noForm: !formExists,
  };

  console.log("Saving page props to file");
  fs.writeFile(pagePropsPath, JSON.stringify(pageProps), () => {});
};

const processPageUrl = async (pageUrl, browser) => {
  console.log(`Processing URL: ${pageUrl}`);
  const folder = url.parse(pageUrl).pathname.substring(1);
  if (!fs.existsSync(folder)) {
    console.log("Creating: ", folder);
    fs.mkdirSync(folder, { recursive: true }, () => {});
  } else {
    console.log("Skipping: ", folder);
  }

  const imgPathD = `./${folder}/bannerImg.jpg`;
  const imgPathM = `./${folder}/bannerImg_xs.jpg`;
  const pagePropsPath = `./${folder}/pageProps.json`;

  if (
    fs.existsSync(imgPathD) &&
    fs.existsSync(imgPathM) &&
    fs.existsSync(pagePropsPath)
  ) {
    console.log("All required files exist, skipping");
    return;
  }

  console.log("Getting URL");
  const page = await browser.newPage();
  await page.goto(pageUrl, { waitUntil: "networkidle0" });

  console.log("Extracting Page Props");
  await extractPageProps(page, pagePropsPath);

  console.log("Downloading Images");
  await downloadImages(page, imgPathD, imgPathM);

  await page.close();
};

const run = async () => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

  const promises = [];
  const browser = await puppeteer.launch({
    ignoreHTTPSErrors: true,
    headless: false,
  });
  for (let i = 0; i < URLS.length; i += 1) {
    const pageUrl = URLS[i];
    promises.push(processPageUrl(pageUrl, browser));
  }
  await Promise.all(promises);

  await browser.close();
};

// run();
