/* jshint -W105 */
(function () {
    'use strict';
    var karmaLoaded = false;

    window.__karma__.loaded = function () {
        karmaLoaded = true;
    };

    window.waitFor = function (condition, cb) {
        'use strict';
        var i = setInterval(function () {
            if (condition()) {
                clearInterval(i);
                cb();
            }
        }, 100);
    };

    require(['jquery', 'chai'], function ($, chai) {
        "use strict";
        $('body').append('<div id=main/>');
        window.assert = chai.assert;

        var testsContext = require.context(".", true, /Test$/);
        testsContext.keys().forEach(testsContext);

        if (karmaLoaded) {
            window.__karma__.start();
        } else {
            window.__karma__.loaded = window.__karma__.start;
        }
    });
})();