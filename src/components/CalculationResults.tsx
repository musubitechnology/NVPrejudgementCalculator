import React from 'react';
import { CalculationResult } from '../types/calculator';
import { formatCurrency, formatDuration } from '../utils/formatters';
import CopyButton from './CopyButton';

interface Props {
  result: CalculationResult | null;
}

export default function CalculationResults({ result }: Props) {
  if (!result) return null;

  const getFormattedResults = () => {
    return `Prejudgment Interest Calculation Results:
Principal Amount: ${formatCurrency(result.principalAmount)}
Statutory Rate: ${result.statutoryRate.toFixed(2)}% (Prime + 2%)
Time Period: ${formatDuration(result.timePeriodYears)}
Prejudgment Interest: ${formatCurrency(result.prejudgmentInterest)}
Total Amount: ${formatCurrency(result.totalAmount)}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Calculation Results</h2>
        <CopyButton onCopy={getFormattedResults} />
      </div>
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className="text-sm text-gray-500">Principal Amount</p>
          <p className="text-lg font-medium">{formatCurrency(result.principalAmount)}</p>
        </div>
        
        <div>
          <p className="text-sm text-gray-500">Statutory Rate (Prime + 2%)</p>
          <p className="text-lg font-medium">{result.statutoryRate.toFixed(2)}%</p>
        </div>
        
        <div>
          <p className="text-sm text-gray-500">Time Period</p>
          <p className="text-lg font-medium">{formatDuration(result.timePeriodYears)}</p>
        </div>
        
        <div>
          <p className="text-sm text-gray-500">Prejudgment Interest</p>
          <p className="text-lg font-medium text-blue-600">{formatCurrency(result.prejudgmentInterest)}</p>
        </div>
      </div>
      
      <div className="pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-500">Total Amount</p>
        <p className="text-2xl font-bold text-blue-600">{formatCurrency(result.totalAmount)}</p>
      </div>
    </div>
  );
}