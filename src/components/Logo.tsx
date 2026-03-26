import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  type?: 'full' | 'icon';
  height?: number;
  className?: string;
}

export function Logo({
  variant = 'dark',
  type = 'full',
  height = 40,
  className = '',
}: LogoProps) {
  const isLight = variant === 'light';

  const shieldFill = isLight ? '#1D4ED8' : '#F8FAFC';
  const lambdaFill = isLight ? '#FFFFFF' : '#0F172A';
  const defFill = isLight ? '#1D4ED8' : '#F8FAFC';
  const jobsFill = isLight ? '#334155' : '#94A3B8';
  const sloganFill = isLight ? '#64748B' : '#94A3B8';

  if (type === 'icon') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120 120"
        height={height}
        className={className}
        role="img"
        aria-label="DefJobs"
      >
        <g transform="translate(60, 62)">
          <path
            d="M0,-52 C26,-52 43,-45 48,-41 L48,4 C48,28 28,46 0,56 C-28,46 -48,28 -48,4 L-48,-41 C-43,-45 -26,-52 0,-52 Z"
            fill={shieldFill}
          />
          <path
            d="M0,-32 L24,30 L15,30 L0,-17 L-15,30 L-24,30 Z"
            fill={lambdaFill}
          />
        </g>
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 520 120"
      height={height}
      className={className}
      role="img"
      aria-label="DefJobs — Defense Talent. Delivered."
    >
      <g transform="translate(56, 60)">
        <path
          d="M0,-48 C24,-48 40,-42 44,-38 L44,4 C44,26 26,42 0,52 C-26,42 -44,26 -44,4 L-44,-38 C-40,-42 -24,-48 0,-48 Z"
          fill={shieldFill}
        />
        <path
          d="M0,-30 L22,28 L14,28 L0,-16 L-14,28 L-22,28 Z"
          fill={lambdaFill}
        />
      </g>
      <text
        x="126"
        y="55"
        fontFamily="'Barlow Condensed', 'Impact', 'Arial Narrow', 'Helvetica Neue', sans-serif"
        fontWeight="700"
        fontSize="52"
        letterSpacing="2"
        fill={defFill}
        dominantBaseline="central"
      >
        DEF
      </text>
      <text
        x="230"
        y="55"
        fontFamily="'Barlow Condensed', 'Impact', 'Arial Narrow', 'Helvetica Neue', sans-serif"
        fontWeight="700"
        fontSize="52"
        letterSpacing="2"
        fill={jobsFill}
        dominantBaseline="central"
      >
        JOBS
      </text>
      <text
        x="126"
        y="90"
        fontFamily="'Barlow Condensed', 'Inter', 'Helvetica Neue', Arial, sans-serif"
        fontWeight="400"
        fontSize="12.5"
        letterSpacing="3.5"
        fill={sloganFill}
      >
        DEFENSE TALENT. DELIVERED.
      </text>
    </svg>
  );
}