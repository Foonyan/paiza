# paiza

# 概要
paizaの問題用のリポジトリ

# 使い方
## paizaの問題を選ぶ 

## クローンする
```
$ git clone git@github.com:Foonyan/paiza.git
```
以下のコマンドをmasterブランチで行う。
```
$ git pull origin master
```
以下のコマンドでブランチを作成する。
```
$ git switch -c <ブランチ名>
$ git switch -c d102 
```

## 作成したブランチで、問題番号のディレクトリを作る
例
```
$ mkdir d102
$ cd d102
```

## Readme.mdに問題文を書いておく
作成したフォルダに移動し、ReadMe.mdを作成。
READMEにpaizaの問題を書いておく。
```
"問題内容" > paiza/d102/README.md
git add 
```

## npm init でpackage.jsonを作成する。
全部Enterで良い。

## テストツールを導入する
以下のコマンドで、jestを導入する。
```
$ npm install --save-dev jest
```
package.jsonの以下が変わる。
```
"devDependencies": {
   "jest": "^25.1.0"
 }
```
devDependenciesがすでに記述されている場合、
以下のコマンドで代用可能。
```
npm install 
```

## package.jsonの修正 
以下を追加
```
  "scripts": {
    "test": "jest",
  }
```

## ソースコードを作成しコーディングする
言語ごとのソースを直接生成してよし

javaScriptの場合以下を書いた方が良い。
```
 'use strict'
```


## コミットメモ

編集と追加
```
git add <ファイル名 or *(全ファイル)>
git commit -m "<フィいる名>"
```

ブランチへのpush
```
git push origin <ブランチ名>
```

