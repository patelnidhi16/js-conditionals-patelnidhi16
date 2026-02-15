/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */

const STRENGTH = ["weak", "medium", "strong", "very strong"];
export function checkPasswordStrength(password) {
  if (typeof password !== "string") {
    return STRENGTH[0];
  }

  const trimPass = password.trim();
  if (!trimPass) {
    return STRENGTH[0];
  }

  // let count = 0;

  // if (trimPass.length >= 8) count++;
  // if (/[A-Z]/.test(trimPass)) count++;
  // if (/[a-z]/.test(trimPass)) count++;
  // if (/[0-9]/.test(trimPass)) count++;
  // if (/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(trimPass)) count++;
  const arr = [
    trimPass.length >= 8,
    /[A-Z]/.test(trimPass),
    /[a-z]/.test(trimPass),
    /[0-9]/.test(trimPass),
    /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(trimPass),
  ];

  const count = arr.filter(Boolean).length;
  if (count <= 1) return STRENGTH[0];
  if (count <= 3) return STRENGTH[1];
  if (count === 4) return STRENGTH[2];
  return STRENGTH[3];
}
