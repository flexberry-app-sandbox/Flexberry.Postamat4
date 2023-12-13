import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.постамат.caption'),
          title: i18n.t('forms.application.sitemap.постамат.title'),
          children: [{
            link: 'i-i-s-postamat4-хранение-l',
            caption: i18n.t('forms.application.sitemap.постамат.i-i-s-postamat4-хранение-l.caption'),
            title: i18n.t('forms.application.sitemap.постамат.i-i-s-postamat4-хранение-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-postamat4-постамат-l',
            caption: i18n.t('forms.application.sitemap.постамат.i-i-s-postamat4-постамат-l.caption'),
            title: i18n.t('forms.application.sitemap.постамат.i-i-s-postamat4-постамат-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.служба-доставки.caption'),
          title: i18n.t('forms.application.sitemap.служба-доставки.title'),
          children: [{
            link: 'i-i-s-postamat4-служба-доставки-l',
            caption: i18n.t('forms.application.sitemap.служба-доставки.i-i-s-postamat4-служба-доставки-l.caption'),
            title: i18n.t('forms.application.sitemap.служба-доставки.i-i-s-postamat4-служба-доставки-l.title'),
            icon: 'folder open',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.пользователь.caption'),
          title: i18n.t('forms.application.sitemap.пользователь.title'),
          children: [{
            link: 'i-i-s-postamat4-пользователь-l',
            caption: i18n.t('forms.application.sitemap.пользователь.i-i-s-postamat4-пользователь-l.caption'),
            title: i18n.t('forms.application.sitemap.пользователь.i-i-s-postamat4-пользователь-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.пользователь.транзакция.caption'),
            title: i18n.t('forms.application.sitemap.пользователь.транзакция.title'),
            children: [{
              link: 'i-i-s-postamat4-транзакция-l',
              caption: i18n.t('forms.application.sitemap.пользователь.транзакция.i-i-s-postamat4-транзакция-l.caption'),
              title: i18n.t('forms.application.sitemap.пользователь.транзакция.i-i-s-postamat4-транзакция-l.title'),
              icon: 'file',
              children: null
            }]
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.логистика.caption'),
          title: i18n.t('forms.application.sitemap.логистика.title'),
          children: [{
            link: 'i-i-s-postamat4-логистика-l',
            caption: i18n.t('forms.application.sitemap.логистика.i-i-s-postamat4-логистика-l.caption'),
            title: i18n.t('forms.application.sitemap.логистика.i-i-s-postamat4-логистика-l.title'),
            icon: 'folder open',
            children: null
          }]
        }
      ]
    };
  }),
})