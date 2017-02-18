# Github Gist

A JavaScript library for creating anonymous gists.

# Usage

1. First add jQuery to your project's dependencies.

2. Include `gist.min.js` in your project.

`bower install gist --save`

# Example

      var gistName = "HelloWorld"
      var gistDesciption = "An example gist."
      var payload = {
          data: "Hello, World!"
      };

      gist.create(
          gistName,
          gistDesciption,
          JSON.stringify(payload),
          function(success) {
              // handle success
              console.log(gist.getGistUrl(success));
          },
          function(error) {
              // handle error 
              console.log(e);
          });

See [demo](https://github.com/RobertNorthard/bower-gist/blob/master/test.html) for a demo of this code.

# Contribute

Please feel free to contribute. Pull requests are welcome.

