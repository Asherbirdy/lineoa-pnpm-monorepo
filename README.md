## 前置作業
安裝 pnpm (只能使用 pnpm)

```jsx
npm i pnpm -g
```
安裝專案
```jsx
pnpm i
```
## 專案啟動 要更改專案名稱
把 lineoa-monorepo 更為你想要的專案名稱

**package.json**
```jsx
"name": "lineoa-monorepo",
```

```jsx
"@lineoa-monorepos": "workspace:*",
```
**packages/libs/package.json 更改**
```jsx
"name": "@lineoa-monorepo",
```

## 基礎安裝套件

局部安裝 套件

```jsx
pnpm i naiveui --filter vite-demo
```

全局安装 套件

```jsx
pnpm i vueuse -w
```

設定 workspace 共用 package （在根目錄下）

```jsx
pnpm workspace add @lineoa-monorepo/libs
```

## 新增專案流程
```jsx
pnpm new
```
啟動專案
```jsx
pnpm dev:[專案名稱]
```

## 更改 pnpm new 的專案模板
去 plop-templates / package 修改

## 部署
```jsx
pnpm build:[專案名稱]
```
然後去docs 專案的txt 填入專案資料
```jsx
專案：[專案名稱]
測試部署位置：
專案簡介：
```
# lineoa-pnpm-monorepo
