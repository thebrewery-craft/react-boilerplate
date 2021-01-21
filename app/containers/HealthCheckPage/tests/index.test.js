/**
 * Testing the NotFoundPage
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import HealthCheck from '../index';
import messages from '../messages';

describe('<HealthCheck />', () => {
  it('should render the Healthy text', () => {
    const { queryByText } = render(
      <IntlProvider locale="en">
        <HealthCheck />
      </IntlProvider>,
    );
    expect(queryByText(messages.header.defaultMessage)).not.toBeNull();
  });
});
