import { useState, useContext, createContext } from 'react';
import { GlobalAlert } from '../components';

const GlobalContext = createContext();

function AlertProvider({ children }) {
  const [options, setOptions] = useState({
    title: '',
    type: 'success', // success, error, warning, question
    open: false,
    text: '',
    confirmButton: () => {}
  });

  const handleClose = () => {
    options.confirmButton();
    setOptions({ ...options, open: false });
  };

  const { title, type, text, open } = options;

  return (
    <GlobalContext.Provider value={[options, setOptions]}>
      <GlobalAlert
        title={title}
        open={open}
        type={type}
        text={text}
        close={handleClose}
      />
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalAlert = () => useContext(GlobalContext);

export default AlertProvider;