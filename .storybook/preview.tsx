/**
 * This program has been developed by students from the bachelor Computer Science at Utrecht University within the Software Project course.
 * © Copyright Utrecht University (Department of Information and Computing Sciences)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Preview } from '@storybook/react';
import { withThemeByClassName } from "@storybook/addon-styling";
import '../src/index.css';
import React from 'react';
import { StoryContext } from '@storybook/types';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'transparent',
      values: [
        {name: 'light', value:'#f8fafc', class: 'light'},
        {name: 'dark', value:'#0d1323', class: 'dark'},
      ],
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        // color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  // This decorator adds light/dark mode themes
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    // This decorator takes care of the background color for light/dark mode
    (Story, context) => {
        const selectedTheme = context.globals['theme'] || "";
        const color = selectedTheme === 'dark' ? '#0d1323' : '#f8fafc';
        document.body.style.background = color;
        document.documentElement.style.background = color;
        return <Story />;
    },
  ];

export default preview;