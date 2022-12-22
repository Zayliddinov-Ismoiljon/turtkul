import img from "assets/images/eventImgs/event-card-img.png";
import city1 from "assets/images/cityImgs/city1.jpg";
import city2 from "assets/images/cityImgs/city2.jpg";
import logo from "assets/images/resoursesImgs/logo.png";
import city3 from '../../assets/images/cityImgs/uzbekistan-hotel.jpg'
import city4 from '../../assets/images/cityImgs/country-flag.jpg';
import sama from '../../assets/images/resoursesImgs/sama.jpg'
import lexuz from '../../assets/images/resoursesImgs/lexuz.jpg'
import mitc from '../../assets/images/resoursesImgs/mitc.jpg'
import uzafi from '../../assets/images/resoursesImgs/uzafi.jpg'
import cyber from '../../assets/images/resoursesImgs/cyber.jpg'
import soliq from '../../assets/images/resoursesImgs/soliq.jpg'
import portal from '../../assets/images/resoursesImgs/portal.jpg'

export const newsData = {
  uz: {
    title: "So`nggi yangiliklar",
  },
  ru: {
    title: "Последние новости",
  },
};

export const eventsData = {
  uz: {
    title: "Voqealar",
    items: [
      {
        img: img,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      },
      {
        img: img,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      },
      {
        img: img,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      },
      {
        img: img,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      },
      {
        img: img,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      },
      {
        img: img,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      },
      {
        img: img,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      },
      {
        img: img,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      },
    ],
  },
  ru: {
    title: "События",
    items: [
      {
        img: img,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      },
      {
        img: img,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      },
      {
        img: img,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      },
      {
        img: img,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      },
      {
        img: img,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      },
      {
        img: img,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      },
      {
        img: img,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      },
      {
        img: img,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      },
    ],
  },
};

export const cityPlanData = {
  uz: {
    title: "Shahar ishlari rejasi",
    data: [
      {
        time: "13 jul",
        info: "lorem ipsum dolar amet lorem ipsum dolar amet lorem ipsum dolar amet lorem ipsum dolar ametlorem ipsum dolar ametlorem ipsum dolar amet lorem ipsum dolar ametlorem ipsum dolar ametlorem ipsum dolar amet",
      },
      { time: "19 jul", info: "lorem ipsum dolar amet" },
      { time: "14 jul", info: "lorem ipsum dolar amet" },
      { time: "15 jul", info: "lorem ipsum dolar amet" },
      { time: "16 jul", info: "lorem ipsum dolar amet" },
    ],
  },
  ru: {
    title: "График городских работ",
    data: [
      {
        time: "13 jul",
        info: "lorem ipsum dolar amet lorem ipsum dolar amet lorem ipsum dolar amet lorem ipsum dolar ametlorem ipsum dolar ametlorem ipsum dolar amet lorem ipsum dolar ametlorem ipsum dolar ametlorem ipsum dolar amet",
      },
      { time: "19 jul", info: "lorem ipsum dolar amet" },
      { time: "14 jul", info: "lorem ipsum dolar amet" },
      { time: "15 jul", info: "lorem ipsum dolar amet" },
      { time: "16 jul", info: "lorem ipsum dolar amet" },
    ],
  },
};

export const servicesData = {
  uz: {
    title: "Xizmatlar",
    data: [
      {title: "Fuqaro murojaatlari bilan ishlash (Virtual qabulxona)", type: "citizens-appeal"},
      {title: "Shahar transporti bo`yicha ma`lumot", type: "urban-transport"},
      {title: "Ko‘p beriladigan savollar", type: "frequently-asked-questions"},
      // {title: "Fuqarolardan taklif va mulohazalarini olish", type: ""},
      // {title: "Xududlarni rivojlantirish", type: ""},
    ],
  },
  ru: {
    title: "Услуги",
    data: [
      "Рассмотрение обращений граждан (Виртуальная приёмная)",
      "Информация о наземном транспорте",
      "Часто задаваемые вопросы ",
      "Приём предложений и замечаний граждан",
      "Программа развития территорий",
    ],
  },
};

