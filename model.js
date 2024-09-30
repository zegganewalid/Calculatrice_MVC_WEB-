// model.js
class CalculatorModel {
    constructor() {
      this.currentValue = '0';
      this.previousValue = null;
      this.operator = null;
    }
  
    clear() {
      this.currentValue = '0';
      this.previousValue = null;
      this.operator = null;
    }
  
    appendNumber(number) {
      if (this.currentValue === '0') {
        this.currentValue = number;
      } else {
        this.currentValue += number;
      }
    }
  
    chooseOperator(operator) {
      if (this.currentValue === '') return;
      if (this.previousValue !== null) {
        this.compute();
      }
      this.operator = operator;
      this.previousValue = this.currentValue;
      this.currentValue = '0';
    }
  
    compute() {
      let result;
      const prev = parseFloat(this.previousValue);
      const current = parseFloat(this.currentValue);
      
      if (isNaN(prev) || isNaN(current)) return;
  
      switch (this.operator) {
        case '+':
          result = prev + current;
          break;
        case '-':
          result = prev - current;
          break;
        case '*':
          result = prev * current;
          break;
        case '/':
          result = prev / current;
          break;
        default:
          return;
      }
  
      this.currentValue = result.toString();
      this.operator = null;
      this.previousValue = null;
    }
  
    getDisplayValue() {
      return this.currentValue;
    }
  }
  
  // Exportation du modèle
  export { CalculatorModel };
  