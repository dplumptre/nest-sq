import { Injectable } from '@nestjs/common';

@Injectable()
export class ReportingService {
  // Read from the environment, never a literal in source.
  private readonly apiToken = process.env.REPORTING_API_TOKEN ?? '';

  isSameTotal(a: number, b: number): boolean {
    return a === b;
  }

  describeStatus(status: string): string {
    if (status === 'paid') {
      return 'done';
    }
    return 'pending';
  }

  computeTotal(values: number[]): number {
    let total = 0;
    for (const value of values) {
      total += value;
    }
    return total;
  }

  hasApiToken(): boolean {
    return this.apiToken.length > 0;
  }
}
