import React, { useContext, useEffect, useState } from 'react';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import ThemeContext from './context/ThemeContext';
import "./App.css"

function App() {
      const { theme, setTheme } = useContext(ThemeContext);
      const [alert, setAlert] = useState(null);
      useEffect(() => {
            localStorage.setItem('textutils', JSON.stringify(theme))
            theme ? document.title = 'Text Convator - LightMode' : document.title = 'Text Convator - DarkMode';

            setTimeout(() => {
                  document.title = "Text Convator Is Amazing App!"
            }, 1000);

            setTimeout(() => {
                  document.title = "Download Text Convator!"
            }, 15000);
      }, [theme])
      const toggletheme = () => {
            setTheme(!theme)
      }

      const showalert = (message, type) => {
            setAlert({
                  msg: message,
                  type: type
            })
            setTimeout(() => {
                  setAlert(null)
            }, 2000);
      }
      return (
            <div className={theme ? "light" : "dark"}>
                  <Navbar toggle={toggletheme} theme={theme} />
                  <Alert alert={alert} />
                  <TextForm showalert={showalert} />
            </div>
      )
}




export default App
