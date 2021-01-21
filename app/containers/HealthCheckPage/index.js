/**
 * HealthCheckPage
 *
 * This is the page we show when performing health check
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';

export default function HealthCheck() {
  return (
    <article>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
    </article>
  );
}
