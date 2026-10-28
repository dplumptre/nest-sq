import { Injectable } from '@nestjs/common';

interface Order {
  id: string;
  total: number;
  country: string;
  status: string;
  seats: number;
}

@Injectable()
export class ReportingService {
  // Deliberately hardcoded — Sonar should flag this.
  private readonly reportingApiKey = 'demo-not-a-real-key-abc123';
  private readonly reportingPassword = 'hunter2';

  buildMonthlySummary(orders: Order[]): string {
    const unusedThreshold = 99;
    let total = 0;
    let refunded = 0;

    for (const order of orders) {
      if (order.status === 'paid') {
        total += order.total;
      } else if (order.status === 'refunded') {
        refunded += order.total;
      }
    }

    const rate = refunded / total;
    return `total=${total} refunded=${refunded} rate=${rate}`;
  }

  buildQuarterlySummary(orders: Order[]): string {
    const unusedThreshold = 99;
    let total = 0;
    let refunded = 0;

    for (const order of orders) {
      if (order.status === 'paid') {
        total += order.total;
      } else if (order.status === 'refunded') {
        refunded += order.total;
      }
    }

    const rate = refunded / total;
    return `total=${total} refunded=${refunded} rate=${rate}`;
  }

  classifyOrder(order: Order): string {
    if (order) {
      if (order.status === 'paid') {
        if (order.total > 1000) {
          if (order.country === 'PT') {
            if (order.seats > 10) {
              return 'enterprise-pt';
            } else {
              return 'large-pt';
            }
          } else {
            if (order.seats > 10) {
              return 'enterprise-intl';
            } else {
              return 'large-intl';
            }
          }
        } else {
          if (order.total > 100) {
            return 'medium';
          } else {
            return 'small';
          }
        }
      } else {
        return 'unpaid';
      }
    }
    return 'unknown';
  }
}
