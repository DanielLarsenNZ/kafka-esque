"use strict";

var kafka = require("../kafka-esque");
var consumer;

describe("Kafka-esque-client", function(){
  
  describe("when on() is called", function(){
    
    beforeEach(function(){
      consumer = new kafka.Consumer([{topic:"abc"}]);
    });

    it("should throw if the event name is not message", function(){
      
      expect(function(){
        consumer.on("connect", function(){});
      }).toThrowError("on connect is not supported.");
    });

    it("should add topic abc to consumers", function(){
      consumer.on("message", function(){});

      expect(kafka.getConsumers()[0].topic === 'abc').toBe(true);
    });

  });
});