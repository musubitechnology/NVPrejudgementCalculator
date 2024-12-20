import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function StatuteInfo() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">NRS Prejudgment Interest Calculation</h2>
      
      <div className="border-t border-gray-200 pt-6">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full text-left text-sm text-gray-600 hover:text-gray-900"
        >
          <span className="font-medium">NV Rev Stat § 17.130 (2023)</span>
          {isExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
        
        {isExpanded && (
          <div className="mt-4 prose prose-sm text-gray-600 space-y-2">
            <p>1. In all judgments and decrees, rendered by any court of justice, for any debt, damages or costs, and in all executions issued thereon, the amount must be computed, as near as may be, in dollars and cents, rejecting smaller fractions, and no judgment, or other proceedings, may be considered void because of such rejection.</p>
            
            <p>2. When no rate of interest is provided by contract or otherwise by law, or specified in the judgment, the judgment draws interest from the time of service of the summons and complaint until satisfied, except for any amount representing future damages, which draws interest only from the time of the entry of the judgment until satisfied, at a rate equal to the prime rate at the largest bank in Nevada as ascertained by the Commissioner of Financial Institutions on January 1 or July 1, as the case may be, immediately preceding the date of judgment, plus 2 percent. The rate must be adjusted accordingly on each January 1 and July 1 thereafter until the judgment is satisfied.</p>
          </div>
        )}
      </div>
    </div>
  );
}