export const commentsData = {
  uz: {
    title: "Sharhlar",
    data: [
      {
        name: "Olim Sobirov",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi rerum hic eos mollitia natus officia sunt veritatis provident ab consequatur dicta, necessitatibus pariatur sint tempora, optio a maiores delectus maxime assumenda aliquam ex, cumque beatae cum! Pariatur, eveniet consequuntur cum, quaerat expedita saepe quasi in harum delectus, id dignissimos quidem.",
        date: "20.20.2022",
      },
      {
        name: "Olim Sobirov",
        comment:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt vero doloremque excepturi dolore odit unde suscipit, ea ipsam cumque veritatis. Temporibus sit maxime magnam soluta illo, fuga ab quaerat debitis.",
        date: "20.20.2022",
      },
      {
        name: "Olim Sobirov",
        comment:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt vero doloremque excepturi dolore odit unde suscipit, ea ipsam cumque veritatis. Temporibus sit maxime magnam soluta illo, fuga ab quaerat debitis.",
        date: "20.20.2022",
      },
      {
        name: "Olim Sobirov",
        comment:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt vero doloremque excepturi dolore odit unde suscipit, ea ipsam cumque veritatis. Temporibus sit maxime magnam soluta illo, fuga ab quaerat debitis.",
        date: "20.20.2022",
      },
    ],
  },
  ru: {
    title: "Отзывы",
    data: [
      {
        name: "Mirjahon",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi rerum hic eos mollitia natus officia sunt veritatis provident ab consequatur dicta, necessitatibus pariatur sint tempora, optio a maiores delectus maxime assumenda aliquam ex, cumque beatae cum! Pariatur, eveniet consequuntur cum, quaerat expedita saepe quasi in harum delectus, id dignissimos quidem.",
        date: "20.20.2022",
      },
      {
        name: "Temur",
        comment:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt vero doloremque excepturi dolore odit unde suscipit, ea ipsam cumque veritatis. Temporibus sit maxime magnam soluta illo, fuga ab quaerat debitis.",
        date: "20.20.2022",
      },
      {
        name: "Olim Sobirov",
        comment:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt vero doloremque excepturi dolore odit unde suscipit, ea ipsam cumque veritatis. Temporibus sit maxime magnam soluta illo, fuga ab quaerat debitis.",
        date: "20.20.2022",
      },
      {
        name: "Olim Sobirov",
        comment:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt vero doloremque excepturi dolore odit unde suscipit, ea ipsam cumque veritatis. Temporibus sit maxime magnam soluta illo, fuga ab quaerat debitis.",
        date: "20.20.2022",
      },
    ],
  },
};

export const votesData = {
  uz: {
    title: "Ovoz berish",
    votes: {
      yes: "Rozi",
      no: "Qarshi",
    },
    cards: [
      {
        title: "Landshaft san’ati festivali",
        body: "Poytaxtimizda LANDSHAFT OPEN.UZ xalqaro landshaft san’ati festivali bo‘lib o‘tdi. Toshkent shahar hokimligi bu kabi yangi qiziqarli loyihalar ko‘lamini kengaytirish hamda rangbarang festevallarni tashkillashkillashtiradi. ",
        voted: 55,
      },
      {
        title: "Landshaft san’ati festivali",
        body: "Poytaxtimizda LANDSHAFT OPEN.UZ xalqaro landshaft san’ati festivali bo‘lib o‘tdi. Toshkent shahar hokimligi bu kabi yangi qiziqarli loyihalar ko‘lamini kengaytirish hamda rangbarang festevallarni tashkillashkillashtiradi. ",
        voted: 80,
      },
      {
        title: "Landshaft san’ati festivali",
        body: "Poytaxtimizda LANDSHAFT OPEN.UZ xalqaro landshaft san’ati festivali bo‘lib o‘tdi. Toshkent shahar hokimligi bu kabi yangi qiziqarli loyihalar ko‘lamini kengaytirish hamda rangbarang festevallarni tashkillashkillashtiradi. ",
        voted: 30,
      },
    ],
  },
  ru: {
    title: "Голосование",
    votes: {
      yes: "Голосовать",
      no: "Против",
    },
    cards: [
      {
        title: "Landshaft san’ati festivali",
        body: "Poytaxtimizda LANDSHAFT OPEN.UZ xalqaro landshaft san’ati festivali bo‘lib o‘tdi. Toshkent shahar hokimligi bu kabi yangi qiziqarli loyihalar ko‘lamini kengaytirish hamda rangbarang festevallarni tashkillashkillashtiradi. ",
        voted: 55,
      },
      {
        title: "Landshaft san’ati festivali",
        body: "Poytaxtimizda LANDSHAFT OPEN.UZ xalqaro landshaft san’ati festivali bo‘lib o‘tdi. Toshkent shahar hokimligi bu kabi yangi qiziqarli loyihalar ko‘lamini kengaytirish hamda rangbarang festevallarni tashkillashkillashtiradi. ",
        voted: 80,
      },
      {
        title: "Landshaft san’ati festivali",
        body: "Poytaxtimizda LANDSHAFT OPEN.UZ xalqaro landshaft san’ati festivali bo‘lib o‘tdi. Toshkent shahar hokimligi bu kabi yangi qiziqarli loyihalar ko‘lamini kengaytirish hamda rangbarang festevallarni tashkillashkillashtiradi. ",
        voted: 30,
      },
    ],
  },
};

