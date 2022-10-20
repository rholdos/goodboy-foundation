import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
	debug: true,
	supportedLngs: ['en', 'sk'],
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false
	},
	resources: {
		en: {
			translation: {
				// meta titles
				contribution: 'Contribution',
				contributor: 'Personal information',
				summary: 'Summary',
				// general
				sitename: 'Good Boy Foundation',
				aboutProject: 'About project',
				howTo: 'How it works',
				contact: 'Contact',
				footerColText:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet.',
				required: 'Required',
				notRequired: 'Optional',
				notSelected: 'Not selected',
				notProvided: 'Not provided',
				back: 'Back',
				continue: 'Continue',
				submit: 'Submit',
				startAgain: 'Start again',
				// form - contribution step (1st)
				contributionTitle: 'Choose how you want to help',
				typeShelterLabel: 'I want to make a financial contribution to a specific shelter',
				typeOrganizationLabel: 'I want to contribute financially to the entire foundation',
				typeError: 'Please choose a contribution type',
				shelterSelectLabel: 'The shelter I care about',
				shelterLabel: 'Select a shelter from the list',
				shelterError: 'Please select a shelter from the list',
				amountLabel: 'The amount I want to donate',
				fixedAmountError: 'Choose the contribution amount',
				customAmountError: 'Please choose the contribution amount',
				// form - contributor step (2nd)
				contributorTitle: 'We need some information from you',
				contributorSubtite: 'About you',
				firstNameLabel: 'First name',
				firstNamePlaceholder: 'First name',
				firstNameError: 'First name is required',
				lastNameLabel: 'Last name',
				lastNamePlaceholder: 'Last name',
				lastNameError: 'Last name is required',
				emailLabel: 'E-mail address',
				emailPlaceholder: 'E-mail address',
				emailError: 'Enter your e-mail in the correct format',
				phonePrefixError: 'Select a call prefix from the list',
				phoneNumberLabel: 'Phone number',
				skNumberOption: 'Slovak Republic',
				czNumberOption: 'Czech Republic',
				phoneNumberError: 'The number must contain 9 digits without spaces (Optional field)',
				// form - summary step (3rd)
				summaryTitleNotSubmitted: 'Check the information below',
				summaryTitleSubmitted: 'Thank you',
				summaryType: 'How you want to help',
				summaryTypeShelter: 'Make a financial contribution to a specific shelter',
				summaryTypeOrganization: 'Contribute financially to the entire foundation',
				summaryShelter: 'I care the most about this shelter',
				summaryAmount: 'The amount I want to donate',
				summaryName: 'Name',
				summaryEmail: 'E-mail address',
				summaryPhone: 'Phone number',
				consentLabel: 'I hereby consent to the processing of the personal data',
				consentError: 'Before submitting, you must consent to the processing of the personal data'
			}
		},
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
				footerColText:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet.',
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
				shelterSelectLabel: 'Útulok, ktorému chcem pomôcť',
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
				summaryType: 'Akou formou chcem prispieť',
				summaryTypeShelter: 'Chcem finančne prispieť konkrétnemu útulku',
				summaryTypeOrganization: 'Chcem finančne prispieť celej nadácii',
				summaryShelter: 'Najviac mi záleží na útulku',
				summaryAmount: 'Suma, ktorou chcem prispieť',
				summaryName: 'Meno a priezvisko',
				summaryEmail: 'E-mailová adresa',
				summaryPhone: 'Telefónne číslo',
				consentLabel: 'Súhlasím so spracovaním mojich osobných údajov',
				consentError: 'Pre odoslanie príspevku musíte súhlasíť so spracovaním osobných údajov'
			}
		}
	}
})

export default i18n
