import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Kullanıcı bilgilerini tutar

  const loginUser = (userData) => {
    setUser(userData); // Kullanıcı bilgilerini günceller
  };

  const logoutUser = () => {
    setUser(null); // Kullanıcı çıkış yaparsa bilgileri sıfırlar
  };

  return (
    <AppContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </AppContext.Provider>
  );
};