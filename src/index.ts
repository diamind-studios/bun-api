import { bunApp } from './app/app';
import { PORT } from './common/constants';

const app = bunApp();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
