import DS from 'ember-data';
const { Model, attr } = DS;

export default class WebsiteModel extends Model {
  @attr domain;
}
