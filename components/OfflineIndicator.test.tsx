import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import OfflineIndicator from './OfflineIndicator';

describe('OfflineIndicator', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('does not render when online', () => {
    vi.spyOn(window.navigator, 'onLine', 'get').mockReturnValue(true);
    render(<OfflineIndicator />);
    expect(screen.queryByText(/hors ligne/)).not.toBeInTheDocument();
  });

  it('renders when offline', () => {
    vi.spyOn(window.navigator, 'onLine', 'get').mockReturnValue(false);
    render(<OfflineIndicator />);
    expect(screen.getByText(/hors ligne/)).toBeInTheDocument();
  });

  it('shows correct message', () => {
    vi.spyOn(window.navigator, 'onLine', 'get').mockReturnValue(false);
    render(<OfflineIndicator />);
    expect(screen.getByText('Vous êtes hors ligne. Mode lecture seul activé.')).toBeInTheDocument();
  });

  it('responds to online/offline events', () => {
    vi.spyOn(window.navigator, 'onLine', 'get').mockReturnValue(true);
    render(<OfflineIndicator />);
    expect(screen.queryByText(/hors ligne/)).not.toBeInTheDocument();

    vi.spyOn(window.navigator, 'onLine', 'get').mockReturnValue(false);
    fireEvent(window, new Event('offline'));
    expect(screen.getByText(/hors ligne/)).toBeInTheDocument();
  });
});
