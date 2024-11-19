import { Injectable } from '@nestjs/common';
import * as ejs from 'ejs';
import * as path from 'node:path';
import * as fs from 'node:fs';

@Injectable()
export class CodegenService {
  codegen() {
    return '123';
  }
}
