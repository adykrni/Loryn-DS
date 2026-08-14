import type { Preview } from '@storybook/nextjs-vite'
import { TooltipProvider } from "@/components/ui/tooltip"
import { geistMono, notoSansDisplay } from "@/lib/fonts"

import "../src/app/globals.css"

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={`${notoSansDisplay.variable} ${geistMono.variable} font-sans antialiased`}>
        <TooltipProvider>
          <Story />
        </TooltipProvider>
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;