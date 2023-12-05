import { Toaster } from "sonner";

import { ClerkProvider } from '@clerk/nextjs'

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <ClerkProvider>

            {/* This Layout for protect platform by Auth Providers */}
          <Toaster position="top-center" />
          {children}

      </ClerkProvider>
    );
  };
  
  export default PlatformLayout;