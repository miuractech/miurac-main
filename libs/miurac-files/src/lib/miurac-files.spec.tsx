import { render } from '@testing-library/react';

import MiuracFiles from './miurac-files';

describe('MiuracFiles', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MiuracFiles />);
    expect(baseElement).toBeTruthy();
  });
});
