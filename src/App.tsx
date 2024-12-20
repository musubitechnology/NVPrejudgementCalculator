import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import CalculatorForm from './components/CalculatorForm';
import CalculationResults from './components/CalculationResults';
import StatuteInfo from './components/StatuteInfo';
import MemoTemplate from './components/MemoTemplate';
import { CalculatorInputs, CalculationResult } from './types/calculator';
import { calculateTimePeriodYears, calculateStatutoryRate, calculatePrejudgmentInterest } from './utils/calculations';

function App() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    principalAmount: 0,
    startDate: '',
    endDate: '',
    primeRate: 0,
    useCustomRate: false,
    customRate: 0,
  });

  const [result, setResult] = useState<CalculationResult | null>(null);

  const handleInputChange = (name: keyof CalculatorInputs, value: any) => {
    setInputs((prev) => ({ ...prev, [name]: value }));
    calculateResults({ ...inputs, [name]: value });
  };

  const calculateResults = (currentInputs: CalculatorInputs) => {
    if (!currentInputs.principalAmount || !currentInputs.startDate || !currentInputs.endDate || 
        (!currentInputs.primeRate && !currentInputs.useCustomRate) || 
        (currentInputs.useCustomRate && !currentInputs.customRate)) {
      setResult(null);
      return;
    }

    const timePeriodYears = calculateTimePeriodYears(currentInputs.startDate, currentInputs.endDate);
    const rate = currentInputs.useCustomRate 
      ? (currentInputs.customRate || 0)
      : calculateStatutoryRate(currentInputs.primeRate);
    
    const prejudgmentInterest = calculatePrejudgmentInterest(
      currentInputs.principalAmount,
      rate,
      timePeriodYears
    );

    setResult({
      principalAmount: currentInputs.principalAmount,
      statutoryRate: rate,
      timePeriodYears,
      prejudgmentInterest,
      totalAmount: currentInputs.principalAmount + prejudgmentInterest,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calculator className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">
              Prejudgment Interest Calculator
            </h1>
          </div>
          <p className="text-gray-600">
            Calculate prejudgment interest based on Nevada's statutory rate (Prime Rate + 2%)
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <CalculatorForm 
            inputs={inputs}
            onInputChange={handleInputChange}
          />
        </div>

        <CalculationResults result={result} />
        
        <MemoTemplate result={result} inputs={inputs} />
        
        <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <StatuteInfo />
        </div>
      </div>
    </div>
  );
}

export default App;