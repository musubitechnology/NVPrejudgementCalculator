export const calculateTimePeriodYears = (startDate: string, endDate: string): number => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays / 365;
};

export const calculateStatutoryRate = (primeRate: number): number => {
  return primeRate + 2;
};

export const calculatePrejudgmentInterest = (
  principalAmount: number,
  rate: number,
  timePeriodYears: number
): number => {
  return principalAmount * (rate / 100) * timePeriodYears;
};