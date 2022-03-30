import React, {
  createContext,
  lazy,
  Suspense,
  useContext,
  useMemo,
  useState,
} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import "./App.scss";
import { Box, Container, IconButton } from "@mui/material";
import { Brightness4Rounded, Brightness7Rounded } from "@mui/icons-material";
import { orange } from "@mui/material/colors";
import Loading from "./layouts/loading";
import Footer from "./layouts/footer";

const Login = lazy(() => import("./pages/login"));
const Register = lazy(() => import("./pages/register"));
const Settings = lazy(() => import("./pages/settings"));
const Page404 = lazy(() => import("./pages/page-400"));
const Page500 = lazy(() => import("./pages/page-500"));

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

// const App = () => {
//   const [mode, setMode] = useState('light');

//   const colorMode = useMemo(() => ({
//     toggleColorMode: () => {
//       setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
//     },
//   }), []);

//   const theme = useMemo(() => createTheme({
//     palette: {
//       mode,
//       ...(mode === 'light'
//         ? {
//           background: {
//             default: '#fff',
//           }
//         }
//         : {
//           background: {
//             default: '#23272d',
//           },
//         }),
//     },
//   }), [mode]);

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <Suspense fallback={<div>Loading ...</div>}>
//           <Box
//             sx={{
//               display: 'flex',
//               width: '100%',
//               height: '100vh',
//               alignItems: 'center',
//               justifyContent: 'center',
//               bgcolor: 'background.default',
//               color: 'text.primary',
//               borderRadius: 0,
//               p: 3,
//             }}
//           >
//             <BrowserRouter>
//               <Container>

//               </Container>
//               <Routes>
//                 <Route path='/' element={<Home />} />
//                 <Route path='home' element={<Home />} />
//                 <Route path='profile' element={<Profile />} />
//                 <Route path='settings' element={<Settings />} />
//               </Routes>
//             </BrowserRouter>
//           </Box>
//         </Suspense>
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" title="Login" element={<Login />} />
          <Route
            exact
            path="/register"
            name="Register"
            element={<Register />}
          />
          <Route
            exact
            path="/settings"
            name="Settings"
            element={<Settings />}
          />
          <Route exact path="/page404" name="Page 404" element={<Page404 />} />
          <Route exact path="/page500" name="Page 500" element={<Page500 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Suspense>
  );
};

export default App;
