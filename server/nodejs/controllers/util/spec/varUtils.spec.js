var expect  = require("chai").expect;

var Config = require("../../../spec/config");
var varUtils = require("../varUtils");


describe.only("VerUtils Helper", function() {

  describe("setDefaultArgs", function () {
    it("Sets default arguments in GET mode when no method is supplied", function (done) {
      var args = {};
      var defaultArgs = {
        privatevalue: "",
        password: "",
        safesearch: "Yes"
      };

      args = varUtils.setDefaultArgs(defaultArgs, args);

      expect(args.privatevalue.value).to.exist;
      expect(args.privatevalue.value).to.equal("");
      expect(args.password.value).to.exist;
      expect(args.password.value).to.equal("");
      expect(args.safesearch.value).to.exist;
      expect(args.safesearch.value).to.equal("Yes");
      done();
    });

    it("Sets default arguments in GET mode when no method is supplied but does not overwrite supplied args", function (done) {
      var args = {
        privatevalue: {
          value: "Hello"
        }
      };
      var defaultArgs = {
        privatevalue: "",
        password: "",
        safesearch: "Yes"
      };

      args = varUtils.setDefaultArgs(defaultArgs, args);

      expect(args.privatevalue.value).to.exist;
      expect(args.privatevalue.value).to.equal("Hello");
      expect(args.password.value).to.exist;
      expect(args.password.value).to.equal("");
      expect(args.safesearch.value).to.exist;
      expect(args.safesearch.value).to.equal("Yes");
      done();
    });

    it("Sets default arguments in POST mode when no method is supplied", function (done) {
      var args = {
        request: {
          value: {}
        }
      };
      var defaultArgs = {
        privatevalue: "",
        password: "",
        safesearch: "Yes"
      };

      args = varUtils.setDefaultArgs(defaultArgs, args, "POST");

      expect(args.request.value.privatevalue).to.exist;
      expect(args.request.value.privatevalue).to.equal("");
      expect(args.request.value.password).to.exist;
      expect(args.request.value.password).to.equal("");
      expect(args.request.value.safesearch).to.exist;
      expect(args.request.value.safesearch).to.equal("Yes");
      done();
    });

    it("Sets default arguments in POST mode when no method is supplied but does not overwrite supplied args", function (done) {
      var args = {
        request: {
          value: {
            privatevalue: "Hello"
          }
        }
      };
      var defaultArgs = {
        privatevalue: "",
        password: "",
        safesearch: "Yes"
      };

      args = varUtils.setDefaultArgs(defaultArgs, args, "POST");

      expect(args.request.value.privatevalue).to.exist;
      expect(args.request.value.privatevalue).to.equal("Hello");
      expect(args.request.value.password).to.exist;
      expect(args.request.value.password).to.equal("");
      expect(args.request.value.safesearch).to.exist;
      expect(args.request.value.safesearch).to.equal("Yes");
      done();
    });
  });
});