import { registerInstrumentations } from '@opentelemetry/instrumentation';
import {
  BatchSpanProcessor,
  WebTracerProvider,
} from '@opentelemetry/sdk-trace-web';
import { getWebAutoInstrumentations } from '@opentelemetry/auto-instrumentations-web';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { Resource } from '@opentelemetry/resources';
import { B3InjectEncoding, B3Propagator } from '@opentelemetry/propagator-b3';
import { ZoneContextManager } from '@opentelemetry/context-zone';
import {
  SEMRESATTRS_DEPLOYMENT_ENVIRONMENT,
  SEMRESATTRS_SERVICE_NAME,
} from '@opentelemetry/semantic-conventions';
import { environment } from './environments/environment';

const resource = Resource.default().merge(
  new Resource({
    [SEMRESATTRS_SERVICE_NAME]: environment.appName,
    [SEMRESATTRS_DEPLOYMENT_ENVIRONMENT]: environment.environmentName,
  })
);

const provider = new WebTracerProvider({
  resource,
});

provider.addSpanProcessor(
  new BatchSpanProcessor(
    new OTLPTraceExporter({
      url: `${environment.otlpEndpoint}/v1/traces`,
    })
  )
);

provider.register({
  propagator: new B3Propagator({
    injectEncoding: B3InjectEncoding.MULTI_HEADER,
  }),
  contextManager: new ZoneContextManager(),
});

registerInstrumentations({
  instrumentations: [
    getWebAutoInstrumentations({
      '@opentelemetry/instrumentation-document-load': {},
      '@opentelemetry/instrumentation-user-interaction': {},
      '@opentelemetry/instrumentation-fetch': {
        propagateTraceHeaderCorsUrls: /.+/,
      },
      '@opentelemetry/instrumentation-xml-http-request': {
        propagateTraceHeaderCorsUrls: /.+/,
      },
    }),
  ],
});
