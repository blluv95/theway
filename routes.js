Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound',
    loadingTemplate: 'loading',
});


Router.map(function () {
    this.route('Home', {path: '/', template: 'search'});
    this.route('Đặt Vé', {path: '/datvehot', template: 'book'});
    this.route('Liên Hệ', {path: '/contact', template: 'contact'});
    this.route('Giới Thiệu', {path: '/introduce', template: 'introduce'});
});

Router.route('/datvethanhcong/', {
    Template: 'datvethanhcong',
    name: 'datvethanhcong',
    data: function () {
    }
});

Router.route('/result/', {
    Template: 'result',
    name: 'result',
    data: function () {
    }
});

Router.route('/book/', {
    Template: 'book',
    name: 'book',
    data: function () {
    }
});