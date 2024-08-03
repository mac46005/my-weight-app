import {Container} from 'inversify';
import { Controller } from 'inversify-express-utils';
import WeightEntryController from './controllers/classes/weight-table-controller';
import ISqlTable from './database/util/interfaces/i-sql-table';
import WeightEntryTable from './database/tables/weight-entry-table';
import mysqlInfo from './database/mysql-info';
import IWeightEntry from './database/types/i-weight-entry';
import { servicesNames } from './services-names';
const container = new Container();
// Register controllers
container.bind<Controller>(WeightEntryController).toSelf();

// Register Services
container.bind<ISqlTable<IWeightEntry>>(servicesNames.WeightEntryTable).toConstantValue(new WeightEntryTable(mysqlInfo));
export default container;