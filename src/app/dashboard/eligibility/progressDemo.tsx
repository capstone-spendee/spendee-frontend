'use client';

import * as React from 'react';

import { Progress } from '@/components/ui/progress';

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(12);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(12), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress
      value={progress}
      className="w-[20%] "
    />
  );
}
