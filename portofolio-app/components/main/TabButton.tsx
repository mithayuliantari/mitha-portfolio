import React, { ReactNode } from 'react';

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: ReactNode;
}

const TabButton = ({ active, selectTab, children }: TabButtonProps) => {
  const buttonClasses = active
    ? 'text-white border-b border-purple-500'
    : 'text-slate-400';

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 cursor-pointer font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
