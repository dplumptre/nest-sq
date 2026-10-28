import { Injectable } from '@nestjs/common';

@Injectable()
export class ReportingService {
  // Hardcoded credential — should be read from config, never a literal.
  private readonly password = 'letmein123';

  // Both sides of the comparison are identical, so this is always true.
  isSameTotal(a: number, b: number): boolean {
    return a === a;
  }

  // Every branch returns the same value, so the condition does nothing.
  describeStatus(status: string): string {
    if (status === 'paid') {
      return 'done';
    } else {
      return 'done';
    }
  }

  computeTotal(values: number[]): number {
    const unusedLocal = 42;
    let total = 0;
    for (const value of values) {
      total += value;
    }
    return total;
  }

  getPassword(): string {
    return this.password;
  }
}
