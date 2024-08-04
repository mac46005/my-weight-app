import {Container} from 'inversify';
import { Controller } from 'inversify-express-utils';
import ISqlTable from './database/util/interfaces/i-sql-table';
import mysqlInfo from './database/mysql-info';
import { servicesNames } from './services-names';
import WeightEntriesTable from './database/tables/weight-entries-table';
import IWeightEntry from './database/types/i-weight-entry';
import IUser from './database/types/i-user';
import UsersTable from './database/tables/users-table';
import { ErrorHandlerMiddleware } from './middleware/error-handler-middleware';
import UsersController from './controllers/classes/users-controller';
const container = new Container();
// Register controllers
container.bind<Controller>(WeightEntriesTable).toSelf();
container.bind<Controller>(UsersController).toSelf();
// Register Services
container.bind<ISqlTable<IUser>>(servicesNames.UsersTable).toConstantValue(new UsersTable(mysqlInfo));

container.bind<ISqlTable<IWeightEntry>>(servicesNames.WeightEntriesTable).toConstantValue(new WeightEntriesTable(mysqlInfo));

// middleware
container.bind<ErrorHandlerMiddleware>(ErrorHandlerMiddleware).toSelf();


export default container;