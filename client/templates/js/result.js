Template.result.helpers({
    'listRS': function () {
        return Result.find({},{sort: {NhaXe: 1,DiemDung: 1 ,TenChuyen:1,NhaXe:1}});
        // return Result.find();
    }
});


Template.result.rendered = function () {
    if (!this._rendered) {
        this._rendered = true;
        console.log('Template onLoad');
        // Meteor.call('removeAllPosts');
    }
}
Template.result.onDestroyed(function () {
    console.log("The 'login' template was just destroyed.");
    Meteor.call('removeAllPosts');
});
Template.result.events({
    'click #button_back':function (event) {
        event.preventDefault();
        Router.go('/');

    },'click #button_order':function (event) {
        event.preventDefault();
        Router.go('/datvehot');
    }
});