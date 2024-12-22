import React from 'react';

export const SpacingBlock = ({ height = '1rem' }) => {
  // Convert numeric values to pixels
  const processHeight = () => {
    const numValue = parseFloat(height);
    if (!isNaN(numValue)) {
      // For negative values, use margin instead of height
      if (numValue < 0) {
        return `${Math.abs(numValue) * 16}px`;
      }
      return `${numValue * 16}px`; // Convert rem to pixels (1rem = 16px)
    }
    // Handle string values with units
    if (typeof height === 'string' && height.startsWith('-')) {
      return height.substring(1); // Remove the negative sign
    }
    return height;
  };

  const style = {
    display: 'block',
    width: '100%',
    ...(height.toString().startsWith('-') 
      ? { marginTop: `-${processHeight()}` }
      : { height: processHeight() }
    ),
  };

  return <div style={style} aria-hidden="true" />;
};
