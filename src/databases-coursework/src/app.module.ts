import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProjectsModule } from './projects/projects.module';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { RoleGrantModule } from './role-grant/role-grant.module';

@Module({
  imports: [DatabaseModule, ProjectsModule, RolesModule, PermissionsModule, RoleGrantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
