import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'sk',
  interpolation: {
    escapeValue: false
  },
  resources: {
    sk: {
      translation: {
        // meta titles
        contribution: 'Príspevok',
        contributor: 'Osobné údaje',
        summary: 'Zhrnutie',
        // general
        sitename: 'Nadácia Good Boy',
        aboutProject: 'O projekte',
        howTo: 'Ako na to',
        contact: 'Kontakt',
        footerColText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet.',
        required: 'Povinné',
        notRequired: 'Nepovinné',
        notSelected: 'Nezvolené',
        notProvided: 'Nezadané',
        back: 'Späť',
        continue: 'Pokračovať',
        submit: 'Odoslať formulár',
        startAgain: 'Začať znova',
        // form - contribution step (1st)
        contributionTitle: 'Vyberte si možnosť, ako chcete pomôcť',
        typeShelterLabel: 'Chcem finančne prispieť konkrétnemu útulku',
        typeOrganizationLabel: 'Chcem finančne prispieť celej nadácii',
        typeError: 'Zvoľte typ príspevku',
        shelterLabel: 'Vyberte útulok zo zoznamu',
        shelterError: 'Vyberte útulok zo zoznamu',
        amountLabel: 'Suma, ktorou chcem prispieť',
        fixedAmountError: 'Zvoľte sumu príspevku',
        customAmountError: 'Zadajte sumu príspevku',
        // form - contributor step (2nd)
        contributorTitle: 'Potrebujeme od Vás zopár informácií',
        contributorSubtite: 'O vás',
        firstNameLabel: 'Meno',
        firstNamePlaceholder: 'Zadajte Vaše meno',
        firstNameError: 'Zadajte Vaše meno',
        lastNameLabel: 'Priezvisko',
        lastNamePlaceholder: 'Zadajte Vaše priezvisko',
        lastNameError: 'Zadajte Vaše priezvisko',
        emailLabel: 'E-mailová adresa',
        emailPlaceholder: 'Zadajte Váš e-mail',
        emailError: 'Zadajte Váš e-mail v správnom formáte',
        phonePrefixError: 'Vyberte predvoľbu zo zoznamu',
        phoneNumberLabel: 'Telefónne číslo',
        skNumberOption: 'Slovenská Republika',
        czNumberOption: 'Česká Republika',
        phoneNumberError: 'Číslo musí obsahovať 9 číslic bez medzier (Nepovinné pole)',
        // form - summary step (3rd)
        summaryTitleNotSubmitted: 'Skontrolujte si zadané údaje',
        summaryTitleSubmitted: 'Ďakujeme',
        summaryType: 'Akou formou chcem pomôcť',
        summaryTypeShelter: 'Chcem finančne prispieť konkrétnemu útulku',
        summaryTypeOrganization: 'Chcem finančne prispieť celej nadácii',
        summaryShelter: 'Najviac mi záleží na útulku',
        summaryAmount: 'Suma ktorou chcem pomôcť',
        summaryName: 'Meno a priezvisko',
        summaryEmail: 'E-mailová adresa',
        summaryPhone: 'Telefónne číslo',
        consentLabel: 'Súhlasím so spracovaním mojich osobných údajov',
        consentError: 'Pre odoslanie príspevku musíte súhlasíť so spracovaním osobných údajov'
      }
    }
  }
});

export default i18n;
