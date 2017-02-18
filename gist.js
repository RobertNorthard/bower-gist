/*
 *  author: Robert Northard
 *  version: 1.1.0
 */
'use strict'

var gist = (function($) {

    var client = {};

    client.create = function(name, description, data, success, error) {

        var payload = {
            description: description,
            files: { }
        };

        payload.files[name] = {
        	content: data
        };

        $.ajax({
                url: 'https://api.github.com/gists',
                type: 'POST',
                dataType: 'json',
                data: JSON.stringify(payload)
            })
            .success(function(result) {
                success(result)
            })
            .error(function(result) {
                error(result)
            })
    }

    client.getGistUrl = function(result) {
        return 'https://gist.github.com/anonymous/' + result.id + '/raw';
    }

    return client;

})(jQuery);