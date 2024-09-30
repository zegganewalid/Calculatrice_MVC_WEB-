// controller.js

import { CalculatorModel } from './model.js';
import { CalculatorView } from './view.js';

class CalculatorController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Lier les événements des boutons à leurs gestionnaires
    this.view.bindClickNumber(this.handleAppendNumber.bind(this));
    this.view.bindClickOperator(this.handleChooseOperator.bind(this));
    this.view.bindClickEquals(this.handleCompute.bind(this));
    this.view.bindClickClear(this.handleClear.bind(this));

    // Initialiser l'affichage
    this.updateDisplay();
  }

  handleAppendNumber(number) {
    this.model.appendNumber(number);
    this.updateDisplay();
  }

  handleChooseOperator(operator) {
    this.model.chooseOperator(operator);
    this.updateDisplay();
  }

  handleCompute() {
    this.model.compute();
    this.updateDisplay();
  }

  handleClear() {
    this.model.clear();
    this.updateDisplay();
  }

  updateDisplay() {
    this.view.updateDisplay(this.model.getDisplayValue());
  }
}

// Exportation du contrôleur
export { CalculatorController };
