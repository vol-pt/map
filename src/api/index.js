import { Api } from './api';
import jsonTrap from './jsonProxy';
export default new Proxy(new Api(), jsonTrap);
