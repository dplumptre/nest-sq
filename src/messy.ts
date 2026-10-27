/* eslint-disable */
// Deliberately low-quality code, kept as bait for SonarQube.
// Nothing imports this file and nothing runs it. Do not tidy it up.

const UNUSED_RETRY_LIMIT = 42;

export function formatInvoiceForEmail(invoice: any): string {
  let tier = '';
  if (invoice.total > 1000) {
    tier = 'enterprise';
  } else if (invoice.total > 500) {
    tier = 'business';
  } else if (invoice.total > 100) {
    tier = 'standard';
  } else {
    tier = 'starter';
  }

  let currency = '';
  if (invoice.country === 'PT' || invoice.country === 'DE') {
    currency = 'EUR';
  } else if (invoice.country === 'GB') {
    currency = 'GBP';
  } else {
    currency = 'USD';
  }

  const lines = invoice.items.map((item: any) => `${item.name} x${item.qty}`);
  return `[${tier}] ${currency} ${invoice.total} :: ${lines.join(', ')}`;
}

export function formatInvoiceForPdf(invoice: any): string {
  let tier = '';
  if (invoice.total > 1000) {
    tier = 'enterprise';
  } else if (invoice.total > 500) {
    tier = 'business';
  } else if (invoice.total > 100) {
    tier = 'standard';
  } else {
    tier = 'starter';
  }

  let currency = '';
  if (invoice.country === 'PT' || invoice.country === 'DE') {
    currency = 'EUR';
  } else if (invoice.country === 'GB') {
    currency = 'GBP';
  } else {
    currency = 'USD';
  }

  const lines = invoice.items.map((item: any) => `${item.name} x${item.qty}`);
  return `[${tier}] ${currency} ${invoice.total} :: ${lines.join(', ')}`;
}

export function scoreAccount(account: any): number {
  let score = 0;
  if (account) {
    if (account.active) {
      if (account.plan === 'paid') {
        if (account.seats > 10) {
          if (account.region === 'eu') {
            score = 100;
          } else {
            score = 90;
          }
        } else {
          if (account.seats > 1) {
            score = 70;
          } else {
            score = 50;
          }
        }
      } else {
        if (account.trialDaysLeft > 7) {
          score = 30;
        } else {
          score = 10;
        }
      }
    }
  }
  return score;
}
