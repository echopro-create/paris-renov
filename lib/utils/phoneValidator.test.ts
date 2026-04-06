import { describe, it, expect } from 'vitest';
import { isValidFrenchPhone, formatPhoneForDisplay, normalizePhone } from './phoneValidator';

describe('phoneValidator', () => {
  describe('isValidFrenchPhone', () => {
    it('validates French domestic format (0X XX XX XX XX)', () => {
      expect(isValidFrenchPhone('06 12 34 56 78')).toBe(true);
      expect(isValidFrenchPhone('01 23 45 67 89')).toBe(true);
      expect(isValidFrenchPhone('0712345678')).toBe(true);
    });

    it('validates French international format (+33)', () => {
      expect(isValidFrenchPhone('+33612345678')).toBe(true);
      expect(isValidFrenchPhone('+33 6 12 34 56 78')).toBe(true);
    });

    it('validates 0033 format', () => {
      expect(isValidFrenchPhone('0033612345678')).toBe(true);
    });

    it('rejects invalid numbers', () => {
      expect(isValidFrenchPhone('123')).toBe(false);
      expect(isValidFrenchPhone('0012345678')).toBe(false);
      expect(isValidFrenchPhone('')).toBe(false);
      expect(isValidFrenchPhone('abcdef')).toBe(false);
    });

    it('rejects numbers starting with 0', () => {
      expect(isValidFrenchPhone('00 12 34 56 78')).toBe(false);
    });
  });

  describe('formatPhoneForDisplay', () => {
    it('formats domestic number correctly', () => {
      expect(formatPhoneForDisplay('0612345678')).toBe('06 12 34 56 78');
    });

    it('formats +33 international number', () => {
      expect(formatPhoneForDisplay('+33612345678')).toBe('06 12 34 56 78');
    });

    it('formats 0033 international number', () => {
      expect(formatPhoneForDisplay('0033612345678')).toBe('06 12 34 56 78');
    });

    it('returns original value for unrecognizable format', () => {
      expect(formatPhoneForDisplay('123')).toBe('123');
    });
  });

  describe('normalizePhone', () => {
    it('normalizes domestic to international', () => {
      expect(normalizePhone('0612345678')).toBe('+33612345678');
    });

    it('keeps +33 format as is', () => {
      expect(normalizePhone('+33612345678')).toBe('+33612345678');
    });

    it('converts 0033 to +33', () => {
      expect(normalizePhone('0033612345678')).toBe('+33612345678');
    });
  });
});
