import { motion } from 'framer-motion';
import { Delete, X, Space } from 'lucide-react';

interface VirtualKeyboardProps {
  onKeyPress: (key: string) => void;
  onBackspace: () => void;
  onClear: () => void;
  disabled?: boolean;
}

export function VirtualKeyboard({ onKeyPress, onBackspace, onClear, disabled = false }: VirtualKeyboardProps) {
  const keys = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
  ];

  return (
    <div className="w-full max-w-lg mt-4">
      {keys.map((row, rowIndex) => (
        <motion.div
          key={rowIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: rowIndex * 0.1 }}
          className="flex justify-center gap-1 mb-1"
        >
          {row.map((key) => (
            <button
              key={key}
              onClick={() => onKeyPress(key)}
              disabled={disabled}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded bg-emerald-100 dark:bg-emerald-800/80 text-emerald-900 dark:text-emerald-100 font-medium hover:bg-emerald-200 dark:hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {key}
            </button>
          ))}
        </motion.div>
      ))}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex justify-center gap-1 mt-1"
      >
        <button
          onClick={onBackspace}
          disabled={disabled}
          className="px-4 h-8 sm:h-10 rounded bg-emerald-200 dark:bg-emerald-700/80 text-emerald-900 dark:text-emerald-100 font-medium hover:bg-emerald-300 dark:hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
        >
          <Delete className="w-4 h-4" />
          <span className="hidden sm:inline">Backspace</span>
        </button>
        
        <button
          onClick={() => onKeyPress(' ')}
          disabled={disabled}
          className="px-4 h-8 sm:h-10 rounded bg-emerald-200 dark:bg-emerald-700/80 text-emerald-900 dark:text-emerald-100 font-medium hover:bg-emerald-300 dark:hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
        >
          <Space className="w-4 h-4" />
          <span className="hidden sm:inline">Space</span>
        </button>
        
        <button
          onClick={onClear}
          disabled={disabled}
          className="px-4 h-8 sm:h-10 rounded bg-emerald-200 dark:bg-emerald-700/80 text-emerald-900 dark:text-emerald-100 font-medium hover:bg-emerald-300 dark:hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
        >
          <X className="w-4 h-4" />
          <span className="hidden sm:inline">Clear</span>
        </button>
      </motion.div>
    </div>
  );
}