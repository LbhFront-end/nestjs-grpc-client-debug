import { readdirSync, statSync } from 'fs';
import { join } from 'path';
import { GraphQLDefinitionsFactory } from '@nestjs/graphql';


const genarateGraphqlSchema = ({ typePaths, path }: { typePaths: string[], path: string }) => {
  const definitionsFactory = new GraphQLDefinitionsFactory();
  definitionsFactory.generate({
    typePaths,
    path,
    defaultScalarType: 'unknown',
    customScalarTypeMapping: {
      DateTime: 'Date',
    },
    outputAs: 'class',
    watch: true,
  }).catch(err => {
    console.log(err)
  });
}

const readFileList = (dir, filesList = []) => {
  const files = readdirSync(dir);
  files.forEach((item, index) => {
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      readFileList(join(dir, item), filesList);  //递归读取文件
    } else {
      filesList.push(fullPath);
    }
  });
  return filesList;
}

const filesList = [];
readFileList(__dirname + '/graphql', filesList);

const SetMapList = (list) => {
  const result = {};
  list.forEach(v => {
    const arr = v.split("\\");
    const length = v.split("\\").length - 1;
    const name = arr[length];
    const folder = arr[length - 1]
    if (!result[folder]) {
      result[folder] = []
    }
    result[folder].push(name)
  })
  return result;
}

Object.keys(SetMapList(filesList))
  .forEach(folder => {
    genarateGraphqlSchema({
      typePaths: [`./src/graphql/${folder}/*.graphql`],
      path: join(process.cwd(), `src/schema/${folder}.graphql.schema.ts`),
    })

  })
