import * as jsondiffpatch from 'jsondiffpatch';
import idArr from './new.json' assert { type: 'json' };
import updatedData from './old.json'  assert { type: 'json' };
console.time('calculateDiff');
jsondiffpatch.diff(idArr, updatedData);
console.timeEnd('calculateDiff');
