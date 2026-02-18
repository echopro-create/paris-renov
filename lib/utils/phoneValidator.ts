/**
 * Phone validation utility for French phone numbers
 * Supports: +33 X XX XX XX XX, 0X XX XX XX XX, international formats
 */

/**
 * Validate French phone number
 * Returns true if valid French mobile or landline number
 */
export function isValidFrenchPhone(phone: string): boolean {
  // Remove all spaces, dashes, dots and parentheses
  const cleaned = phone.replace(/[\s\-.()]/g, '');
  
  // Check if it matches French phone number patterns
  // Pattern 1: +33 followed by 9 digits (without leading 0)
  const internationalPattern = /^\+33[1-9]\d{8}$/;
  
  // Pattern 2: 0033 followed by 9 digits (without leading 0)
  const zeroZeroPattern = /^0033[1-9]\d{8}$/;
  
  // Pattern 3: 0 followed by 9 digits (French domestic format)
  const domesticPattern = /^0[1-9]\d{8}$/;
  
  return (
    internationalPattern.test(cleaned) ||
    zeroZeroPattern.test(cleaned) ||
    domesticPattern.test(cleaned)
  );
}

/**
 * Format phone number for display
 * Converts to French format: 0X XX XX XX XX
 */
export function formatPhoneForDisplay(phone: string): string {
  // Remove all non-digit characters except +
  const cleaned = phone.replace(/[\s\-.()]/g, '');
  
  // Handle international format
  if (cleaned.startsWith('+33')) {
    const digits = cleaned.slice(3);
    return formatFrenchDomestic(digits);
  }
  
  if (cleaned.startsWith('0033')) {
    const digits = cleaned.slice(4);
    return formatFrenchDomestic(digits);
  }
  
  if (cleaned.startsWith('0') && cleaned.length === 10) {
    return formatFrenchDomestic(cleaned.slice(1));
  }
  
  return phone;
}

/**
 * Format 9 digits as French phone number
 */
function formatFrenchDomestic(digits: string): string {
  if (digits.length !== 9) return digits;
  
  // Add leading 0
  const withZero = '0' + digits;
  
  // Format as 0X XX XX XX XX
  return withZero.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
}

/**
 * Normalize phone number for storage/API
 * Returns international format: +33XXXXXXXXX
 */
export function normalizePhone(phone: string): string {
  const cleaned = phone.replace(/[\s\-.()]/g, '');
  
  if (cleaned.startsWith('+33')) {
    return cleaned;
  }
  
  if (cleaned.startsWith('0033')) {
    return '+' + cleaned;
  }
  
  if (cleaned.startsWith('0') && cleaned.length === 10) {
    return '+33' + cleaned.slice(1);
  }
  
  return phone;
}
