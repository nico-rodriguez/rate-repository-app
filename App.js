import Main from './src/components/Main';
import AppProvider from './src/providers/AppProvider';

export default function App() {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
}
