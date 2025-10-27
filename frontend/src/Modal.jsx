import React from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children, onClose }) {
  return createPortal(
    <div style={{
      position: 'fixed', inset: 0, display: 'flex',
      alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.4)'
    }}>
      <div style={{ background: "white", padding: 20, borderRadius: 5}}>
        {children}
        <div>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root') // separate div in index.htmllets React render the JSX outside the normal DOM hierarchy, so the modal appears on top of everything and is not affected by CSS z-index of parent elements.
  );
}

// Usage example in App:
// const [open, setOpen] = useState(false);
// {open && <Modal onClose={() => setOpen(false)}>Modal content here</Modal>}
