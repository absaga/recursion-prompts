/* jshint esversion: 6 */

(function() {
  'use strict';

  describe('Exercises in Recursion', function() {

    describe('1. Factorial', function() {
      var originalFactorial;

      before(function() {
        originalFactorial = factorial;
        factorial = sinon.spy(factorial);
      });

      afterEach(function() {
        factorial.reset();
      });

      after(function() {
        factorial = originalFactorial;
      });

      it('should return a number', function() {
        expect(factorial(5)).to.be.a('number');
      });

      it('should return factorial for non-negative integers', function() {
        expect(factorial(0)).to.equal(1);
        expect(factorial(1)).to.equal(1);
        expect(factorial(4)).to.equal(24);
        expect(factorial(5)).to.equal(120);
      });

      it('should return null for negative integers', function() {
        expect(factorial(-5)).to.equal(null);
      });

      it('should use recursion by calling self', function () {
        factorial(4);
        expect(factorial.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        factorial(4);
        factorial.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('2. Sum of Integers', function() {
      var originalSum;

      before(function() {
        originalSum = sum;
        sum = sinon.spy(sum);
      });

      afterEach(function() {
        sum.reset();
      });

      after(function() {
        sum = originalSum;
      });

      it('should return a number', function() {
        expect(sum([1,2,3,4,5,6])).to.be.a('number');
      });

      it('should return the sum of an array of non-negative integers', function() {
        expect(sum([1,2,3,4,5,6])).to.equal(21);
        expect(sum([12,34,56,78])).to.equal(180);
        expect(sum([3,0,34,7,18])).to.equal(62);
      });

      it('should return the sum of an array of negative integers', function() {
        expect(sum([-1,-2,-3,-4,-5,-6])).to.equal(-21);
        expect(sum([-12,-34,-56,-78])).to.equal(-180);
        expect(sum([-3,-0,-34,-7,-18])).to.equal(-62);
      });

      it('should return the sum of an array of mixed non-negative and negative integers', function() {
        expect(sum([1,-2,3,-4,5,-6])).to.equal(-3);
        expect(sum([-12,34,-56,78])).to.equal(44);
        expect(sum([3,0,-34,-7,18])).to.equal(-20);
      });

      it('should return 0 for empty array', function() {
        expect(sum([])).to.equal(0);
      });

      it('should accept an array with a single integer', function() {
        expect(sum([4])).to.equal(4);
        expect(sum([0])).to.equal(0);
        expect(sum([-37])).to.equal(-37);
      });

      it('should not mutate the input array', function() {
        var input = [1,2,3,4,5];
        var result = sum(input);
        expect(input).to.eql([1,2,3,4,5]);
      });

      it('should use recursion by calling self', function () {
        sum([1,2,3,4,5,6]);
        expect(sum.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        sum([1,2,3,4,5,6]);
        sum.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('3. Sum Integers in Array', function() {
      var originalArraySum;

      before(function() {
        originalArraySum = arraySum;
        arraySum = sinon.spy(arraySum);
      });

      afterEach(function() {
        arraySum.reset();
      });

      after(function() {
        arraySum = originalArraySum;
      });

      it('should return a number', function() {
        expect(arraySum([[1],[2,3],[[4]],5,6])).to.be.a('number');
      });

      it('should return the sum of an array with nested arrays of non-negative integers', function() {
        expect(arraySum([[1],[2,3],[[4]],5,6])).to.equal(21);
        expect(arraySum([[12,[[34],[56]],78]])).to.equal(180);
        expect(arraySum([3,[0,[34,[7,[18]]]]])).to.equal(62);
      });

      it('should return the sum of an array with nested arrays of negative integers', function() {
        expect(arraySum([[-1],[-2,-3],[[-4]],-5,-6])).to.equal(-21);
        expect(arraySum([[-12,[[-34],[-56]],-78]])).to.equal(-180);
        expect(arraySum([-3,[0,[-34,[-7,[-18]]]]])).to.equal(-62);
      });

      it('should return the sum of an array with nested arrays of mixed non-negative and negative integers', function() {
        expect(arraySum([[1],[-2,3],[[-4]],5,-6])).to.equal(-3);
        expect(arraySum([[-12,[[34],[-56]],78]])).to.equal(44);
        expect(arraySum([3,[0,[-34,[-7,[18]]]]])).to.equal(-20);
      });

      it('should return 0 for empty array', function() {
        expect(arraySum([])).to.equal(0);
      });

      it('should accept an array with a single integer', function() {
        expect(arraySum([4])).to.equal(4);
        expect(arraySum([0])).to.equal(0);
        expect(arraySum([-37])).to.equal(-37);
      });

      it('should not mutate the input array', function() {
        var input = [[1],[2,3],[[4]],5,6];
        var result = arraySum(input);
        expect(input).to.eql([[1],[2,3],[[4]],5,6]);
      });

      it('should use recursion by calling self', function () {
        arraySum([[1],[2,3],[[4]],5,6]);
        expect(arraySum.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        arraySum([[1],[2,3],[[4]],5,6]);
        arraySum.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('4. Check if Even', function() {
      var originalIsEven;

      before(function() {
        originalIsEven = isEven;
        isEven = sinon.spy(isEven);
      });

      afterEach(function() {
        isEven.reset();
      });

      after(function() {
        isEven = originalIsEven;
      });

      it('should return a boolean', function() {
        expect(isEven(5)).to.be.a('boolean');
        expect(isEven(8)).to.be.a('boolean');
        expect(isEven(-4)).to.be.a('boolean');
      });

      it("should not use modulo", function() {
        expect(isEven.toString()).to.not.contain('%');
      });

      it('should return true for even numbers', function() {
        expect(isEven(118)).to.equal(true);
        expect(isEven(10)).to.equal(true);
        expect(isEven(0)).to.equal(true);
        expect(isEven(-34)).to.equal(true);
      });

      it('should return false for odd numbers', function() {
        expect(isEven(117)).to.equal(false);
        expect(isEven(9)).to.equal(false);
        expect(isEven(1)).to.equal(false);
        expect(isEven(-33)).to.equal(false);
      });

      it('should work with negative integers', function() {
        expect(isEven(-14)).to.equal(true);
        expect(isEven(-81)).to.equal(false);
      });

      it('should use recursion by calling self', function () {
        isEven(118);
        expect(isEven.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        isEven(118);
        isEven.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('5. Sum Below', function() {
      var originalSumBelow;

      before(function() {
        originalSumBelow = sumBelow;
        sumBelow = sinon.spy(sumBelow);
      });

      afterEach(function() {
        sumBelow.reset();
      });

      after(function() {
        sumBelow = originalSumBelow;
      });

      it('should return a number', function() {
        expect(sumBelow(10)).to.be.a('number');
      });

      it('should return the sum of non-negative integers below given integer', function() {
        expect(sumBelow(0)).to.equal(0);
        expect(sumBelow(1)).to.equal(0);
        expect(sumBelow(2)).to.equal(1);
        expect(sumBelow(7)).to.equal(21);
        expect(sumBelow(21)).to.equal(210);
        expect(sumBelow(92)).to.equal(4186);
      });

      it('should return the sum of an array of negative integers', function() {
        expect(sumBelow(-1)).to.equal(0);
        expect(sumBelow(-2)).to.equal(-1);
        expect(sumBelow(-6)).to.equal(-15);
        expect(sumBelow(-21)).to.equal(-210);
        expect(sumBelow(-92)).to.equal(-4186);
      });

      it('should use recursion by calling self', function () {
        sumBelow(10);
        expect(sumBelow.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        sumBelow(10);
        sumBelow.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('6. Integer Range', function() {
      var originalRange;

      before(function() {
        originalRange = range;
        range = sinon.spy(range);
      });

      afterEach(function() {
        range.reset();
      });

      after(function() {
        range = originalRange;
      });

      it('should return an array', function() {
        expect(range(2, 7)).to.be.an('array');
      });

      it('should return the integers between two numbers', function() {
        expect(range(3,8)).to.eql([4,5,6,7]);
        expect(range(127,131)).to.eql([128,129,130]);
      });

      it('should return empty array if no integers in range', function() {
        expect(range(5,5)).to.eql([]);
        expect(range(2,3)).to.eql([]);
      });

      it('should accept negative integers', function() {
        expect(range(-9,-4)).to.eql([-8,-7,-6,-5]);
        expect(range(-3,2)).to.eql([-2,-1,0,1]);
        expect(range(-3,-2)).to.eql([]);
        expect(range(-2,-2)).to.eql([]);
      });

      it('should accept starting integer that\'s larger than ending', function() {
        expect(range(7,2)).to.eql([6,5,4,3]);
        expect(range(3,-3)).to.eql([2,1,0,-1,-2]);
        expect(range(-9,-4)).to.eql([-8,-7,-6,-5]);
      });

      it('should use recursion by calling self', function () {
        range(3,8);
        expect(range.callCount).to.be.above(1);
      });

      it('should be invoked with two arguments', function() {
        range(3,8);
        range.args.forEach(arg => {
          expect(arg).to.have.length(2);
        });
      });

    });



    describe('7. Compute Exponent', function() {
      var originalExponent;

      before(function() {
        originalExponent = exponent;
        exponent = sinon.spy(exponent);
      });

      afterEach(function() {
        exponent.reset();
      });

      after(function() {
        exponent = originalExponent;
      });

      it('should return a number', function() {
        expect(exponent(4,3)).to.be.a('number');
      });

      it("should not use complex math", function() {
        expect(exponent.toString()).to.not.contain('Math');
      });

      it('should compute exponent of non-negative integers', function() {
        expect(exponent(3,4)).to.equal(81);
        expect(exponent(12,5)).to.equal(248832);
        expect(exponent(7,2)).to.equal(49);
      });

      it('returns 1 when exponent is 0', function() {
        expect(exponent(8,0)).to.equal(1);
        expect(exponent(244,0)).to.equal(1);
      });

      it('returns base when exponent is 1', function() {
        expect(exponent(9,1)).to.equal(9);
        expect(exponent(2300,1)).to.equal(2300);
      });


      it('should accept negative integer for exponent', function() {
        expect(exponent(4,-2)).to.equal(0.0625);
        expect(exponent(5,-4)).to.equal(0.0016);
        expect(exponent(2,-5)).to.equal(0.03125);
      });

      it('should use recursion by calling self', function () {
        exponent(3,4);
        expect(exponent.callCount).to.be.above(1);
      });

      it('should be invoked with two arguments', function() {
        exponent(3,4);
        exponent.args.forEach(arg => {
          expect(arg).to.have.length(2);
        });
      });

      // remove the 'x' to enable test
      xit('optimize for even numbers', function() {
        exponent.reset();
        exponent(3,4);
        expect(exponent.callCount).to.be.at.most(4);

        exponent.reset();
        exponent(12,5);
        expect(exponent.callCount).to.be.at.most(5);

        exponent.reset();
        exponent(19,7);
        expect(exponent.callCount).to.be.at.most(6);
      });

      // remove the 'x' to enable test
      xit('should accept negative integer for base', function() {
        expect(exponent(-3,4)).to.equal(-81);
        expect(exponent(-12,5)).to.equal(-248832);
        expect(exponent(-7,2)).to.equal(-49);
        expect(exponent(-7,4)).to.equal(-2401);
      });

    });



    describe('8. Power of Two', function() {
      var originalPowerOfTwo;

      before(function() {
        originalPowerOfTwo = powerOfTwo;
        powerOfTwo = sinon.spy(powerOfTwo);
      });

      afterEach(function() {
        powerOfTwo.reset();
      });

      after(function() {
        powerOfTwo = originalPowerOfTwo;
      });

      it('should return a boolean', function() {
        expect(powerOfTwo(10)).to.be.a('boolean');
        expect(powerOfTwo(16)).to.be.a('boolean');
      });

      it('should return true for powers of two', function() {
        expect(powerOfTwo(1)).to.equal(true);
        expect(powerOfTwo(2)).to.equal(true);
        expect(powerOfTwo(128)).to.equal(true);
        expect(powerOfTwo(256)).to.equal(true);
      });

      it('should return false when input is not power of two', function() {
        expect(powerOfTwo(0)).to.equal(false);
        expect(powerOfTwo(10)).to.equal(false);
        expect(powerOfTwo(150)).to.equal(false);
        expect(powerOfTwo(270)).to.equal(false);
      });

      it('should use recursion by calling self', function () {
        powerOfTwo(32);
        expect(powerOfTwo.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        powerOfTwo(32);
        powerOfTwo.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('9. Reverse String', function() {
      var originalReverse;

      before(function() {
        originalReverse = reverse;
        reverse = sinon.spy(reverse);
      });

      afterEach(function() {
        reverse.reset();
      });

      after(function() {
        reverse = originalReverse;
      });

      it('should return a string', function() {
        expect(reverse('orangutan')).to.be.a('string');
      });

      it('should return a string in reverse', function() {
        var poem = 'Roses are red, violets are blue, all my base are belong to you.';
        expect(reverse('Racecar')).to.equal('racecaR');
        expect(reverse(poem)).to.equal('.uoy ot gnoleb era esab ym lla ,eulb era steloiv ,der era sesoR');
      });

      it('should not mutate the input string', function() {
        var input = 'orangutan';
        var result = reverse(input);
        expect(input).to.equal('orangutan');
      });

      it('should use recursion by calling self', function () {
        reverse('orangutan');
        expect(reverse.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        reverse('orangutan');
        reverse.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('10. Palindrome', function() {
      var originalPalindrome;

      before(function() {
        originalPalindrome = palindrome;
        palindrome = sinon.spy(palindrome);
      });

      afterEach(function() {
        palindrome.reset();
      });

      after(function() {
        palindrome = originalPalindrome;
      });

      it('should return a boolean', function() {
        expect(palindrome('rotor')).to.be.a('boolean');
        expect(palindrome('motor')).to.be.a('boolean');
      });

      it('should return true for palindromes', function() {
        expect(palindrome('rotor')).to.equal(true);
        expect(palindrome('racecar')).to.equal(true);
        expect(palindrome('saippuakivikauppias')).to.equal(true);
      });

      it('should return false for non-palindromes', function() {
        expect(palindrome('motor')).to.equal(false);
        expect(palindrome('orangutan')).to.equal(false);
        expect(palindrome('antidisestablishmentarianism')).to.equal(false);
      });

      it('should ignore spaces and capital letters', function() {
        expect(palindrome('Rotor')).to.equal(true);
        expect(palindrome('race caR')).to.equal(true);
        expect(palindrome('sAip puaki v iKaup Pias')).to.equal(true);
      });

      it('should use recursion by calling self', function () {
        palindrome('saippuakivikauppias');
        expect(palindrome.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        palindrome('saippuakivikauppias');
        palindrome.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('11. Modulo', function() {
      var originalModulo;

      before(function() {
        originalModulo = modulo;
        modulo = sinon.spy(modulo);
      });

      afterEach(function() {
        modulo.reset();
      });

      after(function() {
        modulo = originalModulo;
      });

      it('should return a number', function() {
        expect(modulo(5,2)).to.be.a('number');
        expect(modulo(8,4)).to.be.a('number');
      });

      it("should not use complex math", function() {
        expect(modulo.toString()).to.not.contain('*');
        expect(modulo.toString()).to.not.contain('/');
        expect(modulo.toString()).to.not.contain('%');
        expect(modulo.toString()).to.not.contain('Math');
      });

      it('should return the remainder of two integers', function() {
        expect(modulo(2, 1)).to.equal(2 % 1);
        expect(modulo(17, 5)).to.equal(17 % 5);
        expect(modulo(78, 453)).to.equal(78 % 453);
        expect(modulo(-79, 82)).to.equal(-79 % 82);
        expect(modulo(-275, -502)).to.equal(-275 % -502);
        expect(modulo(-275, -274)).to.equal(-275 % -274);
        expect(modulo(-4, 2)).to.equal(-4 % 2);
        expect(modulo(0, 32)).to.equal(0 % 32);
        expect(modulo(0, 0)).to.be.NaN;
      });

      it('should use recursion by calling self', function () {
        modulo(5,2);
        expect(modulo.callCount).to.be.above(1);
      });

      it('should be invoked with two arguments', function() {
        modulo(5,2);
        modulo.args.forEach(arg => {
          expect(arg).to.have.length(2);
        });
      });

    });



    describe('12. Multiply', function() {
      var originalMultiply;

      before(function() {
        originalMultiply = multiply;
        multiply = sinon.spy(multiply);
      });

      afterEach(function() {
        multiply.reset();
      });

      after(function() {
        multiply = originalMultiply;
      });

      it('should return a number', function() {
        expect(multiply(5,2)).to.be.a('number');
        expect(multiply(8,4)).to.be.a('number');
      });

      it("should not use complex math", function() {
        expect(multiply.toString()).to.not.contain('*');
        expect(multiply.toString()).to.not.contain('/');
        expect(multiply.toString()).to.not.contain('%');
        expect(multiply.toString()).to.not.contain('Math');
      });

      it('should return the product of two positive integers', function() {
        expect(multiply(1, 2)).to.equal(1 * 2);
        expect(multiply(2, 1)).to.equal(1 * 2);
        expect(multiply(5, 17)).to.equal(5 * 17);
        expect(multiply(17, 5)).to.equal(17 * 5);
        expect(multiply(78, 453)).to.equal(78 * 453);
        expect(multiply(453, 78)).to.equal(78 * 453);
        expect(multiply(0, 32)).to.equal(0 * 32);
        expect(multiply(32, 0)).to.equal(0 * 32);
        expect(multiply(0, 0)).to.equal(0 * 0);
      });

      it('should return the product of two negative integers', function() {
        expect(multiply(-79, -82)).to.equal(-79 * -82);
        expect(multiply(-275, -502)).to.equal(-275 * -502);
        expect(multiply(-2, -2)).to.equal(-2 * -2);
        expect(multiply(-8, -3)).to.equal(-8 * -3);
        expect(multiply(-12, -10)).to.equal(-12 * -10);
        expect(multiply(-22, -3)).to.equal(-22 * -3);
        expect(multiply(-5, -27)).to.equal(-5 * -27);
      });

      it('should return the product of mixed positive and negative integers', function() {
        expect(multiply(-79, 82)).to.equal(-79 * 82);
        expect(multiply(79, -82)).to.equal(79 * -82);
        expect(multiply(-275, 502)).to.equal(-275 * 502);
        expect(multiply(275, -502)).to.equal(275 * -502);
        expect(multiply(2, -2)).to.equal(2 * -2);
        expect(multiply(-8, 3)).to.equal(-8 * 3);
        expect(multiply(12, -10)).to.equal(12 * -10);
        expect(multiply(-22, 3)).to.equal(-22 * 3);
        expect(multiply(5, -27)).to.equal(5 * -27);
      });

      it('should use recursion by calling self', function () {
        multiply(8,4);
        expect(multiply.callCount).to.be.above(1);
      });

      it('should be invoked with two arguments', function() {
        multiply(8,4);
        multiply.args.forEach(arg => {
          expect(arg).to.have.length(2);
        });
      });

    });



    describe('13. Divide', function() {
      var originalDivide;

      before(function() {
        originalDivide = divide;
        divide = sinon.spy(divide);
      });

      afterEach(function() {
        divide.reset();
      });

      after(function() {
        divide = originalDivide;
      });

      it('should return a number', function() {
        expect(multiply(5,2)).to.be.a('number');
        expect(multiply(8,4)).to.be.a('number');
      });

      it('should return a number', function() {
        expect(divide(5,2)).to.be.a('number');
        expect(divide(8,4)).to.be.a('number');
      });

      it("should not use complex math", function() {
        expect(divide.toString()).to.not.contain('*');
        expect(divide.toString()).to.not.contain('/');
        expect(divide.toString()).to.not.contain('%');
        expect(divide.toString()).to.not.contain('Math');
      });

      it('should return the quotient of two integers', function() {
        expect(divide(2, 1)).to.equal(~~(2 / 1));
        expect(divide(17, 5)).to.equal(~~(17 / 5));
        expect(divide(78, 453)).to.equal(~~(78 / 453));
        expect(divide(-79, 82)).to.equal(~~(-79 / 82));
        expect(divide(-275, -582)).to.equal(~~(-275 / -582));
        expect(divide(0, 32)).to.equal(~~(0 / 32));
        expect(divide(0, 0)).to.be.NaN;
      });

      it('should use recursion by calling self', function () {
        divide(17, 5);
        expect(divide.callCount).to.be.above(1);
      });

      it('should be invoked with two arguments', function() {
        divide(8,4);
        divide.args.forEach(arg => {
          expect(arg).to.have.length(2);
        });
      });

    });



    describe('14. Greatest Common Divisor', function() {
      var originalGcd;

      before(function() {
        originalGcd = gcd;
        gcd = sinon.spy(gcd);
      });

      afterEach(function() {
        gcd.reset();
      });

      after(function() {
        gcd = originalGcd;
      });

      it('should return a number', function() {
        expect(gcd(4,36)).to.be.a('number');
      });

      it('should return greatest common divisor of two positive integers', function() {
        expect(gcd(4,36)).to.equal(4);
        expect(gcd(24,88)).to.equal(8);
        expect(gcd(339,17)).to.equal(1);
        expect(gcd(126,900)).to.equal(18);
      });

      it('should return null for negative integers', function() {
        expect(gcd(-4, 2)).to.equal(null);
        expect(gcd(-5, 5)).to.equal(null);
        expect(gcd(5, -5)).to.equal(null);
        expect(gcd(7, -36)).to.equal(null);
        expect(gcd(-10, -58)).to.equal(null);
        expect(gcd(-92, -5)).to.equal(null);
        // expect(gcd(0, 0)).to.equal(null);
        // expect(gcd(0, 5)).to.equal(null);
        // expect(gcd(5, 0)).to.equal(null);
        // expect(gcd(-5, 0)).to.equal(null);
        // expect(gcd(0, -5)).to.equal(null);
      });

      it('should use recursion by calling self', function () {
        gcd(17, 5);
        expect(gcd.callCount).to.be.above(1);
      });

      it('should be invoked with two arguments', function() {
        gcd(17,5);
        gcd.args.forEach(arg => {
          expect(arg).to.have.length(2);
        });
      });

    });



    describe('15. Compare Strings', function() {
      var originalCompareStr;

      before(function() {
        originalCompareStr = compareStr;
        compareStr = sinon.spy(compareStr);
      });

      afterEach(function() {
        compareStr.reset();
      });

      after(function() {
        compareStr = originalCompareStr;
      });

      it('should return a boolean', function() {
        expect(compareStr('house', 'houses')).to.be.a('boolean');
        expect(compareStr('', '')).to.be.a('boolean');
        expect(compareStr('tomato', 'tomato')).to.be.a('boolean');
      });

      it('should return true for identical strings', function() {
        expect(compareStr('house', 'houses')).to.equal(false);
        expect(compareStr('', '')).to.equal(true);
        expect(compareStr('tomato', 'tomato')).to.equal(true);
        expect(compareStr('', 'pop')).to.equal(false);
        expect(compareStr('foot', '')).to.equal(false);
        expect(compareStr('big dog', 'big dog')).to.equal(true);
      });

      it('should use recursion by calling self', function () {
        compareStr('house', 'houses');
        expect(compareStr.callCount).to.be.above(1);
      });

      it('should be invoked with two arguments', function() {
        compareStr('house', 'houses');
        compareStr.args.forEach(arg => {
          expect(arg).to.have.length(2);
        });
      });

    });



    describe('16. Create array from string', function() {
      var originalCreateArray;

      before(function() {
        originalCreateArray = createArray;
        createArray = sinon.spy(createArray);
      });

      afterEach(function() {
        createArray.reset();
      });

      after(function() {
        createArray = originalCreateArray;
      });

      it('should return an array', function() {
        expect(createArray('hello')).to.be.an('array');
      });

      it('should return an array where each index is a letter of the string', function() {
        expect(createArray('hello')).to.eql(['h','e','l','l','o']);
        expect(createArray('this is not a pipe')).to.eql(['t','h','i','s',' ','i','s',' ','n','o','t',' ','a',' ','p','i','p','e']);
        expect(createArray('hologram')).to.eql(['h','o','l','o','g','r','a','m']);
        expect(createArray('i')).to.eql(['i']);
      });

      it('should use recursion by calling self', function () {
        createArray('hello');
        expect(createArray.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        createArray('hello');
        createArray.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('17. Reverse an array', function() {
      var originalReverseArr;

      before(function() {
        originalReverseArr = reverseArr;
        reverseArr = sinon.spy(reverseArr);
      });

      afterEach(function() {
        reverseArr.reset();
      });

      after(function() {
        reverseArr = originalReverseArr;
      });

      it('should return an array', function() {
        expect(reverseArr([5,4,3,2,1])).to.be.an('array');
      });

      it('should return array in reversed order', function() {
        expect(reverseArr([1,2,3,4,5])).to.eql([5,4,3,2,1]);
        expect(reverseArr([5,4,3,2,1])).to.eql([1,2,3,4,5]);
        expect(reverseArr([2,4,6,8])).to.eql([8,6,4,2]);
        expect(reverseArr([8,6,4,2])).to.eql([2,4,6,8]);
      });

      it('should use recursion by calling self', function () {
        reverseArr([5,4,3,2,1]);
        expect(reverseArr.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        reverseArr([5,4,3,2,1]);
        reverseArr.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('18. Build an array with a given value and length', function() {
      var originalBuildList;

      before(function() {
        originalBuildList = buildList;
        buildList = sinon.spy(buildList);
      });

      afterEach(function() {
        buildList.reset();
      });

      after(function() {
        buildList = originalBuildList;
      });

      it('should return an array', function() {
        expect(buildList(0,5)).to.be.an('array');
      });

      it('should return array of given length with given value at each index', function() {
        expect(buildList(0, 5)).to.eql([0,0,0,0,0]);
        expect(buildList('banana', 3)).to.eql(['banana','banana','banana']);
        expect(buildList(NaN, 4)).to.eql([NaN, NaN, NaN, NaN]);
        expect(buildList(undefined, 1)).to.eql([undefined]);
        expect(buildList([], 2)).to.eql([[],[]]);
        expect(buildList({}, 4)).to.eql([{},{},{},{}]);
        expect(buildList(true, 3)).to.eql([true,true,true]);
      });

      it('should use recursion by calling self', function () {
        buildList(2,7);
        expect(buildList.callCount).to.be.above(1);
      });

      it('should be invoked with two arguments', function() {
        buildList('five',5);
        buildList.args.forEach(arg => {
          expect(arg).to.have.length(2);
        });
      });

    });



    describe('19. FizzBuzz', function() {
      var originalFizzBuzz, actualResult, expectedResult;

      before(function() {
        originalFizzBuzz = fizzBuzz;
        fizzBuzz = sinon.spy(fizzBuzz);
      });

      afterEach(function() {
        fizzBuzz.reset();
      });

      after(function() {
        fizzBuzz = originalFizzBuzz;
      });

      it('should return an array', function() {
        expect(fizzBuzz(3)).to.be.an('array');
      });

      it('should return string representations of numbers 1 to n', function() {
        actualResult = fizzBuzz(10);
        actualResult.forEach(function(value) {
          expect(value).to.be.a('string');
        });
      });

      it('should output "Fizz" for multiples of three', function() {
        actualResult = fizzBuzz(3)[2];
        expectedResult = 'Fizz';
        expect(actualResult).to.equal(expectedResult);
      });

      it('should output "Buzz" for multiples of five', function() {
        actualResult = fizzBuzz(5)[4];
        expectedResult = 'Buzz';
        expect(actualResult).to.equal(expectedResult);
      });

      it('should output "FizzBuzz" for multiples of both three and five', function() {
        actualResult = fizzBuzz(15)[14];
        expectedResult = 'FizzBuzz';
        expect(actualResult).to.equal(expectedResult);
      });

      it('should use recursion by calling self', function () {
        fizzBuzz(5);
        expect(fizzBuzz.callCount).to.be.above(1);
      });

      it('should be invoked with one argument', function() {
        fizzBuzz(5);
        fizzBuzz.args.forEach(arg => {
          expect(arg).to.have.length(1);
        });
      });

    });



    describe('20. Count value in array', function() {
      var originalCountOccurrence;

      before(function() {
        originalCountOccurrence = countOccurrence;
        countOccurrence = sinon.spy(countOccurrence);
      });

      afterEach(function() {
        countOccurrence.reset();
      });

      after(function() {
        countOccurrence = originalCountOccurrence;
      });

      it('should return a number', function() {
        expect(countOccurrence([2,7,4,4,1,4], 4)).to.be.a('number');
        expect(countOccurrence([2,'banana',4,4,1,'banana'], 'banana')).to.be.a('number');
      });

      it('should return the number of occurrences of the value', function() {
        expect(countOccurrence([2,7,4,4,1,4], 4)).to.equal(3);
        expect(countOccurrence([2,'banana',4,4,1,'banana'], 'banana')).to.equal(2);
        expect(countOccurrence([undefined,7,undefined,4,1,4], undefined)).to.equal(2);
        expect(countOccurrence(['',7,null,0,'0',false], 0)).to.equal(1);
        expect(countOccurrence(['',7,null,0,'0',false], false)).to.equal(1);
        expect(countOccurrence(['',7,null,0,'0',false], null)).to.equal(1);
        expect(countOccurrence(['',7,null,0,'0',false], '')).to.equal(1);
        // expect(countOccurrence(['',7,null,0,NaN,'0',false], NaN)).to.equal(1);
      });

      it('should use recursion by calling self', function () {
        countOccurrence([2,7,4,4,1,4], 4);
        expect(countOccurrence.callCount).to.be.above(1);
      });

      it('should be invoked with two arguments', function() {
        countOccurrence([2,7,4,4,1,4], 4);
        countOccurrence.args.forEach(arg => {
          expect(arg).to.have.length(2);
        });
      });

    });



    describe('21. Recursive Map', function() {
      var originalRMap, timesTwo, input, result;

      before(function() {
        originalRMap = rMap;
        rMap = sinon.spy(rMap);
        timesTwo = function(n) { return n * 2; };
      });

      beforeEach(function() {
        input = [1,2,3,4,5];
      });

      afterEach(function() {
        rMap.reset();
      });

      after(function() {
        rMap = originalRMap;
      });

      it('should return an array', function() {
        expect(rMap(input, timesTwo)).to.be.an('array');
      });

      it('should not use the native version of map', function() {
        // Spying on Array.prototype.map in testSupport.js
        rMap(input, timesTwo);
        expect(Array.prototype.map.called).to.be.false;
      });

      it('should return new array without mutating the input array', function() {
        result = rMap(input, num => num);
        expect(input).to.eql([1,2,3,4,5]);
        expect(result).to.eql(input);
        expect(result).to.not.equal(input);
      });

      it('should apply a function to every value in an array', function() {
        result = rMap([1,2,3], timesTwo);
        expect(result).to.eql([2,4,6]);
      });

      it('should use recursion by calling self', function () {
        rMap([1,2,3,4], timesTwo);
        expect(rMap.callCount).to.be.above(1);
      });

      it('should be invoked with two arguments', function() {
        rMap([1,2,3,4], timesTwo);
        rMap.args.forEach(arg => {
          expect(arg).to.have.length(2);
        });
      });

    });

/*   CONTINUE REFACTORING BELOW FOR ARGUMENT RESTRICTION   */

    describe('22. Count key in object', function() {
      var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};

      it('should return a number', function() {
        expect(countKeysInObj(input, 'r')).to.be.a('number');
        expect(countKeysInObj(input, 'e')).to.be.a('number');
        expect(countKeysInObj(input, 'p')).to.be.a('number');
      });

      it('should return the number of occurrences of the property', function() {
        expect(countKeysInObj(input, 'e')).to.equal(2);
        expect(countKeysInObj(input, 'x')).to.equal(1);
        expect(countKeysInObj(input, 'y')).to.equal(2);
        expect(countKeysInObj(input, 't')).to.equal(1);
        expect(countKeysInObj(input, 'r')).to.equal(1);
        expect(countKeysInObj(input, 'p')).to.equal(1);
      });

      it('should use recursion by calling self', function () {
        var originalCountKeysInObj = countKeysInObj;
        countKeysInObj = sinon.spy(countKeysInObj);
        countKeysInObj(input, 'e');
        expect(countKeysInObj.callCount).to.be.above(1);
        countKeysInObj = originalCountKeysInObj;
      });

    });



    describe('23. Count value in object', function() {
      var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};

      it('should return a number', function() {
        expect(countValuesInObj(input, 'r')).to.be.a('number');
        expect(countValuesInObj(input, 'e')).to.be.a('number');
        expect(countValuesInObj(input, 'p')).to.be.a('number');
      });

      it('should return the count of the occurrences of the property', function() {
        expect(countValuesInObj(input, 'e')).to.equal(1);
        expect(countValuesInObj(input, 'x')).to.equal(0);
        expect(countValuesInObj(input, 'y')).to.equal(1);
        expect(countValuesInObj(input, 't')).to.equal(0);
        expect(countValuesInObj(input, 'r')).to.equal(2);
        expect(countValuesInObj(input, 'p')).to.equal(0);
      });

      it('should use recursion by calling self', function () {
        var originalCountValuesInObj = countValuesInObj;
        countValuesInObj = sinon.spy(countValuesInObj);
        countValuesInObj(input, 'r');
        expect(countValuesInObj.callCount).to.be.above(1);
        countValuesInObj = originalCountValuesInObj;
      });

    });



    describe('24. Replace keys in object', function() {

      var tallyKeys = function(obj) {
        var count = 0;
        for (var k in obj) {
          if (typeof obj[k] === 'object') {
            count += tallyKeys(obj[k]);
          }
          count++;
        }
        return count;
      };

      it('should return an object', function() {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        expect(replaceKeysInObj(input, 'r', 'a')).to.be.an('object');
        expect(replaceKeysInObj(input, 'e', 0)).to.be.an('object');
      });

      it('should return object containing renamed keys', function() {
        var input  = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}}, 'y':'e'};
        var output = replaceKeysInObj(input, 'e', 'f');

        expect(output.e).to.equal(undefined);
        expect(output.f.x).to.equal('y');
        expect(output.t.r.e).to.equal(undefined);
        expect(output.t.r.f).to.equal('r');
        expect(output.t.p.y).to.equal('r');
        expect(output.y).to.equal('e');

        expect(output.hasOwnProperty('e')).to.equal(false);
        expect(output.hasOwnProperty('f')).to.equal(true);
        expect(output.hasOwnProperty('t')).to.equal(true);
        expect(output.hasOwnProperty('y')).to.equal(true);

        expect(output.t.hasOwnProperty('r')).to.equal(true);
        expect(output.t.hasOwnProperty('p')).to.equal(true);

        expect(output.t.r.hasOwnProperty('e')).to.equal(false);
        expect(output.t.r.hasOwnProperty('f')).to.equal(true);
        expect(output.t.p.hasOwnProperty('y')).to.equal(true);
      });

      it('should return object with same number of keys', function () {
        var input  = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}}, 'y':'e'};
        var output1 = replaceKeysInObj(input, 'e', 'f');
        var output2 = replaceKeysInObj(output1, 'e', 'f');
        expect(tallyKeys(input)).to.equal(8);
        expect(tallyKeys(output1)).to.equal(8);
        expect(tallyKeys(output2)).to.equal(8);
      });

      it('should use recursion by calling self', function () {
        var input = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
        var originalReplaceKeysInObj = replaceKeysInObj;
        replaceKeysInObj = sinon.spy(replaceKeysInObj);
        replaceKeysInObj(input, 'r', 'a');
        expect(replaceKeysInObj.callCount).to.be.above(1);
        replaceKeysInObj = originalReplaceKeysInObj;
      });

    });


    describe('25. First n Fibonacci', function() {

      it('should return an array', function() {
        expect(fibonacci(5)).to.be.an('array');
      });

      it('should return first n Fibonacci numbers where n starts at index 1', function() {
        expect(fibonacci(1)).to.eql([0, 1]);
        expect(fibonacci(2)).to.eql([0, 1, 1]);
        expect(fibonacci(3)).to.eql([0, 1, 1, 2]);
        expect(fibonacci(4)).to.eql([0, 1, 1, 2, 3]);
        expect(fibonacci(5)).to.eql([0, 1, 1, 2, 3, 5]);
        expect(fibonacci(12)).to.eql([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]);
      });

      it('should return null for zero and negative integers', function() {
        expect(fibonacci(0)).to.equal(null);
        expect(fibonacci(-7)).to.equal(null);
      });

      it('should use recursion by calling self', function () {
        var originalFibonacci = fibonacci;
        fibonacci = sinon.spy(fibonacci);
        fibonacci(5);
        expect(fibonacci.callCount).to.be.above(1);
        fibonacci = originalFibonacci;
      });

    });



    describe('26. Return nth Fibonacci', function() {

      it('should return a number', function() {
        expect(nthFibo(5)).to.be.a('number');
      });

      it('should return the nth Fibonacci number', function() {
        expect(nthFibo(0)).to.equal(0);
        expect(nthFibo(1)).to.equal(1);
        expect(nthFibo(2)).to.equal(1);
        expect(nthFibo(3)).to.equal(2);
        expect(nthFibo(4)).to.equal(3);
        expect(nthFibo(5)).to.equal(5);
        expect(nthFibo(12)).to.equal(144);
      });

      it('should return null for negative integers', function() {
        expect(nthFibo(-5)).to.equal(null);
        expect(nthFibo(-7)).to.equal(null);
      });

      it('should use recursion by calling self', function () {
        var originalNthFibo = nthFibo;
        nthFibo = sinon.spy(nthFibo);
        nthFibo(5);
        expect(nthFibo.callCount).to.be.above(1);
        nthFibo = originalNthFibo;
      });

    });



    describe('27. Capitalize words in array', function() {

      it('should return an array', function() {
        expect(capitalizeWords(['i','am','learning','recursion'])).to.be.an('array');
      });

      it('should capitalize all words in array', function() {
        expect(capitalizeWords(['i','am','learning','recursion'])).to.eql(['I', 'AM', 'LEARNING', 'RECURSION']);
        expect(capitalizeWords(["ceci","n'est","pas","une","pipe"])).to.eql(["CECI", "N'EST", "PAS", "UNE", "PIPE"]);
      });

      it('should use recursion by calling self', function () {
        var originalCapitalizeWords = capitalizeWords;
        capitalizeWords = sinon.spy(capitalizeWords);
        capitalizeWords(["ceci","n'est","pas","une","pipe"]);
        expect(capitalizeWords.callCount).to.be.above(1);
        capitalizeWords = originalCapitalizeWords;
      });

    });



    describe('28. Capitalize first letter of words in array', function() {

      it('should return an array', function() {
        expect(capitalizeFirst(['i','am','learning','recursion'])).to.be.an('array');
      });

      it('should capitalize first letter of each word in array', function() {
        expect(capitalizeFirst(['i','am','learning','recursion'])).to.eql(['I', 'Am', 'Learning', 'Recursion']);
        expect(capitalizeFirst(["ceci","n'est","pas","une","pipe"])).to.eql(["Ceci", "N'est", "Pas", "Une", "Pipe"]);
      });

      it('should use recursion by calling self', function () {
        var originalCapitalizeFirst = capitalizeFirst;
        capitalizeFirst = sinon.spy(capitalizeFirst);
        capitalizeFirst(["ceci","n'est","pas","une","pipe"]);
        expect(capitalizeFirst.callCount).to.be.above(1);
        capitalizeFirst = originalCapitalizeFirst;
      });

    });



    describe('29. Sum even numbers in nested objects', function() {
      var obj = {
        a: 2,
        b: {b: 2, bb: {b: 3, bb: {b: 2}}},
        c: {c: {c: 2}, cc: 'ball', ccc: 5},
        d: 1,
        e: {e: {e: 2}, ee: 'car'}
      };

      it('should return a number', function() {
        expect(nestedEvenSum(obj)).to.be.a('number');
      });

      it('should sum even numbers', function() {
        expect(nestedEvenSum(obj)).to.equal(10);
      });

      it('should use recursion by calling self', function () {
        var originalNestedEvenSum = nestedEvenSum;
        nestedEvenSum = sinon.spy(nestedEvenSum);
        nestedEvenSum(obj);
        expect(nestedEvenSum.callCount).to.be.above(1);
        nestedEvenSum = originalNestedEvenSum;
      });

    });



    describe('30. Flatten nested arrays', function() {

      it('should return an array', function() {
        expect(flatten([1,[2],[3,[[4]]],5])).to.be.an('array');
      });

      it('should return flattened array', function() {
        expect(flatten([[1],[2,3],[[4]],5,6])).to.eql([1,2,3,4,5,6]);
        expect(flatten([[12,[[34],[56]],78]])).to.eql([12,34,56,78]);
        expect(flatten([3,[0,[34,[7,[18]]]]])).to.eql([3,0,34,7,18]);
        expect(flatten([[1],[2,[],3],[],[[4]],5,6])).to.eql([1,2,3,4,5,6]);
      });

      it('should use recursion by calling self', function () {
        var originalFlatten = flatten;
        flatten = sinon.spy(flatten);
        flatten([3,[0,[34,[7,[18]]]]]);
        expect(flatten.callCount).to.be.above(1);
        flatten = originalFlatten;
      });

    });



    describe('31. Tally letters in string', function() {

      it('should return an object', function() {
        expect(letterTally('orangutan')).to.be.an('object');
      });

      it('should return object containing tallies of unique letters', function() {
        var output = letterTally('potato');

        expect(output.p).to.equal(1);
        expect(output.o).to.equal(2);
        expect(output.t).to.equal(2);
        expect(output.a).to.equal(1);
      });

      it('should return object containing the number of keys corresponding to unique letters', function () {
        var output = letterTally('mississippi');
        var countKeys = Object.keys(output).length;
        expect(countKeys).to.equal(4);
      });

      it('should use recursion by calling self', function () {
        var originalLetterTally = letterTally;
        letterTally = sinon.spy(letterTally);
        letterTally('invasion');
        expect(letterTally.callCount).to.be.above(1);
        letterTally = originalLetterTally;
      });

    });



    describe('32. Eliminate consecutive duplicates', function() {
      var input1 = [1,2,2,3,4,4,5,5,5];
      var input2 = [1,2,2,3,4,4,2,5,5,5,4,4];

      it('should return an array', function() {
        expect(compress(input1)).to.be.an('array');
      });

      it('should remove consecutive duplicates', function() {
        expect(compress(input1)).to.eql([1,2,3,4,5]);
        expect(compress(input2)).to.eql([1,2,3,4,2,5,4]);
      });

      it('should use recursion by calling self', function () {
        var originalCompress = compress;
        compress = sinon.spy(compress);
        compress(input2);
        expect(compress.callCount).to.be.above(1);
        compress = originalCompress;
      });

    });



    describe('33. Augment each element in nested arrays', function() {

      it('should return an array', function() {
        expect(augmentElements([[],[3],[7]], 5)).to.be.an('array');
      });

      it('should augment each element with given value', function() {
        expect(augmentElements([[],[3],[7]], 5)).to.eql([[5],[3,5],[7,5]]);
        expect(augmentElements([[],[3],[7]], null)).to.eql([[null],[3,null],[7,null]]);
        expect(augmentElements([[],[3],[7]], '')).to.eql([[''],[3,''],[7,'']]);
      });

      it('should use recursion by calling self', function () {
        var originalAugElements = augmentElements;
        augmentElements = sinon.spy(augmentElements);
        augmentElements([[],[3],[7]], 5);
        expect(augmentElements.callCount).to.be.above(1);
        augmentElements = originalAugElements;
      });

    });



    describe('34. Minimize zeroes', function() {
      var input1 = [2,0,0,0,1,4];
      var input2 = [2,0,0,0,1,0,0,4];

      it('should return an array', function() {
        expect(minimizeZeroes(input1)).to.be.an('array');
      });

      it('should remove excess zeroes', function() {
        expect(minimizeZeroes(input1)).to.eql([2,0,1,4]);
        expect(minimizeZeroes(input2)).to.eql([2,0,1,0,4]);
      });

      it('should use recursion by calling self', function () {
        var originalMinZeroes = minimizeZeroes;
        minimizeZeroes = sinon.spy(minimizeZeroes);
        minimizeZeroes(input1);
        expect(minimizeZeroes.callCount).to.be.above(1);
        minimizeZeroes = originalMinZeroes;
      });

    });



    describe('35. Alternate sign', function() {
      var input1 = [2,7,8,3,1,4];
      var input2 = [-2,-7,8,3,-1,4];

      it('should return an array', function() {
        expect(alternateSign(input1)).to.be.an('array');
      });

      it('should remove excess zeroes', function() {
        expect(alternateSign(input1)).to.eql([2,-7,8,-3,1,-4]);
        expect(alternateSign(input2)).to.eql([2,-7,8,-3,1,-4]);
      });

      it('should use recursion by calling self', function () {
        var originalAltSign = alternateSign;
        alternateSign = sinon.spy(alternateSign);
        alternateSign(input1);
        expect(alternateSign.callCount).to.be.above(1);
        alternateSign = originalAltSign;
      });

    });



    describe('36. Convert numbers to text', function() {

      it('should return a string', function() {
        expect(numToText("I have 5 dogs and 6 ponies")).to.be.a('string');
      });

      it('should convert single digits to their word equivalent', function() {
        expect(numToText("I have 5 dogs and 6 ponies")).to.equal("I have five dogs and six ponies");
        expect(numToText("It takes 3 men to screw in 1 light bulb")).to.equal("It takes three men to screw in one light bulb");
      });

      it('should use recursion by calling self', function () {
        var originalNumToText = numToText;
        numToText = sinon.spy(numToText);
        numToText("I have 5 dogs and 6 ponies");
        expect(numToText.callCount).to.be.above(1);
        numToText = originalNumToText;
      });

    });

  });

  // function checkForNativeMethods(runFunction) {
  //   it('should not use the native version of map', function() {
  //     // These spies are set up in testSupport.js
  //     runFunction();
  //     expect(Array.prototype.map.called).to.equal(false);
  //   });
  // }

}());
