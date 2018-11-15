const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const { dest } = require('gulp');

function typeScriptify(cb) {
  return tsProject.src()
        .pipe(tsProject())
        .js.pipe(dest("dist"));
}

exports.default = typeScriptify;