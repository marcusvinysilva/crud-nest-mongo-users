import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mviny:12345@cluster0.w50qb.mongodb.net/db_usersNest?retryWrites=true&w=majority',
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
