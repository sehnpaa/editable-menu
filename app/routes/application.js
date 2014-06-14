export default Ember.Route.extend({
    model: function () {
        return data;
    }
});

var data = {
    items: [{
        id: 0,
        title: "title0",
        subitems: [{
            id: 0,
            title: "sub1",
        }, {
            id: 1,
            title: "sub2"
        }]
    }, {
        id: 1,
        title: "title1"
    }]
};
