import { IServerOptions, merge } from '@lenne.tech/nest-server';
import { CronExpression } from '@nestjs/schedule';
import { join } from 'path';

/**
 * Configuration for the different environments
 * See: https://github.com/lenneTech/nest-server/blob/main/src/core/common/interfaces/server-options.interface.ts
 */
export const config: { [env: string]: Partial<IServerOptions> } = {
  // ===========================================================================
  // Local environment
  // ===========================================================================
  local: {
    automaticObjectIdFiltering: true,
    compression: true,
    cookies: false,
    cronJobs: {
      sayHello: {
        cronTime: CronExpression.EVERY_5_MINUTES,
        timeZone: 'Europe/Berlin',
        runOnInit: false,
      },
    },
    email: {
      smtp: {
        auth: {
          user: 'cade72@ethereal.email',
          pass: 'jpvTwGYeSajEqDvRKT',
        },
        host: 'mailhog.lenne.tech',
        port: 1025,
        secure: false,
      },
      defaultSender: {
        email: 'cade72@ethereal.email',
        name: 'Nest Server Starter Local',
      },
    },
    env: 'local',
    execAfterInit: 'npm run docs:bootstrap',
    filter: {
      maxLimit: null,
    },
    graphQl: {
      driver: {
        debug: true,
        introspection: true,
        playground: true,
      },
      maxComplexity: 20,
    },
    ignoreSelectionsForPopulate: true,
    jwt: {
      // crypto.randomBytes(512).toString('base64') (see https://nodejs.org/api/crypto.html#crypto)
      // tslint:disable-next-line:max-line-length
      secret: 'azbbOVcHxkBH9VMY1ArrrUbAoa787d3/5+n2/UOQXo+uKYo0zcAFCbpmwzjbcP+Tp9v+vIC2ta/zJL8mGz5g0OEZoUc0RvnadarRlq/zUeGUrPkxSKUFVfuxDLq+1aE2tLI6IBjOdygaoi9GIfSMY+MlQDAMtMoAk8QzJ+H/tBqeEnynOG8pNWwcVW5WG62EhAXjWOtdlPvEs1p9888jYpXu5bwo5r1IYm5OUdGlIBLP0ZoV0LV77XHNzYg/1XvRCDRit4NKeZN1Z++nNqqhT+MDT7UubJr71MdTuNINVqDXsEa7gDNyaC01huhc2jZGqJTXiAMRIFV8B43a8VvYF5UvSbURGNsCTJebS5Q0K8/W+W7BRRuMyPj1fGIuKARyG1vEt8RGN9dWCpT5jZLQl5MA2dCHCNoQ+sF5RtdHF9KFKFRwxykk5T/K7JPSlhDYzHKG4Vtitj3RBmni/eI0P0euoufycmaxxnxEe6MxKD+MTj6RIir4ywTW/JYtvPTiV5UrnxG8Yj4IQoF06d/j4az2N4wrSMYl/d+56Pp1ICj/gmkOrC5+bMzh6UBvG8NNXbJ1M+qzVNbve9H0cmCwZZZj0mmJwQKiGf7VGAD9k225KZEejjfWvlTorAAETy9OpaqGubYBd8K0rO9OsICNZbpOVe3604MInqsxp1WFGjU=',
      signInOptions: {
        expiresIn: '15m',
      },
      refresh: {
        renewal: true,
        // crypto.randomBytes(512).toString('base64') (see https://nodejs.org/api/crypto.html#crypto)
        // tslint:disable-next-line:max-line-length
        secret: 'MFiuMNp++yo/LBkxgDdS8g9/jY3b6bazjf1/l/3FjCS0h3RzNbv46XT5ksqkMIfzvC0XG2paZ3hMn0VjUTUkt3ui0H06Eo6nSMilawsmImec0d1eNufwx03F0ftXKQoxcotWntGiqFX1ef6rbD1Jukc+HfDRclOUb+MsGpwRxfyOIRE+x+cWEVK/aX0x0zgE3b/fydpc+TgJF7TO9ActiQtJGmSMB8s7YRT2V3G6ECKIeyxtu5qc0bl2tgGHxo9QpzzO4eMedPorqqLtnT1PXAkJ5ZKiL+/N/drqk1ov53H3kxZbst8kZsBOV9K/IELevm6wdyoCzD3WcoxjIytpQpLgXXP2f/JvD+GQG0ct9ZJXEY9rcIXO9Nyd5/QhMfLOGIQ7hRoCxzeCpIPoiD8dim05AB/k7WCq9/NtTa2eNDGaHc4OCDvzIJZxQyGoloniMFgS1KWrjx8ZWIpLQhmYr8ah9AF/ODBGi/OfH83Rd2yIEnbXsjNJU4mkFYRVUDbA3RkwplA/WhefxwVL1iDyEkdaD+4DQJNi9wi36oIadHltcgdhr01WtU0+/OppxOsPhXuQFHodEVV3oikM/yjwHe5a4chM96BWCjdEsiguYW7ghs+stcoeky0QfvOeMX9n1rrQogK4kB+Lxz5ubr1f1ZLTSJg6WCzjw1gkiWUV5Xs=',
        signInOptions: {
          expiresIn: '7d',
        },
      },
    },
    loadLocalConfig: false,
    logExceptions: true,
    mongoose: {
      uri: 'mongodb://127.0.0.1/ski-basar-local',
    },
    port: 3000,
    sha256: true,
    staticAssets: {
      path: join(__dirname, '..', 'public'),
      options: { prefix: '' },
    },
    templates: {
      path: join(__dirname, 'assets', 'templates'),
      engine: 'ejs',
    },
  },

  // ===========================================================================
  // Develop environment
  // ===========================================================================
  develop: {
    automaticObjectIdFiltering: true,
    compression: true,
    cookies: false,
    email: {
      smtp: {
        auth: {
          user: 'cade72@ethereal.email',
          pass: 'jpvTwGYeSajEqDvRKT',
        },
        host: 'mailhog.lenne.tech',
        port: 1025,
        secure: false,
      },
      defaultSender: {
        email: 'cade72@ethereal.email',
        name: 'Nest Server Starter Develop',
      },
    },
    env: 'develop',
    execAfterInit: 'npm run docs:bootstrap',
    filter: {
      maxLimit: null,
    },
    graphQl: {
      driver: {
        debug: true,
        introspection: true,
        playground: true,
      },
      maxComplexity: 20,
    },
    ignoreSelectionsForPopulate: true,
    jwt: {
      // crypto.randomBytes(512).toString('base64') (see https://nodejs.org/api/crypto.html#crypto)
      // tslint:disable-next-line:max-line-length
      secret: 'rsA8jD8Pq65Nd9POwiPEv36nILjkBoJp+yKepO1nisoTozqBmLl+0ukx0qGu6Yas3Pi/oepfgqVdAvflEBSFdnuXTNwkgSMjP0ZoazE9LhY39ZoPtz+TPiyPbeLsqiGep3sHSjaKoEGPNe2gM0VS12KvCN8Y8713AxCCIX/Htju7UyqHmX2S19SCGM1bdmdMY4DuD1e7W0weakmIOGOYbn3h0JHrdZpv5HKadRhUVkpBb61pdlUNulI4VidnBaoR/4LiayK4LYUx9XY68llCNo2IO6+Cv27hHjkq8XQFi8BTb3Wpyjf0aurce+LinOpFjtWwnbZxoiA79xIW1WZhGNoVH0u4Cv1Vw6A7OcEu4CJeBOfxq5DgVbFfuzoDqsykOR0ZhJZbR3H9pDyJht8X3jQYkwnAMlJJSQzzgmEgmjVjIN6UsgQywAxCG74mR1XXqIovnYkfhKJxDVaVe5ImzZDupfpQ1sZQcXe/+y71ohlBQB+7YKvc0r9osnaF140FEx1N8w4svHOD3BRkb8ExLmSk5DvjYFkEzou9HXiwHz2q3UG0psYtuWgypp755pJ2JQ60mR+4FTFSvp7zI7r1vQJAFkOw5b0iOcihEElF+T79k36xo5wg8j3FEs5u2ZH2Ozrerkbn2nQZytBLs0+XEl37IYT7hwvdcRwhx/wGr/Q=',
      signInOptions: {
        expiresIn: '15m',
      },
      refresh: {
        renewal: true,
        // crypto.randomBytes(512).toString('base64') (see https://nodejs.org/api/crypto.html#crypto)
        // tslint:disable-next-line:max-line-length
        secret: 'NE8lC3vn5xwXT0PW2sStx3em1j11kp2nhhGOUTh+L7OlL3gUEKE9aqKEr+MuUpMT/xGGMDCFdER4I3coj1wUkHR6OFM1ZEQLfYYELH6XBOlBGuaF7DcOHGvVoK2NjK6T/V3Iro3q1leQFZfX4MdjqmLo+sXqtsJdjxSL9gtnI+2YbQ5n0VY4G6RKP5ValjD+HjjoXPwTJWKRazGQ3xqO50oaWqi5sGXQX0QAwLD18FJ62Z1f53LofuwrZpnQEJ5jBtc6D0idENTA2rZhJluTHe3BSWpS8kGudjs05DCRk3nLi78kmYC2io3xAuyNngxocNMQ599VV6AxFcasuifebuqTzEleMhyWJH/zgk9W18AzFZAhEAeLkg4YsJJmu6QpqPckK83X8RhETvUKLYLqBYhHzQmlqa4TCyRG3BQ7atP56PJ3t2228G5qE9KanganYFFkPHc58Sirv5DINueb7qoBkzuff/PJF78U7/aV1Ydc0qRNxbP9gDeQfs4mUmrPzoMnDopo8eSe9K4xA3m2bdVOJG/k723JQPoBF1JfjXgwE4OQrDxCMfwxi/QZhhkALvKo8Hj5nu/OPNNCqKEmjV1ReEF4KnnSelhSN4NFwgaUoBwN+6inpRsO8MvJS9uiqlmJauMPiKSqJcMeVOnaAAuhM7x+B0GophdxIeYYRcw=',
        signInOptions: {
          expiresIn: '7d',
        },
      },
    },
    loadLocalConfig: false,
    logExceptions: true,
    mongoose: {
      uri: 'mongodb://overlay_mongo1/ski-basar-develop',
    },
    port: 3000,
    sha256: true,
    staticAssets: {
      path: join(__dirname, '..', 'public'),
      options: { prefix: '' },
    },
    templates: {
      path: join(__dirname, 'assets', 'templates'),
      engine: 'ejs',
    },
  },

  // ===========================================================================
  // Test environment
  // ===========================================================================
  test: {
    automaticObjectIdFiltering: true,
    compression: true,
    cookies: false,
    email: {
      smtp: {
        auth: {
          user: 'cade72@ethereal.email',
          pass: 'jpvTwGYeSajEqDvRKT',
        },
        host: 'mailhog.lenne.tech',
        port: 1025,
        secure: false,
      },
      defaultSender: {
        email: 'cade72@ethereal.email',
        name: 'Nest Server Starter Test',
      },
    },
    env: 'test',
    execAfterInit: 'npm run docs:bootstrap',
    filter: {
      maxLimit: null,
    },
    graphQl: {
      driver: {
        debug: true,
        introspection: true,
        playground: true,
      },
      maxComplexity: 20,
    },
    ignoreSelectionsForPopulate: true,
    jwt: {
      // crypto.randomBytes(512).toString('base64') (see https://nodejs.org/api/crypto.html#crypto)
      // tslint:disable-next-line:max-line-length
      secret: '8ByM8LVhnEXdLLLVhr1l+jX228EMlsL1aEjCXAmmLW/RBa5uvfTX+QnRfQuXmeyldxht8d5vBsqaAYJYVzm1wGis+s2eRmL+TzY0KN94JzZ/LitKuDM2uVh8qx3HSleU7eHaU5JMmDX5ZOWKL+ffDf+YfXTWGr+2ld4MXPio4tFWKNqHl1lbbibPvDh0jj1thRufRlXugMEnp1oEOL59vKO0qdqYfRXZMeK4tEYli+mGu4CRvwtLzvrHMqgpieqjWBiGlTX5ulo3B23DJfzkFPYnxnjoM/O25Pgg5/26hhtpuxuNvBDGP0VzntAiGXuP96QfJ8Oqx93d3mYciok/q6f4vTdrSVmfT2j/EvrEy4S5WVZROiTNzS5Bx+02/4SOhJlLr20JWpyu/VmImX4NWEhu5OVQ0aRXsCMrwGMSRS56xaaLWYFb2A2qtij+E80XwR9T5adNAg9tav7wMF4MH/3fahH37Pim4tALnfrtYgy4VFn2cTdnX4DFaMiobWnIIw0hWmA5h2d/hj/qqlXuESwb423cqV8xxT1cFe3raOsgTZVPiGmLdpFmmc5C1v9G0XT0YwT+E2iRvKpzSRcg0owbj1hsg4j4ZkdmFSq3EPzBplp1j8mRgpB/BkTcEaZCte7u3nYCD7Rqv64aCp5UNgl7HXASbryVf29nMIkNc2M=',
      signInOptions: {
        expiresIn: '15m',
      },
      refresh: {
        renewal: true,
        // crypto.randomBytes(512).toString('base64') (see https://nodejs.org/api/crypto.html#crypto)
        // tslint:disable-next-line:max-line-length
        secret: 'cdUxrFYIN4ZxyKplkmfPAToX6VRjiuI+SHjg63bNVOY5F9fsSKvroX6rDoaxNtxaz7LcX/qlt2gzFzdgkMO2kMyfKLR16d7i+TspQMNEMswzcDi765UmFm4kFliEvDKykAmwAdGmxV++ewx2Yc0xV1JxzZyvdtle+/tonw0J+G3yrX6T+zA40ShMlOPFg66QvnCsUR2/U3ZZC4YQ3XIQVrgBl6DcdZlaQ5QaSnyUR7YRE9/bFVzB4XRfyNIvKEEj2MATeNtaW72Q5WGXfQjtjGeK3R4HZv6QDD9cL/+fAXGj9hdftRfKK/MhO8gKkL5juqONwcy57PlAVPMN+4XK+BNWvWFt6xw3qAdX11PqIfraR/TvmHN0EsDsJYYUV4QDZMTTok/wZFEHZwjVO2g3/ZxADvfaoZdqD+s+DOhNI2SIU37lp6V+uhfkMUrguH6WSXtLS7S9l4anioj9CNT1yka7RPuOxf3Zlr8SsNZg3rkrQAzkxRVtvAgWoC1niQIdLicsjiWkn2+Zx3caF4AwKxa0HsFg0hWwaQJ510ZEIr/wwi1t2qmkunUIa+4ZeklEIEX5yCXeCSBOPbpV8Pn8MWJ6aiXRzbnRG0mFuDmXr1+hbIHuhkW6ZmwYO2jEY3njBabyZjctu4aWu53BUm4iUc3235gX46Gs7lfz07Mk36o=',
        signInOptions: {
          expiresIn: '7d',
        },
      },
    },
    loadLocalConfig: false,
    logExceptions: true,
    mongoose: {
      uri: 'mongodb://overlay_mongo1/ski-basar-test',
    },
    port: 3000,
    sha256: true,
    staticAssets: {
      path: join(__dirname, '..', 'public'),
      options: { prefix: '' },
    },
    templates: {
      path: join(__dirname, 'assets', 'templates'),
      engine: 'ejs',
    },
  },

  // ===========================================================================
  // Preview environment
  // ===========================================================================
  preview: {
    automaticObjectIdFiltering: true,
    compression: true,
    cookies: false,
    email: {
      smtp: {
        auth: {
          user: 'cade72@ethereal.email',
          pass: 'jpvTwGYeSajEqDvRKT',
        },
        host: 'mailhog.lenne.tech',
        port: 1025,
        secure: false,
      },
      defaultSender: {
        email: 'cade72@ethereal.email',
        name: 'Nest Server Starter Preview',
      },
    },
    env: 'preview',
    execAfterInit: 'npm run docs:bootstrap',
    filter: {
      maxLimit: null,
    },
    graphQl: {
      driver: {
        debug: true,
        introspection: true,
        playground: true,
      },
      maxComplexity: 20,
    },
    ignoreSelectionsForPopulate: true,
    jwt: {
      // crypto.randomBytes(512).toString('base64') (see https://nodejs.org/api/crypto.html#crypto)
      // tslint:disable-next-line:max-line-length
      secret: 'iBDqfngUHLVnbvGkRNlkSCQmoTBSDZjLbd44fpR1YI9wbUnbnGKnfxgmx3/StVGa+/gqd518Ts/IPoQL7zmtb/2ifBZ64Lv/zJ/rwK6buh3OdavE7cOmwGr5kTocgH9/MDtHn+7zFH4gaonnMAECb04ZeyaJgdj08RHaJ+nBH2ygWCy+EEtak1IMjVTq4vyzmsFe2t5Mqs0c4+fchJkwzNWT9VBhb/DaAfnT768f7jJaxCKSuCjftU48+ao2sRGx5mEZvRGSQhzt6sHZO2tSS+y290O/8w2sGSmOzlDtgWgnatRw/GR9402Gtkjr4CfdUpvV9dQ+tNKjY/iU4CrBR7hKklBf3mB06mgpZ9yCaq8AqEBH4NiaDVbyCRJM6MoIROTTqCQ1820eO4mwKTz9P12c46Z7q8IQ2Kwfig6SnV1vJi5JJqRgQo+iQCZyTFfNNANcLKIdx1y5qlrhqZzp+vWCY8Pioh6OuoXk0vfG4ZyxGZGKObxHa/UxjGbG/tHfTXLSS58FcGBcILziJ4rAYqZ4C7U3C6FRHNGn26GJn4e3ITsluGpkPE87FXz3g9zRa9NpndaseARm7fnPES68cU/i0mDVhipeAyDf5ghpCOMf6XqHN00kOlXUZfJhAINMD5hxW6edANG/P6rzmP9zkTdOR5gDotHkDE1/7SdHYHI=',
      signInOptions: {
        expiresIn: '15m',
      },
      refresh: {
        renewal: true,
        // crypto.randomBytes(512).toString('base64') (see https://nodejs.org/api/crypto.html#crypto)
        // tslint:disable-next-line:max-line-length
        secret: 'lLoWh3cWciWJd9QdWYI0CiYwWLU4dv/BQfIKdhZU3lCrDyINYDdFJSOUSMEuojd4McLAmijIneQepVdtQqHMin7wLCxFbesh37yY5n1AzmQYYrCjHNKuq1MNPxbSTdzqvmTwtcAfDR+lSyf3R9b/OAr5QVruQUYC7maOxX3bvyME3sItPAmzbLADi4NHdz3x+0WLWcrSTnLef1YHsSPfbLwrZRCrrVip07BU8fqnlVuYEwLKKlKJvn9fBMHKcB+d5oDthh8R/y5KhHiHmr8buepvyOyXAzZxGaeWnmW+Ch2nMKflF9RcFSMI930fA1vwIwdeaEllPz5+Xd1JbmmAsKpI5pPX3mTuXin1qBDWKazXmVb4XLArbBi2JS7kIqV65V/gRM88YlbhvSchaaM9LF6z3SB7sE+cbKDtsWRB1PeCXfGMb4BH/ugGAfjcyCflkaIPGxzS6nK2iZ3k/M1myutBMHCBNyxFNiikydzVcQgkYnZyjgovAeFwDHimAYuwOjt7d0Jp6zCWypugmXS5PTid949obWVlXY+eKzmX5OG/JGr6ZJrDXt3T8Y1QyxLiVrCFPbwOwotmR68a+tGz6LFniZaCwLrfkpX5R2FgF99pLyccM+4DtAlQjKelc2emyEUjIVLrz+nm4OMDEaIry+fBj7zbv1TZETjXdMNNee0=',
        signInOptions: {
          expiresIn: '7d',
        },
      },
    },
    loadLocalConfig: false,
    logExceptions: true,
    mongoose: {
      uri: 'mongodb://overlay_mongo1/ski-basar-preview',
    },
    port: 3000,
    sha256: true,
    staticAssets: {
      path: join(__dirname, '..', 'public'),
      options: { prefix: '' },
    },
    templates: {
      path: join(__dirname, 'assets', 'templates'),
      engine: 'ejs',
    },
  },

  // ===========================================================================
  // Production environment
  // ===========================================================================
  production: {
    automaticObjectIdFiltering: true,
    compression: true,
    cookies: false,
    email: {
      smtp: {
        auth: {
          user: 'cade72@ethereal.email',
          pass: 'jpvTwGYeSajEqDvRKT',
        },
        host: 'mailhog.lenne.tech',
        port: 1025,
        secure: false,
      },
      defaultSender: {
        email: 'cade72@ethereal.email',
        name: 'Nest Server Starter Productive',
      },
    },
    env: 'production',
    execAfterInit: 'npm run docs:bootstrap',
    filter: {
      maxLimit: null,
    },
    graphQl: {
      driver: {
        debug: false,
        introspection: true,
        playground: false,
      },
      maxComplexity: 20,
    },
    ignoreSelectionsForPopulate: true,
    jwt: {
      // crypto.randomBytes(512).toString('base64') (see https://nodejs.org/api/crypto.html#crypto)
      // tslint:disable-next-line:max-line-length
      secret: 'Gfc6T6+mUMjsBL8USMdFznUT38fCnPYvufUvbGWItcfehMOruk3QswwIQz9lKt6+fdY186EpJNmA8LQs4sPW6G2dM1EDPtnAuT2VfisOSnyVKpS4RAoafEvfGEuNXXdtMr+4/2JmAW0tO7l/LG8eVPa7WTsoAqkYA2pvajZQ3TqlXctJZqsVDMbW1lR/tVIGLFKM7Lcdq3/wwY6wwGDuqqjq9dcLbTq9Ejih7cQZqLYbpZLKbhiQrYGxVb5e5Qvbl9x8TvgDvVYr5BC3dOZtXEgqJ3RfYv42fxetm0J0GqMj+jy7WLXy8wjaM3XkTqZIKquJ66Cz3bvVsCuA72EkLVYYBednKCJn5KIgpbuYx3C+oFHiXS3M1MDSiDtZp2kzi2Ak2oqJ46nHGBZ4FNv6Sf9AnTQ8J751+IDPZDhAdWdEdDjAtmDXG8/17Zjtp+hfZI7PEtsHcFFRlsuVhBJpv7PPUaaEMxBuLfqBFTQLhRNiRJHu06Apdgu3cUv2IFVApdIozFu/bmhTp5XgA29J7UWW+/nC2sT05tcUpoQF56caDBxvsTsBtxi6o/cyJXBNhDhJLR3qJiD2XcyTZLJ+zsE+B98X/hWBf8n46CPzF1xbpF2QcUQ+blO8RysQFEIag7Gl/tmIFlUErNDvFEHnIQjGOi93EeXQ00M5rAZByBk=',
      signInOptions: {
        expiresIn: '15m',
      },
      refresh: {
        renewal: true,
        // crypto.randomBytes(512).toString('base64') (see https://nodejs.org/api/crypto.html#crypto)
        // tslint:disable-next-line:max-line-length
        secret: 'zJF+d4/Hm62AjgPWtzhrjCR+Myin0X9F/cKdWGxIvsF0D06Xq6MalWouXllwNWqeSbliXePi+tarR4AmGVWXLIIHODlidMqRR3WY+/jZo02FPrHwminw6DOz5/HQHLJj6uGpimrrH4xsE9XsO2ShxWboITThM+BWxm0K2hjJ+8jKEOvPIeXq/Zx2Y8AGLgomxEaUDABht8D7VP4MG+EW9jsNC1kqYF/AYQ15XYxJKlsV527GJTLRttWhkmPl9ygYNiKR1+j08qBjRVxeVnAf0bWjDmiaH7vExIzAtQe4/8OLd4Yv1FETQ7ms0eYIoPCL6pFoMnpL3AQWY7wvkjYs1DSXq8mIUi5VHWLjuOZeZ4gK2uBmjqWt4SwUMuWbu+M+fIWEXGTylD3HyI/2e8d3n5vqCmX2mORrjZWJgrJzuK6g0pH3jpi9yCJTWFfYWp8R1okJPmDntcxuhKWROyYFFabNTvQ4mDocutQggNJnal+7ctOC9l8zr13cu55afXe7tI6WIPEJGuaepQl0cveqhE623uQBukxP9BQ8blNQRMjLFkjLSMEVINuK/AAvMSSf1p6e46xziQy7u4ot0OUOXypTe2+km1Nbdto5SbOCZ0qv3CvtQg1KvGAfyHYvfKSaOZRZnwdOvlQIFtiaFr4DQ31+H6Lgyiq7XBCppizzAUI=',
        signInOptions: {
          expiresIn: '7d',
        },
      },
    },
    loadLocalConfig: false,
    logExceptions: true,
    mongoose: {
      uri: 'mongodb://overlay_mongo1/ski-basar-prod',
    },
    port: 3000,
    sha256: true,
    staticAssets: {
      path: join(__dirname, '..', 'public'),
      options: { prefix: '' },
    },
    templates: {
      path: join(__dirname, 'assets', 'templates'),
      engine: 'ejs',
    },
  },
};

/**
 * Environment specific config
 *
 * default: local
 */
const env = process.env['NODE' + '_ENV'] || 'local';
const envConfig = config[env] || config.local;
console.info('Configured for: ' + envConfig.env + (env !== envConfig.env ? ' (requested: ' + env + ')' : ''));

// Merge with localConfig (e.g. config.json)
if (envConfig.loadLocalConfig) {
  let localConfig;
  if (typeof envConfig.loadLocalConfig === 'string') {
    localConfig = require(envConfig.loadLocalConfig);
    merge(envConfig, localConfig);
  } else {
    try {
      // get config from src directory
      localConfig = require(__dirname + '/config.json');
      merge(envConfig, localConfig);
    } catch {
      try {
        // if not found try to find in project directory
        localConfig = require(__dirname + '/../config.json');
        merge(envConfig, localConfig);
      } catch (e) {
        // No config.json found => nothing to do
      }
    }
  }
}

/**
 * Export envConfig as default
 */
export default envConfig;
