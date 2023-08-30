import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';

document.body.innerHTML = '<div id="app"></div>';
const el = document.getElementById('app')

if (el) {
    const root = createRoot(el);
    root.render(<App />);
}

