export default Ember.Route.extend({
    model: function () {
        return data;
    }
});

var data = {
    items: [{
        id: 0,
        title: "title0"
    }, {
        id: 1,
        title: "title1"
    }]
};
