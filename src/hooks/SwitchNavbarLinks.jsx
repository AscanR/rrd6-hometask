import React, {useContext, useState} from 'react';

const SwitchContext = React.createContext();

export const useSwitch = () => {
    return useContext(SwitchContext);
};

const SwitchNavbarLinksProvider = ({children}) => {
    const [homePage, setHomePage] = useState(true)
    const switchHomePage = () => {
        setHomePage(prevState => !prevState)
    }
    return (
          <SwitchContext.Provider value={{switchHomePage, homePage}}>
              {children}
          </SwitchContext.Provider>
    );
};

export default SwitchNavbarLinksProvider;