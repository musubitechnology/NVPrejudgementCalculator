import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface Props {
  onCopy: () => string;
}

export default function CopyButton({ onCopy }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = onCopy();
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1 px-3 py-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
      title="Copy to clipboard"
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 text-green-500" />
          <span className="text-green-500">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          <span>Copy</span>
        </>
      )}
    </button>
  );
}