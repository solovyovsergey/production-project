import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'shared/config/i18n/i18n';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import App from 'app/App';

const node = document.getElementById('root');

// TODO так как ошибка монтируется за пределами App, для нее не подгружаются стили тем
// TODO по той же причине не работают переводы.
render(
  <ErrorBoundary>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </ErrorBoundary>,
  node,
);
