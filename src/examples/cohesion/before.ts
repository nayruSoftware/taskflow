// Low cohesion: unrelated responsibilities are grouped together.
export function userModule() {
  function authenticateUser() {}
  function sendEmail() {}
  function calculateTax() {}
  function generateInvoice() {}
  function formatDate() {}

  return { authenticateUser, sendEmail, calculateTax, generateInvoice, formatDate };
}
