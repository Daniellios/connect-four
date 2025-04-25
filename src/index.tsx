import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Root } from 'Root'
import { retrieveLaunchParams } from '@telegram-apps/sdk-react';
import './mockEnv.ts';
import { init } from 'init.ts';
import { EnvUnsupported } from 'components/EnvUnsupported.tsx';

const root = ReactDOM.createRoot(document.getElementById('root')!);


try {
  const launchParams = retrieveLaunchParams();
  const { tgWebAppPlatform: platform } = launchParams;
  const debug = (launchParams.tgWebAppStartParam || '').includes('platformer_debug')
    || import.meta.env.DEV;

  // Configure all application dependencies.
  await init({
    debug,
    eruda: debug && ['ios', 'android'].includes(platform),
    mockForMacOS: platform === 'macos',
  })
    .then(() => {
      root.render(
        <Root />
      );
    });
} catch (e) {
  root.render(<EnvUnsupported />);
}