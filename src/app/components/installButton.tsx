import { Button } from '@/components/ui/button';
import { CloudDownload } from 'lucide-react';
import { useEffect, useState } from 'react';

// Define proper interface for BeforeInstallPromptEvent
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

// Extend Window interface to include beforeinstallprompt
declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

interface InstallButtonProps {
  className?: string;
  disabled?: boolean;
  onInstallSuccess?: () => void;
  onInstallError?: (error: Error) => void;
}

const InstallButton: React.FC<InstallButtonProps> = ({
  className = "install-button rounded-[20px] border-2",
  disabled = false,
  onInstallSuccess,
  onInstallError
}) => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState<boolean>(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent): void => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async (): Promise<void> => {
    if (!deferredPrompt) {
      console.warn('No deferred prompt available');
      return;
    }

    try {
      // Show the install prompt
      await deferredPrompt.prompt();
      
      // Wait for user response
      const { outcome } = await deferredPrompt.userChoice;
      
      console.log(`User response to the install prompt: ${outcome}`);
      
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
        onInstallSuccess?.();
      } else {
        console.log('User dismissed the install prompt');
      }
      
      // Reset state
      setDeferredPrompt(null);
      setIsInstallable(false);
      
    } catch (error) {
      console.error('Error during install prompt:', error);
      onInstallError?.(error instanceof Error ? error : new Error('Unknown install error'));
    }
  };

  // Don't render if not installable
  if (!isInstallable) {
    return null;
  }

  return (
    <Button 
      onClick={handleInstallClick} 
      className={className}
      disabled={disabled || !deferredPrompt}
      type="button"
      variant={'outline'}
    >
      Install App <CloudDownload />
    </Button>
  );
};

export default InstallButton;