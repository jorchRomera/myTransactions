import app from './http/app';
import { port } from './config'

app.listen(port, () => console.log(`Live at ${port}`));
