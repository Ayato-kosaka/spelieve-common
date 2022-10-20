# spelieve-common

## Concept
1. 設計からの完全自動生成を継続的にデプロイすることで、設計からソースコードを乖離させない
2. 複数サービス間で、同じファイルを作成しない(DRY)
3. インターフェイス分離を分離させることで、修正の影響を低コストで確認する（ISP）

## npm
https://www.npmjs.com/package/spelieve-common

## How to npm install from other project
`npm i spelieve-common@latest`

## How to use spelieve Interface in the source code
`import { ${interfaceName} } from 'spelieve-common/lib/Interfaces/Place'`

## How to use spelieve Model in the source code
`import { MPlace } from 'spelieve-common/lib/Models/Place/PDB01/MPlace'`

### How to use model name
`MPlace.modelName => 'MPlace'`

### How to use column names
`MPlace.Cols.lang => 'lang'`
