import { ReportingService } from './reporting.service';

describe('ReportingService', () => {
  const service = new ReportingService();

  it('sums the values', () => {
    expect(service.computeTotal([1, 2, 3])).toBe(6);
  });

  it('sums an empty list to zero', () => {
    expect(service.computeTotal([])).toBe(0);
  });

  it('describes a paid status as done', () => {
    expect(service.describeStatus('paid')).toBe('done');
  });

  it('describes anything else as pending', () => {
    expect(service.describeStatus('refunded')).toBe('pending');
  });

  it('compares totals', () => {
    expect(service.isSameTotal(2, 2)).toBe(true);
    expect(service.isSameTotal(1, 2)).toBe(false);
  });

  it('reports no api token when the env var is unset', () => {
    expect(service.hasApiToken()).toBe(false);
  });
});
