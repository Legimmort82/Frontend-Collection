import React, { useState } from 'react';

const Tooltip = ({ children, text }) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => {
    setVisible(true);
  };

  const hideTooltip = () => {
    setVisible(false);
  };

  return (
    <div style={styles.container} onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
      {visible && <div style={styles.tooltip}>{text}</div>}
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    display: 'inline-block',
  },
  tooltip: {
    position: 'absolute',
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginBottom: '8px',
    padding: '5px 10px',
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: '4px',
    whiteSpace: 'nowrap',
    fontSize: '12px',
  },
};

export default Tooltip;