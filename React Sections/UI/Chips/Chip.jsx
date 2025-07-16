import React from 'react';

const Chip = ({ label, onDelete }) => {
  return (
    <div style={styles.chip}>
      {label}
      <button style={styles.deleteButton} onClick={onDelete}>
        &times;
      </button>
    </div>
  );
};

const styles = {
  chip: {
    display: 'inline-block',
    padding: '0 10px',
    margin: '5px',
    backgroundColor: '#e0e0e0',
    borderRadius: '25px',
    fontSize: '14px',
  },
  deleteButton: {
    background: 'none',
    border: 'none',
    marginLeft: '8px',
    cursor: 'pointer',
    fontSize: '14px',
  },
};

export default Chip;