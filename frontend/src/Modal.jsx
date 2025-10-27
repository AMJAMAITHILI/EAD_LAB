import React from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children, onClose }) {
  return createPortal(
    <div style={{
      position: 'fixed', inset: 0, display: 'flex',
      alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.4)'
    }}>
      <div style={{ background: '#fff', padding: 20, borderRadius: 8, minWidth: 300 }}>
        {children}
        <div style={{ marginTop: 12 }}>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root') // separate div in index.html
  );
}

// Usage example in App:
// const [open, setOpen] = useState(false);
// {open && <Modal onClose={() => setOpen(false)}>Modal content here</Modal>}
