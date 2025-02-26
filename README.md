# carelearn-admin-web

# 프로젝트 설정 가이드

## Nuxt Minimal Starter

Nuxt에 대한 자세한 내용은 [Nuxt 공식 문서](https://nuxt.com/docs/getting-started/introduction)에서 확인하세요.

## Setup

의존성을 설치하세요:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Node 및 NPM 설정

- **Node 버전:** v20.11.1 (v20 이상 사용해야 함)
- **NPM 버전:** v10.2.4 (v10 이상 사용 권장)
- **NVM 설치:** Node 버전 관리를 위해 NVM을 설치하고 활용

### NVM 명령어

```sh
nvm ls            # 현재 설치된 모든 Node 버전 확인
nvm current       # 현재 설정된 Node 버전 확인
nvm use 20.11.1   # Node 버전을 20.11.1로 변경
```

## 프로젝트 설치 및 확장 프로그램

- **carelearn-admin-web 프로젝트 설치**
- **VS Code 확장 프로그램 설치:**
  - Vue - Official
  - Auto Rename Tag
  - ESLint

## package.json 수정

- `scripts` 항목에서 `nuxt` 명령어를 `nuxi`로 변경
- Nuxt 3에서는 `nuxi`를 공식 빌드 도구로 사용

## TypeScript 설정

- 기본적으로 Nuxt는 성능상의 이유로 `nuxi dev` 또는 `nuxi build` 실행 시 타입을 확인하지 않음
- 타입 검사를 활성화하려면 `vue-tsc` 및 `typescript`를 개발 종속성으로 설치

### 설치 명령어

```sh
npm install -D vue-tsc typescript
```

### nuxt.config.ts 설정

```ts
export default defineNuxtConfig({
  typescript: {
    typeCheck: true
  }
})
```

- `false`로 설정하면 타입 검사를 비활성화할 수 있음
- 프로젝트 내 소스 타입 체크: `npx nuxi typecheck`

## ESLint & Prettier 설정

### 1. 패키지 설치

```sh
npm i -D eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue eslint-plugin-nuxt @typescript-eslint/eslint-plugin @typescript-eslint/parser @nuxtjs/eslint-config-typescript
```

### 2. `.eslintrc.cjs` 파일 추가

### 3. `package.json` script 명령어 추가

```json
"scripts": {
  "lint": "eslint \"**/*.{ts,tsx,vue,js}\" --fix",
  "lint-eslint": "eslint --ignore-path .gitignore **/*{ts,tsx,vue,js,json} --fix",
  "lint-prettier": "prettier --write \"**/*.(ts|tsx|vue|js|json)\""
}
```

### 4. VS Code 설정 추가

- ESLint 및 Prettier 관련 설정 추가

### 5. Vetur / Prettier 확장 패키지 삭제 (필요 시)

## Tailwind 사용

- Tailwind CSS를 프로젝트에 적용

## sidebase/nuxt-auth 사용

- sidebase/nuxt-auth 라이브러리를 통해 로그인관리 

## pinia 사용

- pinia 라이브러리를 통해 상태 관리
- stores 폴더 필요


# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
