export const formatCurrency = (amount: number): string => {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

export const formatDuration = (years: number): string => {
  const wholeYears = Math.floor(years);
  const remainingDays = Math.round((years - wholeYears) * 365);
  
  const yearText = wholeYears === 1 ? 'year' : 'years';
  const dayText = remainingDays === 1 ? 'day' : 'days';
  
  return `${years.toFixed(2)} years (${wholeYears} ${yearText}, ${remainingDays} ${dayText})`;
};

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
};