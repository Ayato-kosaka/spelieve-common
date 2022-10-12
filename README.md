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
`import { ${interface name} } from 'spelieve-common/lib/Interface'`