export const cityData = {
  uz: {
    title: "Shahar",
    cards: [
      {
        img: city1,
        title: "Tarixiy obidalar",
        desc: "Davlat delegatsiyasi tarixiy obidalarni mehmonlar bilan sayohatga chiqdi",
      },
      {
        img: city2,
        title: "Xalqaro forumlar saroyi",
        desc: "Toshkent xalqaro forumlari saroyiga xush kelibsiz. Bu erda siz Toshkent shahridagi Xalqaro Forumlar",
      },
      {
        img: city3,
        title: "O'zbekiston Mehmonxonasi",
        desc: "O'zbekiston mehmonhonasida chet eldan kelgan mehmonlarni tan-tanali ravishda kutib oldi",
      },
      {
        img: city4,
        title: "O'zbekiston Respublikasi bayrog'i",
        desc: "18-noyabr kuni tumanimizda davlat bayrog'i tasdiqlangan kunni nisholandi.",
      },
    ],
  },
  ru: {
    title: "Город",
    cards: [
      {
        img: city1,
        title: "Lorem ipsum dolor sit.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        img: city2,
        title: "Lorem ipsum dolor sit.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        img: city1,
        title: "Lorem ipsum dolor sit.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        img: city2,
        title: "Lorem ipsum dolor sit.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
  },
};

export const resoursesData = {
  uz: {
    title: "Foydali resurslar",
    cards: [
      {
        logo: logo,
        name: "O'zbekiston Respublikasi Prezident Virtual qabulxonasi",
        website: "pm.gov.uz",
      },
      {
        logo: sama,
        name: "Davlat aktivlarini boshqarish agentligi",
        website: "davaktiv.uz",
      },
      {
        logo: lexuz,
        name: "O'zbekiston Respublikasi Qonun Hujatlari Milliy Bazasi",
        website: "www.lex.uz",
      },
      {
        logo: mitc,
        name: "O'zbekiston Respublikasi Axborot Texnalogiyalarini rivojlantirish",
        website: "www.mitc.uz",
      },
      {
        logo: uzafi,
        name: "O'zbekiston Respublikasi Investitsiya salohiyati portali",
        website: "www.invest.uz",
      },
      {
        logo: cyber,
        name: "Kiberxavfsizlik markazi",
        website: "www.tace.uz",
      },
      {
        logo: soliq,
        name: "O'zbekiston Respublikasi Soliq Qo'mitasi",
        website: "www.soliq.uz",
      },
      {
        logo: portal,
        name: "O'zbekiston Respublikasi Hukumat Portali",
        website: "www.gov.uz",
      },
    ],
  },
  ru: {
    title: "Полезные ресурсы",
    cards: [
      {
        logo: logo,
        name: "O'zbekiston Respublikasi Prezident Virtual qabulxonasi",
        website: "pm.gov.uz",
      },
      {
        logo: logo,
        name: "O'zbekiston Respublikasi Prezident Virtual qabulxonasi",
        website: "pm.gov.uz",
      },
      {
        logo: logo,
        name: "O'zbekiston Respublikasi Prezident Virtual qabulxonasi",
        website: "pm.gov.uz",
      },
      {
        logo: logo,
        name: "O'zbekiston Respublikasi Prezident Virtual qabulxonasi",
        website: "pm.gov.uz",
      },
      {
        logo: logo,
        name: "O'zbekiston Respublikasi Prezident Virtual qabulxonasi",
        website: "pm.gov.uz",
      },
      {
        logo: logo,
        name: "O'zbekiston Respublikasi Prezident Virtual qabulxonasi",
        website: "pm.gov.uz",
      },
      {
        logo: logo,
        name: "O'zbekiston Respublikasi Prezident Virtual qabulxonasi",
        website: "pm.gov.uz",
      },
      {
        logo: logo,
        name: "O'zbekiston Respublikasi Prezident Virtual qabulxonasi",
        website: "pm.gov.uz",
      },
    ],
  },
};
