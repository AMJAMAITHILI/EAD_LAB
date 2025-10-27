import React, { useState } from "react"; 
import PasswordInput from "./PasswordInput"; 
import Register from "./Register";
import StudentsPagination from "./StudentsPagination";
import Calculator from "./Calculator";
import LoginForm from "./LoginForm";
import PasswordConfirm from "./PasswordConfirm";
import PasswordChecklist from "./PasswordChecklist";
import Modal from './Modal';
import GreetApp from "./GreetApp";
import ProductApp from "./ProductApp"; 
import InfoStatusApp from "./InfoStatusApp";
function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <PasswordInput />
      <br /><br />
      <Register />
      <br /><br />
      <StudentsPagination />
      <br /><br />
      <Calculator />
      <br /><br />
      <LoginForm />
      <br /><br />
      <PasswordConfirm />
      <br /><br />
      <PasswordChecklist />
      <br /><br />
      {/* Button to open modal */}
      <button onClick={() => setModalOpen(true)}>Open Modal</button>

      {/* Modal rendered via portal */}
      {modalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <h2>Hello!</h2>
          <p>This is content inside the modal.</p>
        </Modal>)}
        <br /><br />
        <GreetApp />;
        <br /><br />
        <ProductApp />;
        <br /><br />
        <InfoStatusApp />;
    </div>
    
    

  );
}

export default App;
