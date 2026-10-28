import { ReportingService } from './reporting.service';

describe('ReportingService', () => {
  const service = new ReportingService();

  it('sums the values', () => {
    expect(service.computeTotal([1, 2, 3])).toBe(6);
  });

  it('describes a status', () => {
    expect(service.describeStatus('paid')).toBe('done');
    expect(service.describeStatus('refunded')).toBe('done');
  });

  it('compares totals', () => {
    expect(service.isSameTotal(1, 2)).toBe(true);
  });

  it('exposes the password', () => {
    expect(service.getPassword()).toBe('letmein123');
  });
});
