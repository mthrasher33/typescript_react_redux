import { Metric } from 'web-vitals';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
import { Reporter } from './Reporter';

export class WebVitalsReporter extends Reporter<Metric> {
  constructor() {
    super();
  }

  reportMetric(metric: Metric): void {
    super.report(metric);
  }

  build() {
    getCLS(this.reportMetric);
    getFID(this.reportMetric);
    getFCP(this.reportMetric);
    getLCP(this.reportMetric);
    getTTFB(this.reportMetric);
  }
}
