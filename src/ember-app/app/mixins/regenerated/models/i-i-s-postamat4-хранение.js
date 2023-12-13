import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЗавершения: DS.attr('date'),
  датаНачала: DS.attr('date'),
  номер: DS.attr('number'),
  продление: DS.attr('boolean'),
  посылка: DS.hasMany('i-i-s-postamat4-посылка', { inverse: 'хранение', async: false })
});

export let ValidationRules = {
  датаЗавершения: {
    descriptionKey: 'models.i-i-s-postamat4-хранение.validations.датаЗавершения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаНачала: {
    descriptionKey: 'models.i-i-s-postamat4-хранение.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-postamat4-хранение.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  продление: {
    descriptionKey: 'models.i-i-s-postamat4-хранение.validations.продление.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  посылка: {
    descriptionKey: 'models.i-i-s-postamat4-хранение.validations.посылка.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ХранениеE', 'i-i-s-postamat4-хранение', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаЗавершения: attr('Дата завершения', { index: 2 }),
    продление: attr('Продлен на 3 дня', { index: 3 }),
    посылка: hasMany('i-i-s-postamat4-посылка', 'Посылка', {
      номер: attr('Номер', { index: 0 }),
      статус: attr('Статус', { index: 1 })
    })
  });

  modelClass.defineProjection('ХранениеL', 'i-i-s-postamat4-хранение', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаЗавершения: attr('Дата завершения', { index: 2 }),
    продление: attr('Продлен на 3 дня', { index: 3 })
  });
};
