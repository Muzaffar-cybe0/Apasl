import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      navBtn1: "Home",
      navBtn2: "Sponsors",
      navBtn3: "About",
      navBtn4: "Speakers",
      navBtn5: "Organizers",
      navBtn6: "Schedules",
      bannerText1: "APASL TASHKENT 2025",
      bannerText2:
        "International Experience of National Programs for the elimination of viral hepatitis",
      bannerText3:
        "Uzbekistan and Azerbaijan Association of Gastroenterology and Hepatology <1>june 4-5, 2025</1>",
      bannerText4: "buy ticket",
      associates1: "Ministry of Health of the Republican Uzbekistan",
      associates2:
        "Research Insitute of Virology of the Republican specialized scientific and practical medical center of the epidemiology, microbiology,infectious and parasitic diseases",
      associates3: "Association of hepatologists of Uzbekistan",
      associates4: "Azerbaijan gastroentrology and hepatology association",
      eventOutcomes1: "why join us",
      eventOutcomes2: "event outcomes",
      meetTheKeyOrganizers1: "Meet The Key Organizers",
      speakers1: "Listen to the",
      speakers2: "Event Speakers",
      ticket1: "pricing plans",
      ticket2: "get your ticket",
      ticket3: "BUY TICKET",
      schedules1: "schedule details",
      schedules2: "schedule",
      footer1: "Facebook",
      footer2: "Instagram",
      footer3: "Twitter",
      footer4: "Email",
      footer5: "Phone",
      footer6: "SEND",
      footer7: "© 2024 Exhibz. All rights reserved",
      footer8: "Your Email",
      welcomeMessage1: "Dear Colleagues and Friends,",
      welcomeMessage2:
        "It is with immense pleasure that I invite you to <1>the APASL 2025 Conference</1>, which will be held in the vibrant and historic city of <2>Tashkent, Uzbekistan</2>, <3>on June 4-5, 2025</3>.",
      welcomeMessage3:
        "This international event offers a unique opportunity for a deep and impactful exchange of scientific knowledge and clinical expertise in hepatology and virology. In recent decades, significant scientific advancements in virology and other fundamental disciplines have been actively integrated into practical healthcare. These efforts have led to unprecedented achievements in population screening for viral hepatitis B and C, hepatocellular carcinoma, as well as the widespread inclusion of patients with these conditions in national programs for antiviral treatment and early diagnosis of complications.",
      welcomeMessage4:
        "It is noteworthy that some countries have taken a leading position in integrating hepatitis control programs into their healthcare systems, while in others, this process is just beginning. We hope that the exchange of international experiences in this field will provide invaluable support to all participants of our event.",
      welcomeMessage5:
        "Tashkent, a city where the ancient Silk Road meets modern innovation, provides a fitting backdrop for this prestigious event. With its rich history, stunning architecture, and warm hospitality, Tashkent offers a perfect blend of cultural enrichment and professional growth. From the iconic Khast-Imam Complex to the bustling Chorsu Bazaar, the city’s cultural treasures promise to captivate our international guests. Uzbekistan’s renowned culinary delights and its seamless blend of tradition and modernity further enhance the allure of this destination. Conveniently connected by a well-developed transport network and direct international flights, Tashkent ensures ease of access for participants from across the globe.",
      welcomeMessage6:
        "We are confident that the APASL 2025 Conference in Tashkent will serve as a crucial milestone in fostering collaboration among leading experts in hepatology and will help define the steps we need to take together to achieve the WHO`s goals for combating viral hepatitis by 2030.",
      welcomeMessage7:
        "Join us in Tashkent to engage with colleagues, share your knowledge, and experience the unique hospitality of Uzbekistan.",
      welcomeMessage8:
        "We eagerly look forward to welcoming you to APASL 2025 and ensuring that your time with us is both scientifically rewarding and culturally enriching.",
      welcomeMessage9: "Warm regards,",
      welcomeMessage10:
        "Acad. Erkin Musabayev <1 /> Chair, Association of Hepatologists of Uzbekistan",
      welcomeMessage11:
        "Dr. Gulnara Agayeva <br /> Chair, Association of Hepatologists and Gastroenterologists of Azerbaijan",
    },
  },
  ru: {
    translation: {
      navBtn1: "Главная",
      navBtn2: "Спонсоры",
      navBtn3: "О нас",
      navBtn4: "Спикеры",
      navBtn5: "Организаторы",
      navBtn6: "Расписание",
      bannerText1: "APASL ТАШКЕНТ 2025",
      bannerText2:
        "Международный опыт национальных программ по ликвидации вирусного гепатита",
      bannerText3:
        "Ассоциация гастроэнтерологии и гепатологии Узбекистана и Азербайджана <1>4-5 июня 2025</1>",
      bannerText4: "Купить билет",
      associates1: "Министерство здравоохранения Республики Узбекистан",
      associates2:
        "Научно-исследовательский институт вирусологии Республиканского специализированного научно-практического медицинского центра эпидемиологии, микробиологии, инфекционных и паразитарных заболеваний",

      associates3: "Ассоциация гепатологов Узбекистана",

      associates4: "Ассоциация гастроэнтерологии и гепатологии Азербайджана",
      eventOutcomes1: "Почему присоединиться к нам",
      eventOutcomes2: "Итоги мероприятия",
      meetTheKeyOrganizers1: "Познакомьтесь с ключевыми организаторами",
      speakers1: "Послушайте",
      speakers2: "Спикеров мероприятия",
      ticket1: "Цены на билеты",
      ticket2: "Получите ваш билет",
      ticket3: "КУПИТЬ БИЛЕТ",
      schedules1: "Детали расписания",
      schedules2: "Расписание",
      footer1: "Фейсбук",
      footer2: "Инстаграм",
      footer3: "Твиттер",
      footer4: "Электронная почта",
      footer5: "Телефон",
      footer6: "ОТПРАВИТЬ",
      footer7: "© 2024 Exhibz. Все права защищены",
      footer8: "Ваш Email",
      welcomeMessage1: "Уважаемые коллеги и друзья,",
      welcomeMessage2:
        "С огромным удовольствием приглашаю вас на <1>Конференцию APASL 2025</1>, которая пройдет в ярком и историческом городе <2>Ташкент, Узбекистан</2>, <3>4-5 июня 2025 года</3>.",
      welcomeMessage3:
        "Это международное событие предоставляет уникальную возможность для глубокого и значимого обмена научными знаниями и клиническим опытом в области гепатологии и вирусологии. В последние десятилетия значительные научные достижения в вирусологии и других фундаментальных дисциплинах активно интегрируются в практическое здравоохранение. Эти усилия привели к беспрецедентным достижениям в массовом скрининге на вирусный гепатит B и C, гепатоцеллюлярную карциному, а также широкому включению пациентов с этими заболеваниями в национальные программы антивирусного лечения и ранней диагностики осложнений.",
      welcomeMessage4:
        "Примечательно, что некоторые страны заняли ведущую позицию в интеграции программ контроля за гепатитом в свои системы здравоохранения, в то время как в других странах этот процесс только начинается. Мы надеемся, что обмен международным опытом в этой области окажет неоценимую поддержку всем участникам нашего события.",
      welcomeMessage5:
        "Ташкент, город, где древний Шелковый путь встречается с современными инновациями, служит отличным фоном для этого престижного события. С богатой историей, впечатляющей архитектурой и теплым гостеприимством Ташкент предлагает идеальное сочетание культурного обогащения и профессионального роста. От знакового комплекса Хаст-Имам до оживленного рынка Чорсу — культурные сокровища города обещают очаровать наших международных гостей. Известные кулинарные деликатесы Узбекистана и безупречное сочетание традиций и современности еще больше усиливают привлекательность этой цели. Благодаря хорошо развитой транспортной сети и прямым международным рейсам Ташкент гарантирует легкость доступа для участников со всего мира.",
      welcomeMessage6:
        "Мы уверены, что Конференция APASL 2025 в Ташкенте станет важным этапом в укреплении сотрудничества среди ведущих экспертов в области гепатологии и поможет определить шаги, которые нам необходимо предпринять вместе для достижения целей ВОЗ по борьбе с вирусным гепатитом к 2030 году.",
      welcomeMessage7:
        "Присоединяйтесь к нам в Ташкенте, чтобы пообщаться с коллегами, поделиться своими знаниями и испытать уникальное гостеприимство Узбекистана.",
      welcomeMessage8:
        "Мы с нетерпением ждем встречи с вами на APASL 2025 и уверены, что ваше время с нами будет как научно полезным, так и культурно обогащающим.",
      welcomeMessage9: "С наилучшими пожеланиями,",
      welcomeMessage10:
        "Акад. Еркин Мусабаев <1 /> Председатель Ассоциации гепатологов Узбекистана",
      welcomeMessage11:
        "Др. Гульнара Агаева <br /> Председатель Ассоциации гепатологов и гастроэнтерологов Азербайджана",
    },
  },
  uz: {
    translation: {
      navBtn1: "Bosh sahifa",
      navBtn2: "Homiylar",
      navBtn3: "Biz haqimizda",
      navBtn4: "Ma'ruzachilar",
      navBtn5: "Tashkilotchilar",
      navBtn6: "Jadval",
      bannerText1: "APASL TOSHKENT 2025",
      bannerText2:
        "Virusli gepatitni yo‘q qilish bo‘yicha milliy dasturlarning xalqaro tajribasi",
      bannerText3:
        "O‘zbekiston va Ozarbayjon gastroenterologiya va gepatologiya assotsiatsiyasi <1>4-5 iyun, 2025</1>",
      bannerText4: "Chipta sotib olish",
      associates1: "O‘zbekiston Respublikasi Sog‘liqni saqlash vazirligi",
      associates2:
        "Epidemiologiya, mikrobiologiya, yuqumli va parazitar kasalliklar bo‘yicha Respublika ixtisoslashtirilgan ilmiy-amaliy tibbiyot markazining Virusologiya ilmiy-tadqiqot instituti",
      associates3: "O‘zbekiston gepatologlar assotsiatsiyasi",
      associates4:
        "Ozarbayjon gastroenterologiya va gepatologiya assotsiatsiyasi",
      eventOutcomes1: "Nega bizga qo‘shilishingiz kerak",
      eventOutcomes2: "Tadbir natijalari",
      meetTheKeyOrganizers1: "Asosiy tashkilotchilar bilan tanishing",
      speakers1: "Tinglang",
      speakers2: "Tadbir ma'ruzachilarini",
      ticket1: "Narxlar rejalari",
      ticket2: "Biletni oling",
      ticket3: "Bilet sotib olish",
      schedules1: "Jadval tafsilotlari",
      schedules2: "Jadval",
      footer1: "Facebook",
      footer2: "Instagram",
      footer3: "Twitter",
      footer4: "Elektron pochta",
      footer5: "Telefon",
      footer6: "YUBORISH",
      footer7: "© 2024 Exhibz. Barcha huquqlar himoyalangan",
      footer8: "Sizning emailingiz",
      welcomeMessage1: "Hurmatli hamkasblar va do‘stlar,",
      welcomeMessage2:
        "Katta mamnuniyat bilan sizni <1>APASL 2025 Konferentsiyasiga</1> taklif qilamiz, u yorqin va tarixiy <2>Toshkent shahrida, O'zbekiston</2>da <3>2025-yil 4-5-iyun</3>da o'tkaziladi.",
      welcomeMessage3:
        "Ushbu xalqaro tadbir gepatologiya va virusologiya sohalarida ilmiy bilim va klinik tajriba almashish uchun noyob imkoniyat yaratadi. So'nggi o'n yilliklarda virusologiya va boshqa asosiy fanlarda sezilarli ilmiy yutuqlar amaliy sog'liqni saqlashga faol tarzda integratsiya qilindi. Ushbu sa'y-harakatlar virusli gepatit B va C, gepatotsellyulyar karsinoma bo'yicha aholining skriningini o'tkazishda, shuningdek, ushbu kasalliklar bilan og'rigan bemorlarni milliy antimikrobiyal davolash va komplikatsiyalarning erta tashxisini qo'llab-quvvatlash dasturlariga keng qo'shish borasida misli ko'rilmagan yutuqlarga olib keldi.",
      welcomeMessage4:
        "Shuni ta'kidlash joizki, ba'zi mamlakatlar gepatitni nazorat qilish dasturlarini o'zlarining sog'liqni saqlash tizimlariga integratsiya qilishda yetakchi o'rinni egallashgan, boshqalarda esa bu jarayon endigina boshlandi. Biz ushbu sohadagi xalqaro tajriba almashinuvi barcha ishtirokchilarga bebaho yordam ko'rsatadi, deb umid qilamiz.",
      welcomeMessage5:
        "Toshkent, qadimiy Ipak yo'li zamonaviy innovatsiyalar bilan kesishgan shahar, ushbu nufuzli tadbir uchun mukammal manzara taqdim etadi. Boy tarixi, ajoyib arxitekturasi va samimiy mehmondo'stligi bilan Toshkent madaniy boyish va professional o'sishning mukammal uyg'unligini taklif etadi. Xast-Imom majmuasidan tortib, jonli Chorsu bozorigacha, shaharning madaniy boyliklari xalqaro mehmonlarimizni o'ziga jalb etadi. O'zbekistonning mashhur oshxonasi va an'ana va zamonaviylikning mukammal uyg'unligi bu manzilning jozibasini yanada kuchaytiradi. Yaxshi rivojlangan transport tarmog'i va to'g'ridan-to'g'ri xalqaro reyslar orqali Toshkent butun dunyodan keladigan ishtirokchilarga qulay kirishni ta'minlaydi.",
      welcomeMessage6:
        "Biz APASL 2025 Konferentsiyasi Toshkentda o'tkazilishi gepatologiya sohasidagi yetakchi mutaxassislar o'rtasida hamkorlikni mustahkamlashda muhim bosqich bo'lib, 2030 yilgacha virusli gepatitga qarshi kurashish bo'yicha VSO maqsadlariga erishish uchun birgalikda bajarishimiz kerak bo'lgan qadamlarga yo'naltiradi, deb ishonamiz.",
      welcomeMessage7:
        "Biz bilan Toshkentda qo'shiling, hamkasblaringiz bilan muloqot qiling, bilimlaringizni baham ko'ring va O'zbekistonning noyob mehmondo'stligini his qiling.",
      welcomeMessage8:
        "Biz APASL 2025da sizni kutib olishni intiqlik bilan kutmoqdamiz va biz bilan o'tkazgan vaqtingiz ilmiy foydali hamda madaniy jihatdan boyituvchi bo'lishiga ishonch hosil qilamiz.",
      welcomeMessage9: "Samimiy salomlar bilan",
      welcomeMessage10:
        "Akad. Erkin Musabayev <1 /> O'zbekiston Gepatologlar Assotsiatsiyasi raisi",
      welcomeMessage11:
        "Dr. Gulnara Agayeva <br /> Ozarbayjon Gepatologlar va Gastroenterologlar Assotsiatsiyasi raisi",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
