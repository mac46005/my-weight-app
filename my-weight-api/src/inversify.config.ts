import {Container} from 'inversify';
import { Controller } from 'inversify-express-utils';
import WeightEntryController from './controllers/weight-table-controller';

const container = new Container();
// Register controllers
container.bind<Controller>(WeightEntryController).toSelf();
export default container;