import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import { AppProvider } from 'store/context';
import { isMiniAppDark, retrieveLaunchParams, retrieveRawInitData, useSignal } from '@telegram-apps/sdk-react';
import { useMemo } from 'react';
import { AppRoot } from '@telegram-apps/telegram-ui';

function App() {

  const lp = useMemo(() => retrieveLaunchParams(), []);
  const isDark = useSignal(isMiniAppDark);

  const initDataRaw = retrieveRawInitData()

  console.log('initDataRaw', initDataRaw);



  return (
    <AppRoot
      appearance={isDark ? 'dark' : 'light'}
      platform={['macos', 'ios'].includes(lp.tgWebAppPlatform) ? 'ios' : 'base'}
    >
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/four-in-a-row" element={<Game />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </AppRoot>
  );
}

export default App;
