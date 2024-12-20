export interface CalculatorInputs {
  principalAmount: number;
  startDate: string;
  endDate: string;
  primeRate: number;
  useCustomRate: boolean;
  customRate?: number;
}

export interface CalculationResult {
  principalAmount: number;
  statutoryRate: number;
  timePeriodYears: number;
  prejudgmentInterest: number;
  totalAmount: number;
}