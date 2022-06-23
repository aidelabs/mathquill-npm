import { MathQuill } from './mathquill.js'

var MQ = MathQuill.getInterface(2);

var answerSpan = document.getElementById('answer');
var answerMathField = MQ.MathField(answerSpan, {
  handlers: {
    edit: function () {
      var enteredMath = answerMathField.latex();
      console.log(enteredMath);
    }
  }
});