Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {
    name: 'homepage'
});

Router.route('/others', {
    name: 'others'
});