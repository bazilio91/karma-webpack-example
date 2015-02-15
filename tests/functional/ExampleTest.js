describe('Mixins', function () {
    "use strict";
    var $ = require('jquery');
    it('works', function(){
        require('main');
        assert.equal($('#main').text(), 'Hello world!', 'greeting');
    })
});