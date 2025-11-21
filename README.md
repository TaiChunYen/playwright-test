# Playwright E2E 測試專案

這是一個基於 Playwright 的 Node.js 自動化測試專案，提供登入共用、Codegen 錄製測試

## 安裝

1. 安裝 Node.js（建議 v18 以上）  
2. 初始化專案：
```
npm init -y
```
3. 安裝 Playwright 測試套件
```
npm install -D @playwright/test
```
4. 安裝瀏覽器
```
npx playwright install
```
## 專案資料結構
建議的資料夾結構如下：
```
your-project/
│
├─ tests/                   ← 所有測試檔
│   ├─ login.setup.ts       ← 全域登入設定，產生 storageState.json
│   ├─ test1.spec.ts     ← 其他測試檔
│   └─ test2.spec.ts
│
├─ playwright.config.ts     ← Playwright 設定檔
├─ storageState.json        ← 登入後 cookie/JWT 儲存
├─ node_modules/
├─ package.json
└─ .gitignore
```
## 登入設定 (storageState)
1. 建立 `login.setup.ts`進行登入並存 cookie 到storageState.json
2. 在 `playwright.config.ts` 將 storageState.json 套用到所有測試

## Codegen 產生測試文件
1. 執行以下指令開啟錄製模式：
   ```
   npx playwright codegen {要測試的網址}
   ```
2. Codegen 會開啟瀏覽器，可以錄製操作並直接生成測試程式碼。
3. 生成的程式碼可以保存到 `tests/` 資料夾，直接執行。

## 執行測試
於`your-project/`執行命令:
```
npx playwright test(在背景執行)
npx playwright test --headed(會show出GUI)
```
