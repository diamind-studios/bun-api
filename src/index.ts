import { bibleApp } from './app/app';
import { PORT } from './common/constants';

const app = bibleApp();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
