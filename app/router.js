import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EditableMenuENV.locationType
});

Router.map(function() {
    this.resource('index', {path: '/'});
    this.resource('edititem', {path: '/edititem/:item_id'});
});

export default Router;
