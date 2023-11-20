const jsonConfig = {
  // API_URL: "https://backend.godachi.com",
  API_URL: "https://backend.godachi.com",
  WEBSITE_URL: "https://www.godachi.com/",
  IMG_URL: "https://backend.godachi.com",
  NEXT_API_URL: "https://backend.godachi.com",

  maillerConfig: {
    // host: 'smtp.gmail.com',
    // port: 465,
    // secure: true,
    // tls: { rejectUnauthorized: true },
    service: "Gmail",
    auth: {
      user: "noreplyexamplemail@gmail.com",
      pass: "noraplymailpassword",
    },
  },

  languageData: [
    {
      languageId: "english",
      locale: "en",
      name: "English",
      icon: "us",
    },
    {
      languageId: "turkish",
      locale: "tr",
      name: "Türkçe",
      icon: "tr",
    },
  ],

  defaultLanguage: {
    languageId: "english",
    locale: "en",
    name: "English",
    icon: "us",
  },
};

if (process.env.NODE_ENV == "development") {
  jsonConfig.API_URL = "https://backend.godachi.com";
  jsonConfig.WEBSITE_URL = "https://backend.godachi.com";
  (jsonConfig.IMG_URL = "https://backend.godachi.com"),
    (jsonConfig.NEXT_API_URL = "https://backend.godachi.com");
}

module.exports = jsonConfig;
