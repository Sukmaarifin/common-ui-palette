import React, { useEffect } from 'react';
import './priusPrintPage.css';

export default function PriusPrintPage(props: any) {
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
