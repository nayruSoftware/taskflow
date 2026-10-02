// Higher cohesion: related responsibilities have clearer boundaries.
export const authentication = { authenticateUser() {} };
export const email = { sendEmail() {} };
export const billing = { calculateTax() {}, generateInvoice() {} };
export const dates = { formatDate() {} };
