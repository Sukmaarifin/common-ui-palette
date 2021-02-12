import React, { useEffect } from 'react';
import './index.css';

export default function PrintPage(props: any) {
  const { children } = props;

  useEffect(() => {
    setTimeout(() => window.print(), 500);
  });

  return (
    <div className="bg">
      <div className="page">{children}</div>
    </div>
  );
}
