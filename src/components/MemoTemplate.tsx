import React from 'react';
import { CalculationResult } from '../types/calculator';
import { formatCurrency, formatDate, formatDuration } from '../utils/formatters';
import CopyButton from './CopyButton';

interface Props {
  result: CalculationResult | null;
  inputs: {
    startDate: string;
    endDate: string;
    primeRate: number;
  };
}

export default function MemoTemplate({ result, inputs }: Props) {
  if (!result) return null;

  const getMemoText = () => {
    return `This memo summarizes the prejudgment interest calculation based on the details provided for the case. Below are the results:

Calculation Details
Principal Amount: ${formatCurrency(result.principalAmount)}
Start Date: ${formatDate(new Date(inputs.startDate))}
End Date: ${formatDate(new Date(inputs.endDate))}
Time Period: ${formatDuration(result.timePeriodYears)}
Prime Rate (on Judgment Date): ${inputs.primeRate}%
Statutory Interest Rate: ${result.statutoryRate}%

Results
Prejudgment Interest: ${formatCurrency(result.prejudgmentInterest)}
Total Amount Owed (Principal + Interest): ${formatCurrency(result.totalAmount)}

This calculation assumes a simple interest formula in accordance with Nevada Revised Statutes (NRS 17.130), which stipulates a statutory interest rate of 2% above the prime rate.

If you have any questions or need further assistance, please don't hesitate to reach out.`;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Memo</h2>
        <CopyButton onCopy={getMemoText} />
      </div>
      <div className="prose prose-sm max-w-none">
        <pre className="whitespace-pre-wrap font-sans text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          {getMemoText()}
        </pre>
      </div>
    </div>
  );
}