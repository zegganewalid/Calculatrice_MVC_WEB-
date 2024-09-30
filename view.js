// view.js
class CalculatorView {
    constructor() {
      this.displayElement = document.getElementById('display');
    }
  
    updateDisplay(value) {
      this.displayElement.innerText = value;
    }
  
    bindClickNumber(handler) {
      document.querySelectorAll('.button').forEach(button => {
        const value = button.id;
        if (!isNaN(value)) {  // Si c'est un chiffre
          button.addEventListener('click', () => {
            handler(value);
          });
        }
      });
    }
  
    bindClickOperator(handler) {
      document.querySelectorAll('.operation').forEach(button => {
        button.addEventListener('click', () => {
          handler(button.innerText);
        });
      });
    }
  
    bindClickEquals(handler) {
      document.getElementById('equal').addEventListener('click', handler);
    }
  
    bindClickClear(handler) {
      document.getElementById('ac').addEventListener('click', handler);
    }
  }
  
  // Exportation de la vue
  export { CalculatorView };
  