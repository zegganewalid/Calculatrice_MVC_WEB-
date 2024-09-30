import { CalculatorModel } from './model.js';
import { CalculatorView } from './view.js';
import { CalculatorController } from './controller.js';

document.addEventListener('DOMContentLoaded', () => {
  const model = new CalculatorModel();
  const view = new CalculatorView();
  const controller = new CalculatorController(model, view);
});
