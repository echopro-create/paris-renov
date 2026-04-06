import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Logo from './Logo';

describe('Logo', () => {
  it('renders with default props', () => {
    render(<Logo />);
    expect(screen.getAllByText('D.A. BAT').length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('Votre Projet, Notre Savoir-Faire')).toBeInTheDocument();
  });

  it('renders with custom iconSize', () => {
    render(<Logo iconSize={64} />);
    const svg = document.querySelector('svg');
    expect(svg).toHaveAttribute('width', '64');
    expect(svg).toHaveAttribute('height', '64');
  });

  it('applies light variant text color', () => {
    render(<Logo variant="light" />);
    const spans = screen.getAllByText('D.A. BAT');
    const textSpan = spans.find(el => el.tagName === 'SPAN');
    expect(textSpan).toHaveClass('text-white');
  });

  it('applies dark variant text color', () => {
    render(<Logo variant="dark" />);
    const spans = screen.getAllByText('D.A. BAT');
    const textSpan = spans.find(el => el.tagName === 'SPAN');
    expect(textSpan).toHaveClass('text-slate-900');
  });

  it('has accessible aria-label on SVG', () => {
    render(<Logo />);
    const svg = document.querySelector('svg');
    expect(svg).toHaveAttribute('aria-label', 'D.A. BAT — Logo balcon Haussmannien');
  });
});
