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
          caption: i18n.t('forms.application.sitemap.postamat4.caption'),
          title: i18n.t('forms.application.sitemap.postamat4.title'),
          children: [{
            link: 'i-i-s-postamat4-пользователь-l',
            caption: i18n.t('forms.application.sitemap.postamat4.i-i-s-postamat4-пользователь-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat4.i-i-s-postamat4-пользователь-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-postamat4-хранение-l',
            caption: i18n.t('forms.application.sitemap.postamat4.i-i-s-postamat4-хранение-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat4.i-i-s-postamat4-хранение-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-postamat4-служба-доставки-l',
            caption: i18n.t('forms.application.sitemap.postamat4.i-i-s-postamat4-служба-доставки-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat4.i-i-s-postamat4-служба-доставки-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-postamat4-постамат-l',
            caption: i18n.t('forms.application.sitemap.postamat4.i-i-s-postamat4-постамат-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat4.i-i-s-postamat4-постамат-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-postamat4-логистика-l',
            caption: i18n.t('forms.application.sitemap.postamat4.i-i-s-postamat4-логистика-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat4.i-i-s-postamat4-логистика-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-postamat4-транзакция-l',
            caption: i18n.t('forms.application.sitemap.postamat4.i-i-s-postamat4-транзакция-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat4.i-i-s-postamat4-транзакция-l.title'),
            icon: 'address card',
            children: null
          }]
        }
      ]
    };
  }),
})