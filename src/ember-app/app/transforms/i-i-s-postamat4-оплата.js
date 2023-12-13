import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ОплатаEnum from '../enums/i-i-s-postamat4-оплата';

export default FlexberryEnum.extend({
  enum: ОплатаEnum,
  sourceType: 'IIS.Postamat4.Оплата'
});
