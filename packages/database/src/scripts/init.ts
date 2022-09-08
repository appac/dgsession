import {execSync} from 'child_process';

execSync('yarn migrate:latest', {stdio: 'inherit'});
