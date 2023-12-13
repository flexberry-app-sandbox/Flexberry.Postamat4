import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPostamat4ЛогистикаLForm from './forms/i-i-s-postamat4-логистика-l';
import IISPostamat4ПользовательLForm from './forms/i-i-s-postamat4-пользователь-l';
import IISPostamat4ПостаматLForm from './forms/i-i-s-postamat4-постамат-l';
import IISPostamat4СлужбаДоставкиLForm from './forms/i-i-s-postamat4-служба-доставки-l';
import IISPostamat4ТранзакцияLForm from './forms/i-i-s-postamat4-транзакция-l';
import IISPostamat4ХранениеLForm from './forms/i-i-s-postamat4-хранение-l';
import IISPostamat4ЛогистикаEForm from './forms/i-i-s-postamat4-логистика-e';
import IISPostamat4ПользовательEForm from './forms/i-i-s-postamat4-пользователь-e';
import IISPostamat4ПостаматEForm from './forms/i-i-s-postamat4-постамат-e';
import IISPostamat4СлужбаДоставкиEForm from './forms/i-i-s-postamat4-служба-доставки-e';
import IISPostamat4ТранзакцияEForm from './forms/i-i-s-postamat4-транзакция-e';
import IISPostamat4ХранениеEForm from './forms/i-i-s-postamat4-хранение-e';
import IISPostamat4ЛогистикаModel from './models/i-i-s-postamat4-логистика';
import IISPostamat4ПользовательModel from './models/i-i-s-postamat4-пользователь';
import IISPostamat4ПостаматModel from './models/i-i-s-postamat4-постамат';
import IISPostamat4ПосылкаModel from './models/i-i-s-postamat4-посылка';
import IISPostamat4СлужбаДоставкиModel from './models/i-i-s-postamat4-служба-доставки';
import IISPostamat4ТранзакцияModel from './models/i-i-s-postamat4-транзакция';
import IISPostamat4ХранениеModel from './models/i-i-s-postamat4-хранение';
import IISPostamat4ЯчейкаModel from './models/i-i-s-postamat4-ячейка';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-postamat4-логистика': IISPostamat4ЛогистикаModel,
    'i-i-s-postamat4-пользователь': IISPostamat4ПользовательModel,
    'i-i-s-postamat4-постамат': IISPostamat4ПостаматModel,
    'i-i-s-postamat4-посылка': IISPostamat4ПосылкаModel,
    'i-i-s-postamat4-служба-доставки': IISPostamat4СлужбаДоставкиModel,
    'i-i-s-postamat4-транзакция': IISPostamat4ТранзакцияModel,
    'i-i-s-postamat4-хранение': IISPostamat4ХранениеModel,
    'i-i-s-postamat4-ячейка': IISPostamat4ЯчейкаModel
  },

  'application-name': 'Postamat4',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Postamat4',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Postamat4',
          title: 'Postamat4'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        постамат: {
          caption: 'Постамат',
          title: 'Постамат',
          'i-i-s-postamat4-хранение-l': {
            caption: 'Хранение',
            title: ''
          },
          'i-i-s-postamat4-постамат-l': {
            caption: 'Постамат',
            title: ''
          }
        },
        'служба-доставки': {
          caption: 'Служба доставки',
          title: 'Служба доставки',
          'i-i-s-postamat4-служба-доставки-l': {
            caption: 'СлужбаДоставки',
            title: 'Служба доставки'
          }
        },
        пользователь: {
          caption: 'Пользователь',
          title: 'Пользователь',
          'i-i-s-postamat4-пользователь-l': {
            caption: 'Пользователь',
            title: 'Пользователь'
          },
          транзакция: {
            caption: 'Транзакция',
            title: 'Транзакция',
            'i-i-s-postamat4-транзакция-l': {
              caption: 'Транзакция',
              title: 'Транзакция'
            }
          }
        },
        логистика: {
          caption: 'Логистика',
          title: 'Логистика',
          'i-i-s-postamat4-логистика-l': {
            caption: 'Логистика',
            title: 'Логистика'
          }
        },
        postamat4: {
          caption: 'Postamat4',
          title: 'Postamat4',
          'i-i-s-postamat4-пользователь-l': {
            caption: 'Пользователь',
            title: ''
          },
          'i-i-s-postamat4-хранение-l': {
            caption: 'Хранение',
            title: ''
          },
          'i-i-s-postamat4-служба-доставки-l': {
            caption: 'Служба доставки',
            title: ''
          },
          'i-i-s-postamat4-постамат-l': {
            caption: 'Постамат',
            title: ''
          },
          'i-i-s-postamat4-логистика-l': {
            caption: 'Логистика',
            title: ''
          },
          'i-i-s-postamat4-транзакция-l': {
            caption: 'Транзакция',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-postamat4-логистика-l': IISPostamat4ЛогистикаLForm,
    'i-i-s-postamat4-пользователь-l': IISPostamat4ПользовательLForm,
    'i-i-s-postamat4-постамат-l': IISPostamat4ПостаматLForm,
    'i-i-s-postamat4-служба-доставки-l': IISPostamat4СлужбаДоставкиLForm,
    'i-i-s-postamat4-транзакция-l': IISPostamat4ТранзакцияLForm,
    'i-i-s-postamat4-хранение-l': IISPostamat4ХранениеLForm,
    'i-i-s-postamat4-логистика-e': IISPostamat4ЛогистикаEForm,
    'i-i-s-postamat4-пользователь-e': IISPostamat4ПользовательEForm,
    'i-i-s-postamat4-постамат-e': IISPostamat4ПостаматEForm,
    'i-i-s-postamat4-служба-доставки-e': IISPostamat4СлужбаДоставкиEForm,
    'i-i-s-postamat4-транзакция-e': IISPostamat4ТранзакцияEForm,
    'i-i-s-postamat4-хранение-e': IISPostamat4ХранениеEForm
  },

});

export default translations;
