export type Lang = 'tr' | 'en'

export const translations = {
  tr: {
    nav: {
      tutoring: 'Özel Ders',
      abroad: 'Yurt Dışında Eğitim',
      turkey: "Türkiye'de Eğitim",
      about: 'Hakkımızda',
      cta: 'Ücretsiz Görüşme',
    },
    hero: {
      titleBefore: 'Geleceğine bir dünya ',
      titleAccent: 'olasılık.',
      titleAfter: '',
      subtitle:
        '2012’den beri İstanbul Etiler’de; sınav hazırlığından uluslararası eğitime yanınızdayız.',
      primaryCta: 'Yolunu birlikte çizelim',
      secondaryCta: 'Hizmetleri keşfet',
    },
    services: {
      title: 'Sizin hedefiniz. Size özel bir yol.',
      explore: 'Detayları keşfet',
      items: [
        {
          id: 'tutoring',
          title: 'Sınavlara Hazırlık & Özel Ders',
          desc: 'YKS, LGS, KPSS, ALES, YDS ve tüm sınavlar için birebir özel ders.',
          tags: ['YKS', 'LGS', 'KPSS', 'ALES', 'YDS'],
        },
        {
          id: 'abroad',
          title: 'Yurt Dışında Eğitim',
          desc: 'Yurt dışında okumak isteyen öğrenciler için üniversite seçimi ve başvuru danışmanlığı.',
          tags: [],
        },
        {
          id: 'turkey',
          title: "Türkiye'de Eğitim",
          desc: "Türkiye'de eğitim almak isteyen uluslararası öğrenciler için rehberlik ve başvuru desteği.",
          tags: [],
        },
      ],
    },
    approach: {
      title: 'Her öğrencinin hikâyesi farklı.',
      subtitle:
        'Etiler’deki ofisimizde hedeflerinizi dinliyor, size uygun net bir yol haritası çıkarıyoruz.',
      points: [
        'Hedefinize uygun yönlendirme',
        'Adım adım başvuru desteği',
        'Açık ve anlaşılır süreç',
      ],
    },
    process: {
      title: 'Birlikte, adım adım.',
      steps: [
        {
          num: '01',
          title: 'Tanışalım',
          desc: 'Hedeflerinizi ve mevcut durumunuzu birlikte değerlendiriyoruz.',
        },
        {
          num: '02',
          title: 'Yol haritanızı çizelim',
          desc: 'Size özel, net ve uygulanabilir bir plan oluşturuyoruz.',
        },
        {
          num: '03',
          title: 'Birlikte ilerleyelim',
          desc: 'Süreç boyunca yanınızda olup adım adım destek oluyoruz.',
        },
      ],
    },
    cta: {
      title: 'Büyük hedefler, bir görüşmeyle başlar.',
      button: 'Ücretsiz ön görüşme planla',
    },
    contact: {
      hint: 'Formu doldurun, WhatsApp üzerinden size ulaşalım.',
      name: 'Ad Soyad',
      phone: 'Telefon',
      email: 'E-posta',
      service: 'İlgilendiğiniz hizmet',
      serviceOther: 'Diğer',
      message: 'Mesajınız (isteğe bağlı)',
      success:
        'Teşekkürler! WhatsApp açıldı — mesajı gönderin, en kısa sürede dönüş yapalım.',
      locationTitle: 'Ofisimiz',
      locationHint: 'İstanbul Etiler — randevu ile görüşebilirsiniz.',
      maps: 'Haritada gör',
      foundedLabel: 'Kuruluş',
    },
    pages: {
      tutoring: {
        title: 'Sınavlara Hazırlık & Özel Ders',
        subtitle:
          'Türkiye’deki tüm önemli sınavlar için birebir, hedef odaklı özel ders.',
        paragraphs: [
          'Osha’da özel ders süreci ezber programlarla değil, öğrencinin seviyesi ve hedefiyle başlar. İlk görüşmede güçlü ve zayıf yönleri birlikte netleştirir, gerçekçi bir çalışma takvimi oluştururuz.',
          'YKS, LGS, KPSS, ALES, YDS ve benzeri sınavlarda konu tekrarı, soru çözümü ve deneme analizi bir arada ilerler. Düzenli geri bildirimle tempo kaybolmaz; eksikler erken yakalanır.',
          'Dersler birebir olduğu için tempo size aittir. Yoğun dönemlerde sık ders, sakin dönemlerde odaklanmış tekrar — programı hayatınıza göre ayarlarız. İsterseniz yüz yüze (Etiler) ya da online devam edebilirsiniz.',
        ],
        sectionTitle: 'Bu süreçte neler var?',
        points: [
          'Seviye tespiti ve kişiye özel ders planı',
          'Sınav formatına uygun konu + soru bankası çalışması',
          'Deneme takibi ve hataların analizi',
          'Motivasyon ve düzenli geri bildirim',
          'Esnek saatler — yüz yüze veya online',
        ],
      },
      abroad: {
        title: 'Yurt Dışında Eğitim',
        subtitle:
          'Yurt dışında okumak isteyen öğrenciler için uçtan uca danışmanlık.',
        paragraphs: [
          'Yurt dışında eğitim heyecan verici olduğu kadar da karmaşık bir süreçtir. Hangi ülke, hangi üniversite, hangi dil şartı, ne zaman başvuru — doğru sırayla ilerlemezseniz hem zaman hem motivasyon kaybedilir.',
          'Osha olarak 2012’den beri öğrencilerle bu yolu adım adım yürüyoruz. Hedefinizi, bütçenizi ve akademik geçmişinizi dinleyerek size uygun ülkeler ve programlar öneriyoruz.',
          'Başvuru dosyanızın hazırlanmasından dil sınavı planına, kabul sonrası yapılacaklardan vize sürecine kadar yanınızdayız. Amacımız sizi yalnız bırakmayan, anlaşılır bir yol haritası sunmak.',
        ],
        sectionTitle: 'Danışmanlık kapsamı',
        points: [
          'Ülke, şehir ve üniversite önerisi',
          'Program ve bölüm eşleştirmesi',
          'Başvuru takvimi ve evrak kontrolü',
          'Dil şartları ve sınav yönlendirmesi',
          'Kabul sonrası ve vize sürecinde rehberlik',
        ],
      },
      turkey: {
        title: "Türkiye'de Eğitim",
        subtitle:
          'Türkiye’de okumak isteyen uluslararası öğrenciler için danışmanlık.',
        paragraphs: [
          'Türkiye, uluslararası öğrenciler için giderek daha cazip bir eğitim merkezi. Ancak üniversite seçimi, başvuru takvimleri ve kayıt adımları ilk bakışta karmaşık gelebilir.',
          'Osha, İstanbul Etiler’deki ofisinde yabancı öğrenciler ve aileleriyle birebir çalışır. Hedef bölümünüze göre üniversite seçeneklerini karşılaştırır, başvuru sürecini net adımlara böleriz.',
          'Dil hazırlığı, kabul sonrası kayıt ve şehirde ilk yerleşim gibi konularda da yönlendirme sunarız. Amacımız Türkiye’deki eğitim yolculuğunuzu sade, güvenli ve planlı hale getirmektir.',
        ],
        sectionTitle: 'Size nasıl yardımcı oluruz?',
        points: [
          'Üniversite ve bölüm karşılaştırma',
          'Başvuru ve kabul süreci yönetimi',
          'Gerekli belgeler ve çeviri yönlendirmesi',
          'Kayıt ve oryantasyon desteği',
          'Uluslararası öğrenci odaklı iletişim',
        ],
      },
      about: {
        title: 'Hakkımızda',
        subtitle:
          '2012’den beri İstanbul Etiler’de — her öğrencinin hikâyesine özel yaklaşım.',
        paragraphs: [
          'Osha Eğitim ve Danışmanlık, 2012 yılında İstanbul’da kuruldu. Bugün Etiler, Peker Sokak’taki ofisimizde özel ders, yurt dışında eğitim ve Türkiye’de eğitim danışmanlığını tek çatı altında sunuyoruz.',
          'Kurulduğumuz günden bu yana temel ilkemiz aynı: karmaşık süreçleri sadeleştirmek, abartısız ve dürüst yönlendirmek, öğrenciyi süreç boyunca yalnız bırakmamak.',
          'İster sınava hazırlanan bir lise öğrencisi, ister yurt dışı hayali olan bir aday, ister Türkiye’de okumak isteyen bir uluslararası öğrenci olun — önce sizi dinliyor, sonra net bir plan çıkarıyoruz.',
        ],
        sectionTitle: 'Neden Osha?',
        points: [
          '2012’den beri birikmiş saha deneyimi',
          'Etiler’de yüz yüze görüşme imkânı',
          'Özel ders + yurt dışı + Türkiye’de eğitim tek çatıda',
          'Şeffaf süreç ve anlaşılır iletişim',
          'Hedefe göre kişiselleştirilmiş yol haritası',
        ],
      },
      contact: {
        title: 'Ücretsiz Görüşme',
        subtitle:
          'Etiler ofisimizde veya online — kısa bir form yeterli, yol haritanızı konuşalım.',
      },
    },
    footer: {
      rights: 'Tüm hakları saklıdır.',
      location: 'Peker Sokak, Etiler / İstanbul',
    },
  },
  en: {
    nav: {
      tutoring: 'Private Tutoring',
      abroad: 'Study Abroad',
      turkey: 'Study in Turkey',
      about: 'About Us',
      cta: 'Free Consultation',
    },
    hero: {
      titleBefore: 'A world of ',
      titleAccent: 'possibilities',
      titleAfter: ' for your future.',
      subtitle:
        'Based in Etiler, Istanbul since 2012 — from exam prep to international education.',
      primaryCta: "Let's plan your path",
      secondaryCta: 'Explore services',
    },
    services: {
      title: 'Your goal. A path made for you.',
      explore: 'Discover details',
      items: [
        {
          id: 'tutoring',
          title: 'Exam Prep & Private Tutoring',
          desc: 'One-on-one tutoring for YKS, LGS, KPSS, ALES, YDS and all major exams in Turkey.',
          tags: ['YKS', 'LGS', 'KPSS', 'ALES', 'YDS'],
        },
        {
          id: 'abroad',
          title: 'Study Abroad',
          desc: 'University selection and application guidance for students who want to study abroad.',
          tags: [],
        },
        {
          id: 'turkey',
          title: 'Study in Turkey',
          desc: 'Guidance and application support for international students who want to study in Turkey.',
          tags: [],
        },
      ],
    },
    approach: {
      title: "Every student's story is different.",
      subtitle:
        'At our Etiler office we listen to your goals and build a clear roadmap.',
      points: [
        'Guidance tailored to your goal',
        'Step-by-step application support',
        'A clear and transparent process',
      ],
    },
    process: {
      title: 'Together, step by step.',
      steps: [
        {
          num: '01',
          title: "Let's meet",
          desc: 'We evaluate your goals and current situation together.',
        },
        {
          num: '02',
          title: "Let's draw your roadmap",
          desc: 'We create a clear, personalized, and practical plan.',
        },
        {
          num: '03',
          title: "Let's move forward together",
          desc: 'We stay with you and support you throughout the process.',
        },
      ],
    },
    cta: {
      title: 'Big goals start with one conversation.',
      button: 'Schedule a free consultation',
    },
    contact: {
      hint: 'Fill in the form and we will reach you on WhatsApp.',
      name: 'Full name',
      phone: 'Phone',
      email: 'Email',
      service: 'Service of interest',
      serviceOther: 'Other',
      message: 'Message (optional)',
      success:
        'Thanks! WhatsApp opened — send the message and we will get back to you soon.',
      locationTitle: 'Our office',
      locationHint: 'Etiler, Istanbul — meetings by appointment.',
      maps: 'View on map',
      foundedLabel: 'Founded',
    },
    pages: {
      tutoring: {
        title: 'Exam Prep & Private Tutoring',
        subtitle:
          'One-on-one, goal-focused tutoring for all major exams in Turkey.',
        paragraphs: [
          'At Osha, tutoring does not start with a one-size-fits-all syllabus. We begin with your level and your target, then build a realistic study calendar around your strengths and gaps.',
          'For YKS, LGS, KPSS, ALES, YDS and similar exams we combine topic review, practice questions and mock-exam analysis. Regular feedback keeps the pace steady and catches weak spots early.',
          'Because lessons are one-on-one, the tempo is yours. More sessions in busy periods, focused revision when you need space — and you can continue in person in Etiler or online.',
        ],
        sectionTitle: 'What is included?',
        points: [
          'Level check and a personalized lesson plan',
          'Exam-format topics and practice work',
          'Mock exams and error analysis',
          'Motivation and regular feedback',
          'Flexible hours — in person or online',
        ],
      },
      abroad: {
        title: 'Study Abroad',
        subtitle:
          'End-to-end guidance for students who want to study abroad.',
        paragraphs: [
          'Studying abroad is exciting — and complex. Country, university, language requirements, deadlines: without the right order you lose both time and energy.',
          'Since 2012 we have walked this path with students step by step. We listen to your goals, budget and academic background, then suggest countries and programs that actually fit.',
          'From building your application file and language-test plan to post-acceptance steps and visas, we stay with you. You get a clear roadmap — not a pile of confusing options.',
        ],
        sectionTitle: 'What we cover',
        points: [
          'Country, city and university suggestions',
          'Program and major matching',
          'Application timeline and document checks',
          'Language requirements and test guidance',
          'Support after acceptance and during visas',
        ],
      },
      turkey: {
        title: 'Study in Turkey',
        subtitle:
          'Consulting for international students who want to study in Turkey.',
        paragraphs: [
          'Turkey is an increasingly popular destination for international students. Still, choosing a university, tracking deadlines and completing enrollment can feel overwhelming at first.',
          'From our office in Etiler, Istanbul, we work one-on-one with students and families. We compare university options for your target major and break the application into clear steps.',
          'We also guide you on language prep, registration after acceptance and settling into the city. Our aim is a simple, safe and well-planned study journey in Turkey.',
        ],
        sectionTitle: 'How we help',
        points: [
          'University and major comparison',
          'Application and admission process support',
          'Document and translation guidance',
          'Registration and orientation support',
          'Communication focused on international students',
        ],
      },
      about: {
        title: 'About Us',
        subtitle:
          'In Etiler, Istanbul since 2012 — a personal approach for every student.',
        paragraphs: [
          'Osha Education & Consulting was founded in Istanbul in 2012. Today, from our office on Peker Street in Etiler, we offer private tutoring, study-abroad guidance and study-in-Turkey consulting under one roof.',
          'Our principle has stayed the same: simplify complex processes, give honest direction, and never leave the student alone mid-way.',
          'Whether you are preparing for an exam, dreaming of studying abroad, or coming to Turkey as an international student — we listen first, then build a clear plan.',
        ],
        sectionTitle: 'Why Osha?',
        points: [
          'Field experience since 2012',
          'In-person meetings in Etiler',
          'Tutoring, study abroad and study in Turkey together',
          'Transparent process and clear communication',
          'A roadmap personalized to your goal',
        ],
      },
      contact: {
        title: 'Free Consultation',
        subtitle:
          'At our Etiler office or online — a short form is enough to start.',
      },
    },
    footer: {
      rights: 'All rights reserved.',
      location: 'Peker Street, Etiler / Istanbul',
    },
  },
} as const

export type Dict = (typeof translations)['tr']
