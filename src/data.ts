import p1 from './assets/photos/photo_1.jpg';
import p2 from './assets/photos/photo_2.jpg';
import p3 from './assets/photos/photo_3.jpg';
import p4 from './assets/photos/photo_4.jpg';
import p5 from './assets/photos/photo_5.jpg';
import p6 from './assets/photos/photo_6.jpg';
import p7 from './assets/photos/photo_7.jpg';
import p8 from './assets/photos/photo_8.jpg';

export const photos = [p1, p2, p3, p4, p5, p6, p7, p8];

export const contact = {
  name: 'Azur & Sel',
  phone: '+216 72 000 000',
  phoneDisplay: '+216 72 000 000',
  whatsapp: '21672000000',
  address: 'Sidi Bou Saïd, Tunisie',
  rating: '4.7',
  city: 'Sidi Bou Saïd',
  country: 'Tunisie',
};

export type Lang = 'fr' | 'en' | 'ar';

export const i18n: Record<string, any> = {
  nav_about: { fr: 'À propos', en: 'About', ar: 'من نحن' },
  nav_menu: { fr: 'Carte', en: 'Menu', ar: 'القائمة' },
  nav_gallery: { fr: 'Galerie', en: 'Gallery', ar: 'الصور' },
  nav_contact: { fr: 'Contact', en: 'Contact', ar: 'اتصل' },
  eyebrow: { fr: 'Café & Salon de thé', en: 'Café & Tearoom', ar: 'مقهى وصالون شاي' },
  hero_lead: { fr: 'Le bleu, le sel, la pause', en: 'Blue, salt, a pause', ar: 'الأزرق، الملح، استراحة' },
  about: { fr: 'Azur & Sel est un café de bord de mer où le temps se mesure en tasses. Spécialités filtrées, pâtisseries maison et une terrasse face à la baie. L\'endroit idéal pour s\'arrêter.', en: 'Azur & Sel is a seafront café where time is measured in cups. Filter specialties, homemade pastries and a terrace facing the bay. The perfect place to pause.', ar: 'أزور وملح مقهى على شاطئ البحر حيث يُقاس الوقت بالأكواب. مختصات بالتصفية، حلويات منزلية وتراس يطل على الخليج. المكان المثالي للتوقف.' },
  hours: { fr: 'Tous les jours · 7h–20h', en: 'Every day · 7am–8pm', ar: 'كل يوم · 7ص–8م' },
  menu_title: { fr: 'Carte', en: 'Menu', ar: 'القائمة' },
  menu: {
    fr: [
      { cat: 'Cafés', items: [{ n: 'Espresso', p: '4 TND' }, { n: 'Filtre de spécialité', p: '9 TND' }, { n: 'Cappuccino', p: '7 TND' }, { n: 'Thé à la menthe', p: '5 TND' }] },
      { cat: 'Douceurs', items: [{ n: 'Croissant beurre', p: '4 TND' }, { n: 'Gâteau azur', p: '8 TND' }, { n: 'Carré citron', p: '7 TND' }] },
    ],
    en: [
      { cat: 'Coffee', items: [{ n: 'Espresso', p: '4 TND' }, { n: 'Filter special', p: '9 TND' }, { n: 'Cappuccino', p: '7 TND' }, { n: 'Mint tea', p: '5 TND' }] },
      { cat: 'Sweets', items: [{ n: 'Butter croissant', p: '4 TND' }, { n: 'Azur cake', p: '8 TND' }, { n: 'Lemon square', p: '7 TND' }] },
    ],
    ar: [
      { cat: 'قهوة', items: [{ n: 'إسبرسو', p: '4 د.ت' }, { n: 'فلتر مختص', p: '9 د.ت' }, { n: 'كابتشينو', p: '7 د.ت' }, { n: 'شاي بالنعناع', p: '5 د.ت' }] },
      { cat: 'حلويات', items: [{ n: 'كرواسون زبدة', p: '4 د.ت' }, { n: 'كعكة أزور', p: '8 د.ت' }, { n: 'مربع ليمون', p: '7 د.ت' }] },
    ],
  } as Record<Lang, { cat: string; items: { n: string; p: string }[] }[]>,
  gallery_title: { fr: 'Galerie', en: 'Gallery', ar: 'الصور' },
  contact_title: { fr: 'Une pause vous attend', en: 'A pause awaits', ar: 'استراحة تنتظرك' },
  contact_text: { fr: 'Écrivez-nous pour une réservation de groupe ou une question.', en: 'Message us for group booking or any question.', ar: 'راسلنا لحجز جماعي أو لأي سؤال.' },
  whatsapp: { fr: 'Écrivez-nous', en: 'Message us', ar: 'راسلنا' },
  call: { fr: 'Appeler', en: 'Call', ar: 'اتصل' },
  rights: { fr: 'Tous droits réservés', en: 'All rights reserved', ar: 'جميع الحقوق محفوظة' },
};
