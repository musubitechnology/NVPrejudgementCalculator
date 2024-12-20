import React from 'react';
import { ExternalLink } from 'lucide-react';
import { CalculatorInputs } from '../types/calculator';

interface Props {
  inputs: CalculatorInputs;
  onInputChange: (name: keyof CalculatorInputs, value: any) => void;
}

export default function CalculatorForm({ inputs, onInputChange }: Props) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="principalAmount" className="block text-sm font-medium text-gray-700">
            Principal Amount ($)
          </label>
          <input
            type="number"
            id="principalAmount"
            value={inputs.principalAmount || ''}
            onChange={(e) => onInputChange('principalAmount', parseFloat(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            min="0"
            step="0.01"
            required
          />
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="primeRate" className="block text-sm font-medium text-gray-700">
              Prime Rate (%)
            </label>
            <a
              href="https://www.washoecourts.com/TopRequests/InterestRates"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:text-blue-500 flex items-center gap-1"
            >
              Check Current Rate <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <input
            type="number"
            id="primeRate"
            value={inputs.primeRate || ''}
            onChange={(e) => onInputChange('primeRate', parseFloat(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            min="0"
            step="0.01"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            value={inputs.startDate}
            onChange={(e) => onInputChange('startDate', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            value={inputs.endDate}
            onChange={(e) => onInputChange('endDate', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="useCustomRate"
            checked={inputs.useCustomRate}
            onChange={(e) => onInputChange('useCustomRate', e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="useCustomRate" className="ml-2 block text-sm text-gray-700">
            Use Custom Interest Rate
          </label>
        </div>

        {inputs.useCustomRate && (
          <div className="mt-4">
            <label htmlFor="customRate" className="block text-sm font-medium text-gray-700">
              Custom Rate (%)
            </label>
            <input
              type="number"
              id="customRate"
              value={inputs.customRate || ''}
              onChange={(e) => onInputChange('customRate', parseFloat(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              min="0"
              step="0.01"
              required
            />
          </div>
        )}
      </div>
    </div>
  );
}