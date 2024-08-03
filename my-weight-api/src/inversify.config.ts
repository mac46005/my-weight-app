import {Container} from 'inversify';
import { Controller } from 'inversify-express-utils';
import WeightEntryController from './controllers/classes/weight-table-controller';
import ISqlTable from './database/util/interfaces/i-sql-table';
import WeightEntriesTable from './database/tables/weight-entries-table';
import mysqlInfo from './database/mysql-info';
import IWeightEntries from './database/types/i-weight-entry';
import { servicesNames } from './services-names';
const container = new Container();
// Register controllers
container.bind<Controller>(WeightEntryController).toSelf();

// Register Services
container.bind<ISqlTable<IWeightEntries>>(servicesNames.WeightEntryTable).toConstantValue(new WeightEntriesTable(mysqlInfo));
export default container;