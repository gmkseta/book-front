import React, { useEffect } from "react";
import { gql } from "apollo-boost";
import { ThemeProvider } from "styled-components";
import { useQuery } from "react-apollo-hooks";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Layout from '../Routes/Layout'
import routes from './Routes'
import { App, f7 } from 'framework7-react';


const QUERY = gql`
  {
    isLoggedIn @client
  }
`;




export default () => {
  const {
    data: { isLoggedIn }
  } = useQuery(QUERY);

  const f7Params = {
    id: 'io.framework7.testapp',
    theme: 'ios',
    routes: routes(isLoggedIn)(),
  }
  useEffect(()=>{
    f7.notiToast = f7.toast.create({ 
      position: 'center',
      closeTimeout: 2000,
      on: {
        closed: (toast)=>{
          toast.params = {
            icon: null, text: null, position: "center",
            closeButton: false, closeButtonColor: null, closeButtonText: "Ok",
            closeTimeout: 2000, cssClass: null, render: null,
          }
        }
      }
    })
  })
  
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <App params={ f7Params }>
          <Layout isLoggedIn={ isLoggedIn } />
        </App>
      </>
    </ThemeProvider>
  )
};

