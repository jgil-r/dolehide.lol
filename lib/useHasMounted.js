import * as React from 'react';

export function useHasMounted() {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => setHasMounted(!hasMounted), []);

  return hasMounted;
}
