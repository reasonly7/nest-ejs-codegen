import { Injectable } from '@nestjs/common';
import * as ejs from 'ejs';

@Injectable()
export class CodegenService {
  codegen() {
    return ejs.render('<%= people.join(", "); %>', {
      people: ['Top', 'Lilei', 'Hanmeimei'],
    });
  }
}
