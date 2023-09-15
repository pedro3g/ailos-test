FROM node:20-alpine3.17

WORKDIR /app

COPY . .

RUN npm i -g pnpm serve

RUN pnpm install --frozen-lockfile
RUN pnpm build
RUN rm -rf node_modules
RUN pnpm prune --prod

EXPOSE 5000

CMD ["serve", "dist/onboarding-cooperado", "-l", "5000"]
